import React from 'react'

export const TextArea = ({placeholder, value, onChange, name}:{placeholder?:string, value?:string, onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, name?: string}) => {
  return (
    <div className='transition-all w-[300px] md:w-[400px] xl:w-[807px] h-[200px] md:h-[220px] xl:h-[250px] rounded-sm flex items-start mx-auto p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37'>
        <textarea name={name} value={value} onChange={onChange} className='rounded-sm w-full h-full bg-gradient-to-r from-[#06091F] to-[#161A31] text-md md:text-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#C1C2D3]' placeholder={placeholder}></textarea>
    </div>
  )
}

export const Input = ({placeholder, value, onChange, name, type = 'text'}:{placeholder?:string, value?:string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, name?: string, type?: string}) => {
  return (
    <div className='transition-all w-[300px] md:w-[400px] xl:w-[807px] h-[45px] md:h-[50px] xl:h-[55px] rounded-sm flex items-center justify-center mx-auto p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37'>
        <input type={type} name={name} value={value} onChange={onChange} className='rounded-sm w-full h-full bg-gradient-to-r from-[#06091F] to-[#161A31] flex gap-2 items-center justify-center text-md md:text-lg px-4 focus:outline-none focus:ring-2 focus:ring-[#C1C2D3]' placeholder={placeholder}></input>
    </div>
  )
}