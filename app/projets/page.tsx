import ContactMe from '@/components/experiences/contact-me'
import ProjectList from '@/components/projets/project-list'
import React from 'react'

const Projets = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full flex flex-col justify-center items-center mx-auto gap-4'>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-center w-[250px] md:w-[400px] xl:w-[800px]">Tous mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">projets</span> réalisés au cours de ma <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">carrière</span></h1>
        <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-2 gap-y-4 p-2 pb-8'>
          <ProjectList />
        </div>
        <ContactMe />
      </div>
    </div>
  )
}

export default Projets