import React, { useId } from 'react'
interface InputProps {
    type: string,
    label: string,
    className: string,


}
const Input = ({
    type = 'text',
    label,
    className,
    ...props


}: InputProps, ref) => {
    const id = useId()
    return (
        <div className='flex flex-col  '>
            {label &&
                <label htmlFor={id} className="group-focus-within:text[#8c7569] text-[16px] cursor-pointer  pl-[4px] transition-[0.3s]">{label}</label>
            }
            <input
                type={type}
                className={` rounded-md outline-none border  border-gray-200 p-3 pl-3  text-sm ${className} `}
                id={id}
                {...props}
                ref={ref} />

        </div>
    )
}

export default React.forwardRef(Input)