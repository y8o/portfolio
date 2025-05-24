import { Metadata } from "next"
import { allProjects } from "@/lib/data"
import ProjectFilter from "@/components/project-filter"
import SectionHeading from "@/components/section-heading"

export const metadata: Metadata = {
  title: "Projects | Oscar Babin",
  description: "Browse through my projects in GIS, Machine Learning, and AI.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="All Projects" 
          subtitle="Browse through my complete collection of projects" 
        />
        
        <div className="mt-12">
          <ProjectFilter projects={allProjects} />
        </div>
      </div>
    </main>
  )
} 