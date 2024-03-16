"use client"
import React, { useState } from 'react'
import Input from '../_components/utils/input'
import Link from 'next/link'

const Otp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    return (
        <div className='w-[576px] my-10 py-10 gap-8 border rounded-3xl justify-center  flex flex-col items-center '>
            <section className='flex flex-col items-center gap-5 ' >
                <h1 className='text-3xl font-semibold '>Verify your email</h1>

                <div className=' flex flex-col  gap-2 items-center '>
                    <p >Enter the 8 digit code you have received on </p>
                    <p className='font-medium'>gou****@gmail.com</p>
                </div>

            </section >
            <form className='  flex flex-col gap-7 w-[80%]  '>
                <Input label="Name" placeHolder="Enter" type="text" />

                <button className='bg-black text-white rounded-md py-3 mt-3 ' type='submit'>VERIFY </button>
            </form>

        </div >
    )
}

export default Otp
