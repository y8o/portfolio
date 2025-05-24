"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/profile.jpg`}
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
            <span className="hidden font-bold sm:inline-block">
              Oscar
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link href="/about">
              <Button variant="ghost" className="text-sm font-medium">
                About
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="ghost" className="text-sm font-medium">
                Portfolio
              </Button>
            </Link>
            <Link href="/resume">
              <Button variant="ghost" className="text-sm font-medium">
                Resume
              </Button>
            </Link>
            <Link href="/transcript">
              <Button variant="ghost" className="text-sm font-medium">
                Transcript
              </Button>
            </Link>
            <Link href="https://github.com/y8o" target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/oscar-zhang-1a1a1a1a1/" target="_blank">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:oscar.zhang@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>

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
