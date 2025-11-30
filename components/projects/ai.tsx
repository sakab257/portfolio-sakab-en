import React from 'react'
import ProjectCard from '@/components/projects/project-card'

const AI = () => {
    return (
        <div className="w-full max-w-[1280px] h-full flex flex-wrap justify-center gap-6 p-2 pb-8">
            <ProjectCard 
                title='IntelliDraw' 
                link='https://github.com/sakab257/digit-recognizer' 
                description='
                IntelliDraw lets you draw digits by hand and get predictions using a deep learning model trained on the MNIST dataset.
                ' 
                imageUrl='/projets/images/github.svg' 
                techno={[
                    {name:"Python",url:"/projets/technos/python.png"}
                ]}
            />
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
        </div>
    )
}

export default AI