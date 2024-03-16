"use client"
import React, { useState } from 'react'
import Input from '../_components/utils/input'
import Link from 'next/link'

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    return (
        <div className='w-[576px] my-10 py-10 gap-10 border rounded-3xl justify-center  flex flex-col items-center '>
            <section className='flex flex-col gap-8 items-center ' >
                <h1 className='text-[32px] font-semibold '>Login</h1>
                <div className=' flex flex-col  gap-2 items-center '>
                    <h2 className=' font-medium text-2xl'>Welcome back to ECOMMERCE</h2>
                    <p>The next gen business marketplace</p>
                </div>
            </section>
            <form className=' border-b border-neutral-400 pb-8 flex flex-col gap-7 w-[80%]  '>
                <Input label="Email" placeHolder="Enter" type="email" />
                <div className='relative'>
                    <Input className='' label="Password" placeHolder="Enter" type={passwordVisible ? "text" : "password"} />
                    <span onClick={() => setPasswordVisible(!passwordVisible)} className='absolute top-9 right-0 -translate-x-1/2    cursor-pointer text-sm underline'>show</span>
                </div>
                <button className='bg-black text-white rounded-md py-3 mt-3 ' type='submit'>Login </button>
            </form>
            <section>
                <p className='font-light text-[#333333]'>Don’t have an Account? <Link href="/signUp"> <span className='text-black font-medium'>SIGN UP</span>
                </Link></p>
            </section>
        </div>
    )
}

export default Login
