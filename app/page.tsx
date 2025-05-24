import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SectionHeading from "@/components/section-heading"
import { pinnedProjects } from "@/lib/data"

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50">
      {/* Hero/Introduction Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
          Hello, I'm <span className="text-amber-600">Oscar Babin</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
          I'm a passionate professional specializing in GIS, Machine Learning, and AI solutions. With expertise in
          neural networks and data visualization, I create innovative solutions to complex problems.
        </p>
        <div className="flex gap-4">
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
          <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-100">
            <Link href="/about">About Me</Link>
          </Button>
        </div>
      </section>

      {/* Pinned Projects Section */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-t-3xl shadow-sm">
        <SectionHeading title="Featured Projects" subtitle="Explore some of my work" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pinnedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild className="bg-amber-600 hover:bg-amber-700 flex items-center gap-2">
            <Link href="/portfolio">
              View All Projects <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Me Preview Section */}
      <section className="container mx-auto px-4 py-16 bg-amber-100">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src="/placeholder.svg?height=256&width=256" alt="Profile Photo" fill className="object-cover" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <SectionHeading title="About Me" subtitle="Get to know me better" align="left" />
            <p className="text-gray-700 mt-4">
              I'm a dedicated professional with a passion for combining geographic information systems with cutting-edge
              AI and machine learning technologies. With years of experience in developing innovative solutions, I
              strive to create impactful projects that solve real-world problems.
            </p>
            <div className="flex gap-4 mt-6">
              <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-200">
                <Link href="/resume">
                  Resume
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-200">
                <Link href="/transcript">
                  Transcript
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-200">
                <Link href="/files/certifications.pdf" target="_blank">
                  Certifications
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
