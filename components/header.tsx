"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-amber-50/95 backdrop-blur supports-[backdrop-filter]:bg-amber-50/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/oscar.portfolio/images/profile.jpg"
              alt="Oscar Babin"
              className="h-8 w-8 rounded-full"
            />
            <span className="font-semibold text-amber-800">Oscar Babin</span>
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <Link href="/portfolio">
            <Button variant="ghost" className="text-amber-800 hover:text-amber-900">
              Portfolio
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="ghost" className="text-amber-800 hover:text-amber-900">
              Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className="text-amber-800 hover:text-amber-900">
              Contact
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/y8o" target="_blank">
              <Button variant="ghost" size="icon" className="text-amber-800 hover:text-amber-900">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/oscar-babin" target="_blank">
              <Button variant="ghost" size="icon" className="text-amber-800 hover:text-amber-900">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:oscar.babin@example.com">
              <Button variant="ghost" size="icon" className="text-amber-800 hover:text-amber-900">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t">
          <div className="flex flex-col space-y-2">
            <Button
              asChild
              variant={isActive("/") ? "default" : "ghost"}
              className={
                isActive("/")
                  ? "bg-amber-600 hover:bg-amber-700 w-full justify-start"
                  : "text-gray-700 hover:text-amber-600 w-full justify-start"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              asChild
              variant={isActive("/portfolio") ? "default" : "ghost"}
              className={
                isActive("/portfolio")
                  ? "bg-amber-600 hover:bg-amber-700 w-full justify-start"
                  : "text-gray-700 hover:text-amber-600 w-full justify-start"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/portfolio">Portfolio</Link>
            </Button>
            <Button
              asChild
              variant={isActive("/about") ? "default" : "ghost"}
              className={
                isActive("/about")
                  ? "bg-amber-600 hover:bg-amber-700 w-full justify-start"
                  : "text-gray-700 hover:text-amber-600 w-full justify-start"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/about">About</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
