"use client"

import { useState } from "react"
import { Project } from "@/lib/data"
import ProjectCard from "./project-card"
import SectionHeading from "./section-heading"

interface ProjectFilterProps {
  projects: Project[]
}

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<{
    type: 'category' | 'tag' | 'tech' | null;
    value: string | null;
  }>({ type: null, value: null })

  const filteredProjects = activeFilter.type && activeFilter.value
    ? projects.filter(project => {
        if (!activeFilter.value) return true
        switch (activeFilter.type) {
          case 'category':
            return project.category === activeFilter.value
          case 'tag':
            return project.tags.includes(activeFilter.value)
          case 'tech':
            return project.technologies.includes(activeFilter.value)
          default:
            return true
        }
      })
    : projects

  const getFilterTitle = () => {
    if (!activeFilter.type || !activeFilter.value) return null
    
    switch (activeFilter.type) {
      case 'category':
        return `${activeFilter.value} Projects`
      case 'tag':
        return `Projects tagged with "${activeFilter.value}"`
      case 'tech':
        return `Projects using ${activeFilter.value}`
      default:
        return null
    }
  }

  const getFilterDescription = () => {
    if (!activeFilter.type || !activeFilter.value) return null
    
    switch (activeFilter.type) {
      case 'category':
        return `Explore my ${activeFilter.value.toLowerCase()} projects and their applications`
      case 'tag':
        return `Discover projects related to ${activeFilter.value.toLowerCase()} and their implementations`
      case 'tech':
        return `Browse through projects built with ${activeFilter.value} and see how it's applied`
      default:
        return null
    }
  }

  const title = getFilterTitle()
  const description = getFilterDescription()

  return (
    <div>
      {title && description && (
        <SectionHeading 
          title={title} 
          subtitle={description} 
        />
      )}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${title ? 'mt-6' : ''}`}>
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onFilterChange={setActiveFilter}
          />
        ))}
      </div>
    </div>
  )
} 