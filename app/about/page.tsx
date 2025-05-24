import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import { FileText, Award, GraduationCap, Github, Linkedin, Twitter } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-16">
        <SectionHeading title="About Me" subtitle="Learn more about my background, skills, and interests" />
        <div className="bg-white rounded-xl shadow-sm p-8 mt-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-amber-100 shadow-lg mb-8">
                <Image 
                  src="/images/profile.jpg" 
                  alt="Profile Photo" 
                  fill 
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>

              <div className="flex gap-4 mt-4">
                <Button variant="ghost" size="icon" className="text-amber-700 hover:bg-amber-100">
                  <Github size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-amber-700 hover:bg-amber-100">
                  <Linkedin size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-amber-700 hover:bg-amber-100">
                  <Twitter size={24} />
                </Button>
              </div>

              <div className="mt-8 w-full space-y-4">
                <Button
                  asChild
                  className="w-full bg-amber-600 hover:bg-amber-700 flex items-center gap-2 justify-center"
                >
                  <Link href="/files/resume.pdf" target="_blank">
                    <FileText size={16} /> Resume
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-amber-600 hover:bg-amber-700 flex items-center gap-2 justify-center"
                >
                  <Link href="/files/transcripts.pdf" target="_blank">
                    <GraduationCap size={16} /> Transcripts
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-amber-600 hover:bg-amber-700 flex items-center gap-2 justify-center"
                >
                  <Link href="/files/certifications.pdf" target="_blank">
                    <Award size={16} /> Certifications
                  </Link>
                </Button>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Professional Bio</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  I am a dedicated professional with expertise in Geographic Information Systems (GIS), Machine
                  Learning, Artificial Intelligence, and Neural Networks. With a strong academic background and
                  practical experience, I've developed a unique skill set that allows me to tackle complex problems at
                  the intersection of spatial analysis and AI.
                </p>
                <p>
                  My journey began with a fascination for maps and spatial data, which led me to pursue a degree in
                  Geographic Information Science. As I delved deeper into the field, I discovered the power of combining
                  GIS with machine learning algorithms to extract meaningful insights from spatial data.
                </p>
                <p>
                  Over the years, I've worked on various projects ranging from predictive modeling for urban planning to
                  developing neural networks for satellite image classification. My work aims to bridge the gap between
                  traditional GIS methodologies and cutting-edge AI techniques.
                </p>
                <p>
                  When I'm not coding or analyzing data, you can find me exploring hiking trails, photographing
                  landscapes, or attending tech conferences to stay updated with the latest advancements in my field.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-amber-800 mt-8 mb-4">Skills & Expertise</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "GIS Analysis",
                  "Remote Sensing",
                  "Spatial Statistics",
                  "Machine Learning",
                  "Neural Networks",
                  "Deep Learning",
                  "Python",
                  "R",
                  "JavaScript",
                  "QGIS",
                  "ArcGIS",
                  "TensorFlow",
                  "PyTorch",
                ].map((skill) => (
                  <div key={skill} className="bg-amber-100 px-4 py-2 rounded-full text-amber-800 text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
