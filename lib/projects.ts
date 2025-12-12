export type Category = 'ai' | 'mobile' | 'software' | 'web';

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    imageDetail?: string,
    technos: {name: string, url: string}[];
    github?: string;
    website?: string;
    video?: string;
    categories: Category[];
}

export const categoryLabels: Record<Category, string> = {
    ai: 'Artificial Intelligence',
    mobile: 'Mobile Application',
    software: 'Software',
    web: 'Web Application'
};

export const allProjects: Project[] = [
    // AI Projects
    {
        id: "intellidraw",
        title: "IntelliDraw",
        description: "IntelliDraw allows you to draw numbers by hand and get a prediction thanks to a deep learning model trained on the MNIST dataset.",
        longDescription: "IntelliDraw is a handwritten digit recognition application using a convolutional neural network (CNN) trained on the famous MNIST dataset. Users can draw a digit directly in the interface, and the model predicts the recognized digit in real-time with a confidence percentage.",
        image: "/projets/images/test-project.webp",
        technos: [
            {name: "Python", url: "/projets/technos/python.webp"}
        ],
        github: "https://github.com/sakab257/digit-recognizer",
        categories: ["ai"]
    },
    {
        id: "resumind",
        title: "Resumind",
        description: "Resumind allows you to analyze, rate and improve your CV thanks to AI to maximize your chances with recruiters.",
        longDescription: "Resumind is an AI-powered CV analysis tool. It analyzes your CV, identifies strengths and areas for improvement, assigns an overall rating and provides concrete suggestions to optimize your application and maximize your chances with recruiters.",
        image: "/projets/images/resumind.webp",
        imageDetail: "/projets/images/resumind.webp",
        technos: [
            {name: "React", url: "/projets/technos/React.svg"},
            {name: "NextJS", url: "/projets/technos/NextJS.webp"},
            {name: "PuterJS", url: "/projets/technos/puter.webp"},
        ],
        github: "https://github.com/sakab257/resumind",
        website: "https://resumind-sakab.vercel.app/",
        categories: ["ai", "web"]
    },
    {
        id: "optimatch",
        title: "Opti'Match",
        description: "Opti'Match is an AI-powered assistant that recommends the perfect computer equipment tailored to your professional needs, powered by Puter.js and the Claude 3.5 Sonnet API.",
        longDescription: "Opti'Match is an intelligent assistant that analyzes your professional needs (development, design, gaming, office work...) and recommends the ideal computer equipment. Powered by Puter.js and Anthropic's Claude 3.5 Sonnet API, it provides personalized and detailed recommendations.",
        image: "/projets/images/optimatch.webp",
        imageDetail: "/projets/images/optimatch.webp",
        technos: [
            {name: "React", url: "/projets/technos/React.svg"},
            {name: "NextJS", url: "/projets/technos/NextJS.webp"},
            {name: "PuterJS", url: "/projets/technos/puter.webp"},
        ],
        github: "https://github.com/sakab257/opti-match",
        website: "https://opti-match-sakab.vercel.app/",
        categories: ["ai", "web"]
    },





    // Mobile Projects
    {
        id: "pokedex",
        title: "Pokedex",
        description: "A modern Pokedex application with retro styling, displaying GEN 1 Pokémon and items, plus the ability to add Pokémon to favorites thanks to the PokeAPI.",
        longDescription: "This iOS Pokedex application combines retro design inspired by the original games with a modern and fluid interface. It allows you to browse all Pokémon from the first generation, consult their detailed statistics, discover game items and save your favorite Pokémon. Developed in Swift with the PokeAPI.",
        image: "/projets/images/test-project.webp",
        technos: [
            {name: "Swift", url: "/projets/technos/swift.webp"},
            {name: "PokeAPI", url: "/projets/technos/orig.webp"},
        ],
        github: "https://github.com/sakab257/pokedex",
        categories: ["mobile"],
        video:"https://www.youtube.com/shorts/cNhrvyJPCrU"
    },
    {
        id: "weather",
        title: "Weather",
        description: "A modern and elegant iOS weather application offering real-time forecasts and adapted to weather conditions.",
        longDescription: "Weather is an iOS weather application that provides accurate real-time forecasts. Its interface dynamically adapts to current weather conditions, providing an immersive visual experience. It displays hourly and weekly forecasts, as well as detailed data such as humidity, wind and UV.",
        image: "/projets/images/test-project.webp",
        technos: [
            {name: "Swift", url: "/projets/technos/swift.webp"},
            {name: "Open Weather", url: "/projets/technos/open_weather.webp"},
        ],
        github: "https://github.com/sakab257/weather",
        categories: ["mobile"]
    },





    // Software Projects
    {
        id: "javgrympe",
        title: "Jav'Grympe",
        description: "Jav'Grympe allows climbers to browse, select and buy all climbing equipment with a smooth payment system.",
        longDescription: "Jav'Grympe is an e-commerce application dedicated to climbing. It allows climbers to browse a complete catalog of equipment (ropes, harnesses, shoes, quickdraws...), manage their cart and complete their purchases with an integrated payment system. Developed in Java with a MySQL database.",
        image: "/projets/images/test-project.webp",
        technos: [
            {name: "Java", url: "/projets/technos/java.webp"},
            {name: "MySQL", url: "/projets/technos/MySQL.webp"},
        ],
        github: "https://github.com/sakab257/jav-grympe",
        categories: ["software"]
    },
    {
        id: "plagic",
        title: "PlagiC",
        description: "PlagiC allows you to analyze, compare and measure the similarity between C files with powerful detection algorithms.",
        longDescription: "PlagiC is a plagiarism detection tool specialized for the C language. It analyzes and compares multiple source files, measures their similarity using powerful algorithms and generates detailed reports. Ideal for teachers wanting to verify the originality of their students' work.",
        image: "/projets/images/test-project.webp",
        technos: [
            {name: "C", url: "/projets/technos/c.webp"}
        ],
        github: "https://github.com/sakab257/plagic",
        categories: ["software"]
    },





    // Web Projects
    {
        id: "sortify",
        title: "Sortify",
        description: "Sortify allows users to visualize, compare and understand sorting algorithms with an interactive and modern interface.",
        longDescription: "Sortify is an interactive educational tool that allows real-time visualization of the functioning of different sorting algorithms (bubble sort, quick sort, merge sort, etc.). Users can compare performances, adjust animation speed and intuitively understand the complexity of each algorithm.",
        image: "/projets/images/sortify.webp",
        imageDetail: "/projets/images/detail/sortify-detail.webp",
        technos: [
            {name: "React", url: "/projets/technos/React.svg"},
            {name: "NextJS", url: "/projets/technos/NextJS.webp"},
            {name: "Algorithms", url: "/projets/technos/algorithmes.webp"},
        ],
        github: "https://github.com/sakab257/sortify",
        website: "https://sortify-sakab.vercel.app/",
        categories: ["web"]
    },
    {
        id: "cinespark",
        title: "Cinespark",
        description: "CineSpark allows users to search, discover and save their favorite movies with an elegant and responsive interface.",
        longDescription: "CineSpark is a movie discovery web application powered by the TMDB API. It offers an elegant and responsive interface allowing you to search for movies, consult details (synopsis, cast, ratings), discover trends and save your favorite movies to find them easily.",
        image: "/projets/images/cinespark.webp",
        imageDetail: "/projets/images/cinespark.webp",
        technos: [
            {name: "React", url: "/projets/technos/React.svg"},
            {name: "TMDB", url: "/projets/technos/tmdb.webp"},
        ],
        github: "https://github.com/sakab257/cinespark",
        website: "https://cinespark-sakab.vercel.app/",
        categories: ["web"]
    },
    {
        id: "hdnews",
        title: "HD News",
        description: "Honey Drop News allows you to share team news with humor, epic bugs and victories coded in coffee++ mode.",
        longDescription: "HD News is an internal news platform for the Honey Drop team. It allows you to share the latest news, memorable bugs, team victories and coffee++ moments in a relaxed atmosphere. Built with a headless CMS architecture using Drupal and GraphQL.",
        image: "/projets/images/honeydropnews.webp",
        imageDetail: "/projets/images/honeydropnews.webp",
        technos: [
            {name: "React", url: "/projets/technos/NextJS.webp"},
            {name: "GraphQL", url: "/projets/technos/graphql.webp"},
            {name: "Docker", url: "/projets/technos/docker.webp"},
            {name: "Drupal", url: "/projets/technos/drupal.webp"},
        ],
        github: "https://github.com/sakab257/hdnews",
        website: "https://honeydropnews.vercel.app/",
        categories: ["web"]
    },
    {
        id: "graphvizor",
        title: "GraphVizor",
        description: "An interactive graph algorithm visualization application built with Next.js and Cytoscape.js.",
        longDescription: "This web application is a powerful learning and demonstration tool designed to visualize and simulate the behavior of graph theory algorithms interactively and in real time. Built on a modern and responsive user interface, it allows users to create, manipulate and test their own graph structures to observe how algorithms find paths or traverse nodes.",
        image: "/projets/images/graphvizor.webp",
        imageDetail: "/projets/images/detail/graphvizor-detail.webp",
        technos: [
            {name: "React", url: "/projets/technos/React.svg"},
            {name: "NextJS", url: "/projets/technos/NextJS.webp"},
            {name: "Cytoscape", url: "/projets/technos/cytoscape.webp"},
        ],
        github: "https://github.com/sakab257/graphvizor",
        website: "https://graphvizor-sakab.vercel.app/",
        categories: ["web"]
    }
];

// Helper functions to get projects by category
export const aiProjects = allProjects.filter(p => p.categories.includes('ai'));
export const mobileProjects = allProjects.filter(p => p.categories.includes('mobile'));
export const softwareProjects = allProjects.filter(p => p.categories.includes('software'));
export const webProjects = allProjects.filter(p => p.categories.includes('web'));

// Get project by ID
export const getProjectById = (id: string): Project | undefined => {
    return allProjects.find(p => p.id === id);
};
