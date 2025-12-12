import ContactMe from '@/components/experiences/contact-me'
import ProjectList from '@/components/projects/project-list'
import React from 'react'

const Projets = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full flex flex-col justify-center items-center mx-auto gap-4'>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-center w-[250px] md:w-[400px] xl:w-[800px]">All my <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">projects</span> completed throughout my <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">career</span></h1>
        <div className='w-full justify-center flex'>
          <ProjectList />
        </div>
        <ContactMe />
      </div>
    </div>
  )
}

export default Projets