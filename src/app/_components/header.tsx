"use client"
import React, { useState } from 'react'
const sections = [
    {
        title: "Categories",
        linkTo: "/"
    },
    {
        title: "Sale",
        linkTo: "/"
    },
    {
        title: "Clearance",
        linkTo: "/"
    },
    {
        title: "New Stock",
        linkTo: "/"
    },
    {
        title: "Trending",
        linkTo: "/"
    },
]
const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <>
            <div className='w-full flex justify-between items-end h-[100px] pb-3 px-8 '>
                <section>
                    <h1 className='font-bold text-4xl '>ECOMMERCE</h1>
                </section>
                <section>
                    <ul className=' font-semibold flex gap-8'>
                        {sections.map((section, index) => (
                            <li key={index}>
                                {section.title}
                            </li>
                        ))
                        }
                    </ul>
                </section>
                <section className='flex flex-col h-full pt-3 justify-between items-end'>
                    <div className='text-xs space-x-3'>
                        <span>Help</span>
                        <span>Ordering & Refund</span>{
                            loggedIn ? <span>Hi,john</span> : <span>Login</span>
                        }
                    </div>
                    <div className='flex gap-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                </section>

            </div>
            <div>
                <div className='w-full h-9 bg-[#F4F4F4] flex justify-center gap-9 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                    <p className='font-semibold text-sm'>Get 10% off on business sign up</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            </div>
        </>

    )
}

export default Header
