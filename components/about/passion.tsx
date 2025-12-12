import React from 'react'
import Card from '../ui/card'
import Image from 'next/image'

const Passion = () => {
  return (
    <Card>
        <Image src="/vfx/Background.png" alt="Background" width={300} height={170} className='absolute top-0 left-0 pointer-events-none'/>
        <Image src="/vfx/Background.png" alt="Background" width={300} height={170} className='absolute top-0 left-0 pointer-events-none'/>
        <div className='w-full h-full px-4 py-6'>
          <h2 className='text-xl font-bold'>Passionate about <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">tech</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">development</span></h2>
          <Image src="/vfx/passion.svg" alt="Passion" width={270} height={140} className='pointer-events-none absolute bottom-0 opacity-60 left-1/2 -translate-x-1/2' />
        </div>
    </Card>
  )
}

export default Passion