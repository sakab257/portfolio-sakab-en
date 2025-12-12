import React from 'react'
import ProjectCard from './project-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Web from '@/components/projects/web'
import Mobile from './mobile'
import Software from './software'
import AI from './ai'

const ProjectList = () => {
  return (
    <>
    <Tabs defaultValue="web" className="w-full max-w-[1800px] mx-auto">
      <TabsList className='mx-auto w-fit'>
        <TabsTrigger value="web">Web</TabsTrigger>
        <TabsTrigger value="mobile">Mobile</TabsTrigger>
        <TabsTrigger value="software">Software</TabsTrigger>
        <TabsTrigger value="ai">ML/AI</TabsTrigger>
      </TabsList>
      <TabsContent value="web">
        <Web />
      </TabsContent>
      <TabsContent value="mobile">
        <Mobile />
      </TabsContent>
      <TabsContent value="software">
        <Software />
      </TabsContent>
      <TabsContent value="ai">
        <AI />
      </TabsContent>
    </Tabs>
    </>
  )
}

export default ProjectList