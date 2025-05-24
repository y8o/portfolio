import Image from "next/image"
import Link from "next/link"
import { Project } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors: Record<string, string> = {
    GIS: "bg-green-100 text-green-800",
    "Machine Learning": "bg-blue-100 text-blue-800",
    "Neural Network": "bg-pink-100 text-pink-800",
    "Other": "bg-gray-100 text-gray-800",
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Link href={`/portfolio?category=${encodeURIComponent(project.category)}`}>
          <Badge className={`absolute top-2 right-2 ${categoryColors[project.category]} cursor-pointer hover:opacity-80`}>
            {project.category}
          </Badge>
        </Link>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-amber-800">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Link key={tech} href={`/portfolio?tech=${encodeURIComponent(tech)}`}>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 cursor-pointer hover:opacity-80">
                  {tech}
                </Badge>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Link key={tag} href={`/portfolio?tag=${encodeURIComponent(tag)}`}>
                <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300 cursor-pointer hover:opacity-80">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        {project.demoUrl && (
          <Button asChild variant="default" size="sm" className="bg-amber-600 hover:bg-amber-700">
            <Link href={project.demoUrl} target="_blank" className="flex items-center gap-1">
              <ExternalLink size={14} /> Demo
            </Link>
          </Button>
        )}

        {project.githubUrl && (
          <Button asChild variant="outline" size="sm" className="border-amber-600 text-amber-600 hover:bg-amber-100">
            <Link href={project.githubUrl} target="_blank" className="flex items-center gap-1">
              <Github size={14} /> Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
