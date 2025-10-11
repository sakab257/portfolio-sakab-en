import Card from '@/components/experiences/card'
import ProjectList from '@/components/projets/project-list'
import React from 'react'

const Experiences = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full flex flex-col justify-center items-center mx-auto gap-4'>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-center w-[250px] md:w-[400px] xl:w-[800px]">Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">Parcours</span> Professionnel</h1>
        <div className='w-full h-full flex flex-wrap justify-center gap-2 p-4'>
          <Card icon='/icons/icon1.svg' title='Stagiaire Concepteur Développeur' description={`
            Participé au développement d'une plateforme GraphQL/Drupal avec interfaces Next.js, conteneurisation Docker et automatisation CI/CD via GitHub Actions/Vercel, améliorant performance et déploiement.
            `} />
        </div>
      </div>
    </div>
  )
}

export default Experiences