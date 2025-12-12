import Passion from '@/components/about/passion'
import ComingSoon from '@/components/about/coming-soon'
import TechStack from '@/components/about/tech-stack'
import Contact from '@/components/about/contact'
import Available from '@/components/about/available'
import React from 'react'

const About = () => {
  return (
    <>
      <div className='w-full h-full grid grid-cols-1 xl:grid-cols-2 xl:w-[800px] gap-4 mx-auto place-items-center xl:grid-rows-3'>
        <TechStack />
        <Available />
        <Passion />
        <ComingSoon />
        <Contact />
      </div>
    </>
  )
}

export default About