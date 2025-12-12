import React from 'react'

export const Button = ({children, onClick, disabled}: {children: React.ReactNode, onClick?: () => void, disabled?: boolean}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='cursor-pointer w-[300px] md:w-[400px] xl:w-[807px] h-[45px] md:h-[50px] xl:h-[55px] rounded-sm flex items-center justify-center mx-auto p-[2px] bg-gradient-to-r from-[#CBACF9]/15 to-[#D4B7FF]/20 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 transition-opacity'
    >
      <span className='rounded-sm w-full h-full bg-gradient-to-r from-[#06091F] to-[#161A31] flex items-center justify-center text-md md:text-lg font-semibold'>
        {children}
      </span>
    </button>
  )
}
