import React from 'react'
import ProjectCard from '@/components/projects/project-card'

const Sofware = () => {
    return (
        <div className="w-full max-w-[1280px] h-full flex flex-wrap justify-center gap-6 p-2 pb-8">
            <ProjectCard
                title="Jav'Grympe"
                link='https://github.com/sakab257/jav-grympe'
                description={`
                Jav'Grympe lets climbers browse, select and purchase climbing gear with a smooth and secure payment system.
                `}
                imageUrl='/projets/images/test-project.svg'
                techno={[
                    {name:"Java",url:"/projets/technos/java.png"},
                    {name:"MySQL",url:"/projets/technos/MySQL.png"},
                ]}
            />

            <ProjectCard
                title='PlagiC'
                link='https://github.com/sakab257/plagic'
                description='
                PlagiC detects, compares and measures similarity between C files using efficient detection algorithms.
                '
                imageUrl='/projets/images/test-project.svg'
                techno={[
                    {name:"C",url:"/projets/technos/c.png"},
                ]}
            />
        </div>
    )
}

export default Sofware