import Image from 'next/image'
import React from 'react'

interface CardProps {
    icon?:string,
    title?:string,
    description?:string
}

const Card = ({icon,title,description}:CardProps) => {
  return (
    <div className='w-[300px] h-[175px] xl:w-[400px] xl:h-[250px] rounded-xl p-[3px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]'>
        <div className='rounded-xl w-full h-full bg-gradient-to-r from-[#06091F] to-[#161A31] flex flex-col text-md p-4 relative overflow-hidden'>
            <Image src="/vfx/blob-haut.png" alt="blob" className='absolute top-0 right-0 pointer-events-none' fill sizes="(max-width: 1280px) 300px, 400px"/>
            <div className='w-full h-full relative flex flex-col gap-4'>
                <Image src={icon || "/icons/icon1.svg"} alt="icon" width={50} height={50} className='xl:w-1/4'/>
                <div>
                    <h2 className='font-bold uppercase text-sm xl:text-lg'>{title}</h2>
                    <p className='text-[#C1C2D3] text-[10px] xl:text-sm'>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card