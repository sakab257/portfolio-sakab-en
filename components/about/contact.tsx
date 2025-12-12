import React from 'react'
import Image from 'next/image'
import {CopyMail} from '../ui/button'

const Contact = () => {
  return (
    <div className='w-[300px] md:w-[400px] xl:w-[807px] h-[170px] text-white rounded-xl p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37 mx-auto overflow-hidden transition-all'>
      <div className='w-full h-full bg-[#07091F] overflow-hidden relative rounded-xl'>
        <div className='w-full h-full'>
            <Image src="/vfx/blob.png" alt="Background" width={300} height={170} className='pointer-events-none absolute left-0' />
            <h2 className='text-xl xl:text-3xl font-bold w-5/6 mx-auto text-center py-6'>Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">together</span> !</h2>
            <CopyMail />
        </div>
      </div>
    </div>
  )
}

export default Contact