import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-amber-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-amber-200">A showcase of my work in GIS, Machine Learning, AI, and Neural Networks.</p>
            <p className="text-amber-200">This website was created and is maintained by me, as a project in itself, build with Next.js and deployed to GitHub Pages.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-amber-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-amber-200 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-amber-200 hover:text-white hover:bg-amber-700"
              >
                <Link href="https://github.com/y8o" target="_blank">
                  <Github size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-amber-200 hover:text-white hover:bg-amber-700"
              >
                <Link href="https://www.linkedin.com/in/oscar-babin-7488561b3/" target="_blank">
                  <Linkedin size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-amber-200 hover:text-white hover:bg-amber-700"
              >
                <Link href="mailto:oscar.babin@gmail.com">
                  <Mail size={20} />
                </Link>
              </Button>
            </div>
            <p className="text-amber-200">Feel free to reach out for collaborations or inquiries.</p>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
          <p>© {new Date().getFullYear()} Oscar Babin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
