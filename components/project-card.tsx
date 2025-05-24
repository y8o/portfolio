import Image from "next/image"
import Link from "next/link"
import { Project } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  project: Project
  onFilterChange?: (filter: { type: 'category' | 'tag' | 'tech' | null; value: string | null }) => void
}

export default function ProjectCard({ project, onFilterChange }: ProjectCardProps) {
  const categoryColors: Record<string, string> = {
    GIS: "bg-green-100 text-green-800",
    "Machine Learning": "bg-blue-100 text-blue-800",
    "Neural Network": "bg-pink-100 text-pink-800",
    "Other": "bg-gray-100 text-gray-800",
  }

  const handleFilterClick = (type: 'category' | 'tag' | 'tech', value: string) => {
    if (onFilterChange) {
      onFilterChange({ type, value })
    }
  }

  const renderBadge = (type: 'category' | 'tag' | 'tech', value: string, className: string) => {
    const key = `${type}-${value}`
    if (onFilterChange) {
      return (
        <Badge 
          key={key}
          className={className}
          onClick={() => handleFilterClick(type, value)}
        >
          {value}
        </Badge>
      )
    }
    return <Badge key={key} className={className}>{value}</Badge>
  }

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md h-full">
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {renderBadge(
          'category',
          project.category,
          `absolute top-2 right-2 ${categoryColors[project.category]} cursor-pointer hover:opacity-80`
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-amber-800">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              renderBadge(
                'tech',
                tech,
                "bg-blue-50 text-blue-700 border-blue-200 cursor-pointer hover:opacity-80"
              )
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              renderBadge(
                'tag',
                tag,
                "bg-amber-100 text-amber-800 border-amber-300 cursor-pointer hover:opacity-80"
              )
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between mt-auto pt-4">
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
