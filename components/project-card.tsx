import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  category: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors: Record<string, string> = {
    GIS: "bg-green-100 text-green-800",
    "Machine Learning": "bg-blue-100 text-blue-800",
    AI: "bg-purple-100 text-purple-800",
    "Neural Network": "bg-pink-100 text-pink-800",
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <Badge className={`absolute top-2 right-2 ${categoryColors[project.category]}`}>{project.category}</Badge>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-amber-800">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-amber-50">
              {tag}
            </Badge>
          ))}
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
