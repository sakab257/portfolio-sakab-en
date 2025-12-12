import React from 'react'
import ProjectCard from '@/components/projects/project-card'
import { aiProjects } from '@/lib/projects'

const AI = () => {
    return (
        <div className="w-full max-w-[1280px] h-full flex flex-wrap justify-center gap-6 p-2 pb-8">
            {aiProjects.map((project) => (
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

export default AI
