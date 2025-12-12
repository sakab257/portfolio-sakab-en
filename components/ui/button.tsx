'use client'
import React, { useState } from 'react'
import {Copy, Check} from 'lucide-react'


interface ButtonProps{
    label:string,
    icon?:React.ReactNode,
}

export const CopyMail = () =>{
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("salim.bouskine@dauphine.eu")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Error while copying:', err)
    }
  }

  return (
    <div className='relative w-[250px] h-[45px] rounded-sm flex items-center justify-center mx-auto p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37 z-10'>
        <button
          className='text-white text-sm w-full h-full bg-gradient-to-r from-[#161A31] to-[#161A31] flex gap-2 items-center justify-center text-md md:text-lg cursor-pointer hover:opacity-80 transition-opacity'
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy my email'} {copied ? <Check className="text-green-400" /> : <Copy />}
        </button>
    </div>
  )
}

export const Button = ({label,icon}:ButtonProps) => {
  return (
    <div className='w-[300px] md:w-[400px] xl:w-[500px] h-[45px] md:h-[50px] xl:h-[55px] rounded-sm flex items-center justify-center mx-auto p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37'>
        <div className='w-full h-full bg-gradient-to-r from-[#06091F] to-[#161A31] flex gap-2 items-center justify-center text-md md:text-lg'>{label} {icon}</div>
    </div>
  )
}
