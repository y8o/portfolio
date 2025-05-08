"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-amber-600">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Button
              asChild
              variant={isActive("/") ? "default" : "ghost"}
              className={isActive("/") ? "bg-amber-600 hover:bg-amber-700" : "text-gray-700 hover:text-amber-600"}
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              asChild
              variant={isActive("/portfolio") ? "default" : "ghost"}
              className={
                isActive("/portfolio") ? "bg-amber-600 hover:bg-amber-700" : "text-gray-700 hover:text-amber-600"
              }
            >
              <Link href="/portfolio">Portfolio</Link>
            </Button>
            <Button
              asChild
              variant={isActive("/about") ? "default" : "ghost"}
              className={isActive("/about") ? "bg-amber-600 hover:bg-amber-700" : "text-gray-700 hover:text-amber-600"}
            >
              <Link href="/about">About</Link>
            </Button>
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
      </div>
    </header>
  )
}
