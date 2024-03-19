/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client"


import { REGEXP_ONLY_DIGITS } from "input-otp"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useSelector } from "react-redux"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "../../components/ui/input-otp"

const Otp = () => {
    const [otp, setOtp] = useState("")
    const [value, setValue] = useState("")
    const user = useSelector((state) => state.auth)
    const userData = user.userData
    const router = useRouter()




    const verifyOtpHandler = async (e: Event) => {
        e.preventDefault()

        if (value === localStorage.getItem("otp")) {
            await axios.post("api/users/signup", userData)
            localStorage.removeItem("otp")
            router.push("/login")
        }
    }


    return (
        <>        <div className='w-[576px] my-10 py-10 gap-8 border rounded-3xl justify-center  flex flex-col items-center '>
            <section className='flex flex-col items-center gap-5 ' >

                <h1 className='text-3xl font-semibold '>Verify your email</h1>

                <div className=' flex flex-col  gap-2 items-center '>
                    <p >Enter the 8 digit code you have received on </p>
                    <p className='font-medium'>{userData.email}</p>
                </div>

            </section >
            <form onSubmit={(e) => verifyOtpHandler(e)} className='  flex flex-col gap-7 w-[80%]  '>
                <div className=' flex flex-col gap-3'>

                    <p className=' '>Code</p>
                    <InputOTP
                        className='mx-auto '
                        maxLength={8}
                        value={value}
                        onChange={(value) => setValue(value)}
                        pattern={REGEXP_ONLY_DIGITS}
                        render={({ slots }) => (
                            <InputOTPGroup>
                                {slots.map((slot, index) => (
                                    <InputOTPSlot key={index} {...slot} />
                                ))}{" "}
                            </InputOTPGroup>
                        )}
                    />
                </div>

                <button disabled={value.length < 6} className='bg-black text-white rounded-md py-3 mt-3 ' type='submit'>VERIFY </button>
            </form>


        </div >
        </>

    )
}

export default Otp

