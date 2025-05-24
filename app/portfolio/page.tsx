import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { allProjects } from "@/lib/data"
import ProjectFilter from "@/components/project-filter"
import SectionHeading from "@/components/section-heading"

export const metadata: Metadata = {
  title: "Portfolio | Oscar Babin",
  description: "Explore my projects in GIS, Machine Learning, and AI.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="My Portfolio" 
          subtitle="Explore my projects across different categories" 
        />

        <div className="mt-12">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-amber-100">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="gis">GIS</TabsTrigger>
              <TabsTrigger value="ml">Machine Learning</TabsTrigger>
              <TabsTrigger value="nn">Neural Networks</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <ProjectFilter projects={allProjects} />
            </TabsContent>

            <TabsContent value="gis" className="mt-6">
              <ProjectFilter projects={allProjects.filter(project => project.category === "GIS")} />
            </TabsContent>

            <TabsContent value="ml" className="mt-6">
              <ProjectFilter projects={allProjects.filter(project => project.category === "Machine Learning")} />
            </TabsContent>

            <TabsContent value="nn" className="mt-6">
              <ProjectFilter projects={allProjects.filter(project => project.category === "Neural Network")} />
            </TabsContent>

            <TabsContent value="other" className="mt-6">
              <ProjectFilter projects={allProjects.filter(project => project.category === "Other")} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
