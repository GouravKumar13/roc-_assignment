"use client"
import React, { useState } from 'react'
import Input from '../_components/utils/input'
import Link from 'next/link'

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    return (
        <div className='w-[576px] my-10 pt-10 pb-32 gap-8 border rounded-3xl justify-center  flex flex-col items-center '>
            <section className=' ' >
                <h1 className='text-3xl font-semibold '>Create your account</h1>

            </section>
            <form className='  flex flex-col gap-7 w-[80%]  '>
                <Input label="Name" placeholder="Enter" type="text" />
                <Input label="Email" placeholder="Enter" type="email" />
                <div className='relative'>
                    <Input className='' label="Password" placeholder="Enter" type={passwordVisible ? "text" : "password"} />
                    <span onClick={() => setPasswordVisible(!passwordVisible)} className='absolute top-9 right-0 -translate-x-1/2    cursor-pointer text-sm underline'>show</span>
                </div>
                <button className='bg-black text-white rounded-md py-3 mt-3 ' type='submit'>CREATE ACCOUNT </button>
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
