import React from 'react'
import ProjectCard from '@/components/projects/project-card'
import { webProjects } from '@/lib/projects'

const Web = () => {
    return (
        <div className="w-full max-w-[1280px] h-full flex flex-wrap justify-center gap-6 p-2 pb-8">
            {webProjects.map((project) => (
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

export default Web
