'use client'

import Link from 'next/link'
import React, { useRef, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const links = [
    {href:"/",label:"home"},
    {href:"/about",label:"about"},
    {href:"/projects",label:"projects"},
    {href:"/experiences",label:"experiences"},
    {href:"/contact",label:"contact"},
]

const Navbar = () => {
  const pathname = usePathname()
  const navRef = useRef<HTMLUListElement>(null)
  const linkRefs = useRef<Map<string, HTMLLIElement>>(new Map())
  const [indicatorPosition, setIndicatorPosition] = useState({ left: 0, opacity: 0 })

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const getActiveHref = () => {
    return links.find(link => isActiveLink(link.href))?.href
  }

  useEffect(() => {
    const updateIndicator = () => {
      const activeHref = getActiveHref()
      if (activeHref) {
        const activeLi = linkRefs.current.get(activeHref)
        if (activeLi) {
          const { offsetLeft, offsetWidth } = activeLi
          setIndicatorPosition({
            left: offsetLeft + offsetWidth / 2,
            opacity: 1
          })
        }
      } else {
        setIndicatorPosition(prev => ({ ...prev, opacity: 0 }))
      }
    }

    updateIndicator()

    window.addEventListener('resize', updateIndicator)

    return () => {
      window.removeEventListener('resize', updateIndicator)
    }
  }, [pathname])

  return (
    <div className='mt-6 transition-all text-[10px] md:text-sm xl:text-md w-[300px] md:w-[400px] xl:w-[500px] h-[45px] md:h-[50px] xl:h-[55px] rounded-sm flex items-center justify-center mx-auto p-[2px] bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C]/37 z-10 mb-10'>
        <ul ref={navRef} className='flex items-center justify-center xl:justify-evenly w-full gap-4 h-full bg-[#0B0D22] text-[#C1C2D3] rounded-sm transition-all relative'>
            <div
                className='w-2 h-2 bg-white absolute rounded-full bottom-0 transition-all duration-500 ease-in-out pointer-events-none'
                style={{
                    left: `${indicatorPosition.left}px`,
                    transform: 'translateX(-50%)',
                    opacity: indicatorPosition.opacity
                }}
            />
            {links.map((link) => (
                <li
                    key={link.label}
                    ref={(el) => {
                        if (el) linkRefs.current.set(link.href, el)
                    }}
                >
                    <Link
                        href={link.href}
                        className={`capitalize cursor-pointer hover:text-white transition-all ${
                            isActiveLink(link.href) ? 'text-white' : ''
                        }`}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default Navbar
