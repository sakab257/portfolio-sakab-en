import React from 'react'
import ProjectCard from '@/components/projects/project-card'

const Mobile = () => {
    return (
        <div className="w-full max-w-[1280px] h-full flex flex-wrap justify-center gap-6 p-2 pb-8">
        <ProjectCard
            title='Pokedex'
            link='https://github.com/sakab257/pokedex'
            description='
            A modern, retro-styled Pokedex application built with SwiftUI that displays Gen 1 Pokemon, Items and let you adding Pokemon as Favourites using the PokeAPI.
            '
            imageUrl='/projets/images/test-project.svg'
            techno={[
            {name:"Swift",url:"/projets/technos/swift.png"},
            {name:"PokeAPI",url:"/projets/technos/orig.png"},
            ]}
        />
        <ProjectCard
            title='Weather'
            link='https://github.com/sakab257/weather'
            description='
            A modern, elegant iOS weather application built with SwiftUI that provides real-time weather forecasts with a beautiful, weather-adaptive interface.
            '
            imageUrl='/projets/images/test-project.svg'
            techno={[
            {name:"Swift",url:"/projets/technos/swift.png"},
            {name:"Open Weather",url:"/projets/technos/open_weather.png"},
            ]}
        />

        
        </div>
    )
}

export default Mobile