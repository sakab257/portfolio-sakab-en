import { getProjectById, allProjects, categoryLabels } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Play } from 'lucide-react'

// Converts any YouTube URL to embed format
const getYouTubeEmbedUrl = (url: string): string => {
    // Already in embed format
    if (url.includes('/embed/')) {
        return url
    }

    let videoId = ''

    // Format: youtube.com/watch?v=VIDEO_ID
    if (url.includes('watch?v=')) {
        videoId = url.split('watch?v=')[1]?.split('&')[0] || ''
    }
    // Format: youtube.com/shorts/VIDEO_ID
    else if (url.includes('/shorts/')) {
        videoId = url.split('/shorts/')[1]?.split('?')[0] || ''
    }
    // Format: youtu.be/VIDEO_ID
    else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0] || ''
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
}

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        id: project.id,
    }))
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const project = getProjectById(id)

    if (!project) {
        notFound()
    }

    return (
        <div className='w-full min-h-screen'>
            <div className='w-full max-w-[1000px] mx-auto flex flex-col gap-8 p-4 md:p-8'>
                {/* Back button */}
                <Link
                    href="/projects"
                    className='flex items-center gap-2 text-[#C1C2D3] hover:text-white transition-colors w-fit'
                >
                    <ArrowLeft className='size-4' />
                    Back to projects
                </Link>

                {/* Header */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-wrap gap-2'>
                        {project.categories.map((cat) => (
                            <span
                                key={cat}
                                className='text-sm text-[#CBACF9] font-medium bg-[#CBACF9]/10 px-3 py-1 rounded-full'
                            >
                                {categoryLabels[cat]}
                            </span>
                        ))}
                    </div>
                    <h1 className='text-4xl md:text-5xl font-bold'>{project.title}</h1>
                </div>

                {/* Main image */}
                {project.imageDetail && (
                    <div className='w-full aspect-video rounded-2xl bg-gradient-to-r from-[#6971A2]/16 to-[#272A3C] p-[3px]'>
                        <div className='w-full h-full rounded-2xl bg-gradient-to-r from-[#06091F] to-[#161A31] overflow-hidden relative'>
                            <Image
                                src={project.imageDetail}
                                alt={project.title}
                                fill
                                className='object-contain p-8'
                            />
                        </div>
                    </div>
                )}

                {/* Video demo (if available) */}
                {project.video && (
                    <div className='w-full'>
                        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
                            <Play className='size-5 text-[#CBACF9]' />
                            Video Demo
                        </h2>
                        <div className='w-full aspect-video rounded-2xl overflow-hidden'>
                            <iframe
                                src={getYouTubeEmbedUrl(project.video)}
                                className='w-full h-full'
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

                {/* Description */}
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold'>About the project</h2>
                    <p className='text-[#C1C2D3] text-lg leading-relaxed'>
                        {project.longDescription || project.description}
                    </p>
                </div>

                {/* Technologies */}
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold'>Technologies used</h2>
                    <div className='flex flex-wrap gap-4'>
                        {project.technos.map((techno) => (
                            <div
                                key={techno.name}
                                className='flex items-center gap-3 bg-gradient-to-r from-[#06091F] to-[#161A31] rounded-xl px-4 py-3 border border-[#6971A2]/20'
                            >
                                <div className='w-[40px] h-[40px] bg-[#0B0E23] rounded-full flex justify-center items-center'>
                                    <Image
                                        src={techno.url}
                                        alt={techno.name}
                                        width={50}
                                        height={50}
                                        className='p-2 rounded-full'
                                    />
                                </div>
                                <span className='font-medium'>{techno.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold'>Links</h2>
                    <div className='flex flex-wrap gap-4'>
                        {project.github && (
                            <Link
                                href={project.github}
                                target='_blank'
                                className='flex items-center gap-2 bg-[#0B0E23] hover:bg-[#161A31] transition-colors rounded-xl px-6 py-3 border border-[#6971A2]/20'
                            >
                                <Github className='size-5' />
                                View on GitHub
                            </Link>
                        )}
                        {project.website && (
                            <Link
                                href={project.website}
                                target='_blank'
                                className='flex items-center gap-2 bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF] text-black font-medium rounded-xl px-6 py-3'
                            >
                                <ExternalLink className='size-5' />
                                Visit website
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
