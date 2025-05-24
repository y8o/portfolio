import { allProjects } from "@/lib/data"
import ProjectCard from "@/components/project-card"
import SectionHeading from "@/components/section-heading"

export default function Projects() {
  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="All Projects" 
          subtitle="Browse through my complete collection of projects" 
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
} 