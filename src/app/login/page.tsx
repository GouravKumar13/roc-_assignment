/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import Input from '../_components/utils/input'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { login } from '../GlobalRedux/userSlice/user.slice'
const Login = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [active, setActive] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await axios.post("/api/users/login", formData)

            dispatch(login(response.data.user))
            router.push("/")

        } catch (error: any) {
            console.log("signup error", error.message)
        }

    }
    useEffect(() => {
        setActive(!(formData.email && formData.password));
    }, [formData]);

    return (
        <div className='w-[576px] my-10 py-10 gap-10 border rounded-3xl justify-center  flex flex-col items-center '>
            <section className='flex flex-col gap-8 items-center ' >
                <h1 className='text-[32px] font-semibold '>Login</h1>
                <div className=' flex flex-col  gap-2 items-center '>
                    <h2 className=' font-medium text-2xl'>Welcome back to ECOMMERCE</h2>
                    <p>The next gen business marketplace</p>
                </div>
            </section>
            <form onSubmit={(e) => handleSubmit(e)} className=' border-b border-neutral-400 pb-8 flex flex-col gap-7 w-[80%]  '>
                <Input label="Email" placeholder="Enter" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <div className='relative'>
                    <Input className='' label="Password" placeholder="Enter" type={passwordVisible ? "text" : "password"}

                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    <span onClick={() => setPasswordVisible(!passwordVisible)} className='absolute top-9 right-0 -translate-x-1/2    cursor-pointer text-sm underline'>show</span>
                </div>
                <button disabled={active} className='bg-black text-white rounded-md py-3 mt-3 ' type='submit'>Login </button>
            </form>
            <section>
                <p className='font-light text-[#333333]'>Don’t have an Account? <Link href="/signup"> <span className='text-black font-medium'>SIGN UP</span>
                </Link></p>
            </section>
        </div>
    )
}

export default Login
