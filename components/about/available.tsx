import React from 'react'
import Card from '../ui/card'
import Image from 'next/image'

const FullRemote = () => {
    return (
        <div className='w-fit h-[25px] rounded-sm flex items-center justify-center mx-auto p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37 absolute top-1/2 right-3'>
            <div className='w-fit h-full bg-gradient-to-r from-[#06091F] to-[#161A31] flex gap-2 items-center justify-center text-xs px-3'>Full-remote</div>
        </div>
    )
}

const OnSite = () => {
    return (
        <div className='w-fit h-[25px] rounded-sm flex items-center justify-center mx-auto p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37 absolute top-2/3 left-3'>
            <div className='w-fit h-full bg-gradient-to-r from-[#06091F] to-[#161A31] flex gap-2 items-center justify-center text-xs px-3'>On-site</div>
        </div>
    )
}

const Hybrid = () => {
    return (
        <div className='w-fit h-[25px] rounded-sm flex items-center justify-center mx-auto p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37 absolute top-3/4 left-1/2 -translate-x-1/2'>
            <div className='w-fit h-full bg-gradient-to-r from-[#06091F] to-[#161A31] flex gap-2 items-center justify-center text-xs px-3'>Hybrid</div>
        </div>
    )
}

const Available = () => {
    return (
    <Card>
        <div className='w-full h-full px-4 py-6 relative'>
            <h2 className='text-xl font-bold'>Available for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">opportunities</span> at all scales</h2>
            <Image src="/vfx/world.webp" alt="World" width={350} height={170} className='pointer-events-none absolute bottom-0 right-0' />
            <FullRemote />
            <OnSite />
            <Hybrid />
        </div>
    </Card>
    )
}

export default Available