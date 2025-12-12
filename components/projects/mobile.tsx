import React from 'react'
import ProjectCard from '@/components/projects/project-card'
import { mobileProjects } from '@/lib/projects'

const Mobile = () => {
    return (
        <div className="w-full max-w-[1280px] h-full flex flex-wrap justify-center gap-6 p-2 pb-8">
            {mobileProjects.map((project) => (
                <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.image}
                    techno={project.technos}
                />
            ))}
        </div>
    )
}

export default Mobile
