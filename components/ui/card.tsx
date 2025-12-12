import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-[300px] md:w-[400px] h-[170px] text-white rounded-xl p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37 mx-auto overflow-hidden transition-all'>
      <div className='w-full h-full bg-[#07091F] overflow-hidden relative rounded-xl'>
        {children}
      </div>
    </div>
  )
}

export default Card