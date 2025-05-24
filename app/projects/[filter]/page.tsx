import { allProjects } from "@/lib/data"
import ProjectCard from "@/components/project-card"
import SectionHeading from "@/components/section-heading"
import { notFound } from "next/navigation"

interface FilteredProjectsPageProps {
  params: Promise<{
    filter: string
  }>
}

interface StaticParam {
  filter: string
}

export async function generateStaticParams(): Promise<StaticParam[]> {
  const params: StaticParam[] = []

  // Add category params
  const categories = [...new Set(allProjects.map(p => p.category))]
  categories.forEach(category => {
    params.push({ filter: `category:${encodeURIComponent(category)}` })
  })

  // Add tag params
  const tags = [...new Set(allProjects.flatMap(p => p.tags))]
  tags.forEach(tag => {
    params.push({ filter: `tag:${encodeURIComponent(tag)}` })
  })

  // Add technology params
  const technologies = [...new Set(allProjects.flatMap(p => p.technologies))]
  technologies.forEach(tech => {
    params.push({ filter: `tech:${encodeURIComponent(tech)}` })
  })

  return params
}

export default async function FilteredProjectsPage({ params }: FilteredProjectsPageProps) {
  const { filter } = await params
  
  if (!filter) {
    notFound()
  }

  const [filterType, encodedFilterValue] = filter.split(":")
  
  if (!filterType || !encodedFilterValue) {
    notFound()
  }

  const filterValue = decodeURIComponent(encodedFilterValue)

  let filteredProjects = []
  let title = ""
  let subtitle = ""

  switch (filterType) {
    case "category":
      filteredProjects = allProjects.filter((p) => p.category === filterValue)
      title = `${filterValue} Projects`
      subtitle = `Explore my ${filterValue.toLowerCase()} projects`
      break
    case "tag":
      filteredProjects = allProjects.filter((p) => p.tags.includes(filterValue))
      title = `Projects tagged with "${filterValue}"`
      subtitle = `Explore projects related to ${filterValue.toLowerCase()}`
      break
    case "tech":
      filteredProjects = allProjects.filter((p) => p.technologies.includes(filterValue))
      title = `Projects using ${filterValue}`
      subtitle = `Explore projects built with ${filterValue}`
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