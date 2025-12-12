import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import {ArrowUpRight} from "lucide-react"
import Link from 'next/link'

const ContactMe = () => {
  return (
    <div className='w-full h-75 relative flex flex-col items-center justify-between'>
        <Image src="/vfx/grid-pattern.svg" alt='Grid Pattern' fill sizes="100vw" className='-z-10'/>
        <h2 className='text-4xl text-center w-4/5 font-extrabold'><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">Ready</span> to take it to the next <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">level</span> ?</h2>
        <div className='text-center text-[#C1C2D3] text-lg'>
            <p>{`Let's talk about your goals.`}</p>
            <p>Contact me today</p>
        </div>
        <Link href="/contact"><Button label="Contact Me" icon={<ArrowUpRight />}/></Link>
    </div>
  )
}

export default ContactMe