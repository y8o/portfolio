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
                  href="/files/resume.pdf"
                  target="_blank"
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
                <Link href="https://github.com" target="_blank">
                  <Github size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-amber-200 hover:text-white hover:bg-amber-700"
              >
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-amber-200 hover:text-white hover:bg-amber-700"
              >
                <Link href="https://twitter.com" target="_blank">
                  <Twitter size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-amber-200 hover:text-white hover:bg-amber-700"
              >
                <Link href="mailto:your.email@example.com">
                  <Mail size={20} />
                </Link>
              </Button>
            </div>
            <p className="text-amber-200">Feel free to reach out for collaborations or inquiries.</p>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
