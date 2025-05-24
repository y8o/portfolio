import { allProjects } from "@/lib/data"
import ProjectCard from "@/components/project-card"
import SectionHeading from "@/components/section-heading"
import { notFound } from "next/navigation"

interface ProjectsPageProps {
  searchParams: {
    type?: string
    value?: string
  }
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { type, value } = searchParams

  if (!type || !value) {
    notFound()
  }

  let filteredProjects = []
  let title = ""
  let subtitle = ""

  switch (type) {
    case "category":
      filteredProjects = allProjects.filter((p) => p.category === value)
      title = `${value} Projects`
      subtitle = `Explore my ${value.toLowerCase()} projects`
      break
    case "tag":
      filteredProjects = allProjects.filter((p) => p.tags.includes(value))
      title = `Projects tagged with "${value}"`
      subtitle = `Explore projects related to ${value.toLowerCase()}`
      break
    case "tech":
      filteredProjects = allProjects.filter((p) => p.technologies.includes(value))
      title = `Projects using ${value}`
      subtitle = `Explore projects built with ${value}`
      break
    default:
      notFound()
  }

  if (filteredProjects.length === 0) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-16">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 