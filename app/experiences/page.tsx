import Card from '@/components/experiences/card'
import ContactMe from '@/components/experiences/contact-me'
import React from 'react'

const Experiences = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full flex flex-col justify-center items-center mx-auto gap-4 relative'>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-center w-[250px] md:w-[400px] xl:w-[800px]">My Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">Journey</span></h1>
        <div className='w-full h-full flex flex-wrap justify-center gap-2 p-4'>
          <Card icon='/icons/icon1.svg' title='Intern Software Developer' description={`
            Contributed to developing a GraphQL/Drupal platform with Next.js interfaces, Docker containerization, and CI/CD automation via GitHub Actions/Vercel, improving performance and deployment.
            `} />
        </div>
        <div className='w-full h-full mt-auto'>
          <ContactMe />
        </div>
      </div>
    </div>
  )
}

export default Experiences