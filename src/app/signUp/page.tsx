/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Input from '../_components/utils/input'
import { useDispatch } from 'react-redux'
import { login } from '../GlobalRedux/userSlice/user.slice'

interface user {
    name: string;
    email: string;
    password: string;
}

function SignUp() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [active, setActive] = useState(false)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })





    // useEffect to check if all parameters are provided and update isSubmitDisabled accordingly
    useEffect(() => {
        setActive(!(user.name && user.email && user.password));
    }, [user]);


    const onSignup = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        dispatch(login(user))
        const getotp = await axios.post('/api/users/otp', user)
        localStorage.setItem("otp", getotp.data.verificationCode)
        router.push("/otp")




    }

    return (
        <div className='w-[576px] my-10 pt-10 pb-32 gap-8 border rounded-3xl justify-center  flex flex-col items-center '>
            <section className=' ' >
                <h1 className='text-3xl font-semibold '>Create your account</h1>

            </section>
            <form onSubmit={(e) => onSignup(e)} className='  flex flex-col gap-7 w-[80%]  '>
                <Input label="Name" placeholder="Enter" type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                <Input label="Email" placeholder="Enter" type="email" value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <div className='relative'>
                    <Input className='' label="Password" placeholder="Enter" type={passwordVisible ? "text" : "password"}
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <span onClick={() => setPasswordVisible(!passwordVisible)} className='absolute top-9 right-0 -translate-x-1/2    cursor-pointer text-sm underline'>show</span>
                </div>
                <button className='bg-black text-white rounded-md py-3 mt-3 ' type='submit' disabled={active}>CREATE ACCOUNT </button>
            </form>
            <section>
                <p className='font-light text-[#333333]'>Have an Account?
                    <Link href="login">
                        <span className='font-medium text-black'>LOGIN</span>
                    </Link>

                </p>
            </section>
        </div>
    )
}

export default SignUp
