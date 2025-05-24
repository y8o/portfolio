import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"
import { allProjects } from "@/lib/data"

interface PortfolioPageProps {
  searchParams: {
    category?: string
    tag?: string
    tech?: string
  }
}

export default function Portfolio({ searchParams }: PortfolioPageProps) {
  const { category, tag, tech } = searchParams

  // Group projects by category
  const gisProjects = allProjects.filter((p) => p.category === "GIS")
  const mlProjects = allProjects.filter((p) => p.category === "Machine Learning")
  const nnProjects = allProjects.filter((p) => p.category === "Neural Network")
  const otherProjects = allProjects.filter((p) => p.category === "Other")

  // Filter projects based on search params
  let filteredProjects = allProjects
  let title = "My Portfolio"
  let subtitle = "Explore my projects across different categories"

  if (category) {
    filteredProjects = allProjects.filter((p) => p.category === category)
    title = `${category} Projects`
    subtitle = `Explore my ${category.toLowerCase()} projects`
  } else if (tag) {
    filteredProjects = allProjects.filter((p) => p.tags.includes(tag))
    title = `Projects tagged with "${tag}"`
    subtitle = `Explore projects related to ${tag.toLowerCase()}`
  } else if (tech) {
    filteredProjects = allProjects.filter((p) => p.technologies.includes(tech))
    title = `Projects using ${tech}`
    subtitle = `Explore projects built with ${tech}`
  }

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-16">
        <SectionHeading title={title} subtitle={subtitle} />

        {!category && !tag && !tech ? (
          <div className="mt-12">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-amber-100">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="gis">GIS</TabsTrigger>
                <TabsTrigger value="ml">Machine Learning</TabsTrigger>
                <TabsTrigger value="nn">Neural Networks</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="gis" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gisProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ml" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mlProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="nn" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nnProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="other" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
