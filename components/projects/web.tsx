import React from 'react'
import ProjectCard from '@/components/projects/project-card'

const Web = () => {
  return (
    <div className="w-full max-w-[1280px] h-full flex flex-wrap justify-center gap-6 p-2 pb-8">
    <ProjectCard 
          title='Resumind' 
          link='https://resumind-sakab.vercel.app/' 
          description='
          Resumind analyzes, rates and improves your resume using AI to maximize your chances with recruiters.
          ' 
          imageUrl='/projets/images/resumind.svg' 
          techno={[
            {name:"React",url:"/projets/technos/React.svg"},
            {name:"NextJS",url:"/projets/technos/NextJS.png"},
            {name:"PuterJS",url:"/projets/technos/puter.png"},
          ]}
        />
        <ProjectCard 
          title='Sortify' 
          link='https://sortify-sakab.vercel.app/' 
          description='
          Sortify allows users to visualize, compare and understand sorting algorithms with a modern and interactive interface.
          ' 
          imageUrl='/projets/images/sortify.svg' 
          techno={[
            {name:"React",url:"/projets/technos/React.svg"},
            {name:"NextJS",url:"/projets/technos/NextJS.png"},
          ]}
        />
        <ProjectCard 
          title={`Opti'Match`} 
          link='https://opti-match-sakab.vercel.app/' 
          description={`Opti'Match is an AI-powered assistant that recommends perfectly tailored IT equipment based on your professional needs, driven by Puter.js and Claude 3.5 Sonnet API.`} 
          imageUrl='/projets/images/resumind.svg' 
          techno={[
            {name:"React",url:"/projets/technos/React.svg"},
            {name:"NextJS",url:"/projets/technos/NextJS.png"},
            {name:"PuterJS",url:"/projets/technos/puter.png"},
          ]}
        />
        <ProjectCard 
          title='Cinespark' 
          link='https://cinespark-sakab.vercel.app/' 
          description='
          CineSpark lets users search, discover and save their favorite movies with a sleek and responsive interface.
          ' 
          imageUrl='/projets/images/cinespark.svg' 
          techno={[
            {name:"React",url:"/projets/technos/React.svg"},
            {name:"TMDB",url:"/projets/technos/tmdb.png"},
          ]}
        />
        <ProjectCard 
          title='HD News' 
          link='https://honeydropnews.vercel.app/' 
          description='
          Honey Drop News shares updates from the Honey Drop team with humor, epic bugs, and coffee++–powered victories.
          ' 
          imageUrl='/projets/images/hdnews.svg' 
          techno={[
            {name:"React",url:"/projets/technos/NextJS.png"},
            {name:"GraphQL",url:"/projets/technos/graphql.png"},
            {name:"Docker",url:"/projets/technos/docker.png"},
            {name:"Drupal",url:"/projets/technos/drupal.png"},
          ]}
        />

    </div>
  )
}

export default Web