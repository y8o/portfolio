import Image from "next/image"
import Link from "next/link"
import { Project } from "@/lib/data"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Link 
            href={`/portfolio?category=${encodeURIComponent(project.category)}`}
            className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
          >
            {project.category}
          </Link>
          <div className="flex space-x-2">
            {project.technologies.map((tech) => (
              <Link
                key={tech}
                href={`/portfolio?tech=${encodeURIComponent(tech)}`}
                className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded hover:bg-amber-200 transition-colors"
              >
                {tech}
              </Link>
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Link
              key={tag}
              href={`/portfolio?tag=${encodeURIComponent(tag)}`}
              className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
        
        <div className="flex justify-end space-x-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Live Demo →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700 font-medium"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
