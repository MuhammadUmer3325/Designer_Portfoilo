"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const leftNavItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ]

  const rightNavItems = [
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    { name: "Banners", href: "/banners" },
    { name: "Profile Pictures", href: "/pfp" },
    { name: "Cover Art", href: "/collection" },
    { name: "Overlays", href: "/overlays" },
    { name: "Logos", href: "/logos" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-center">
          {/* Left Navigation - Desktop Only */}
          <div className="hidden md:flex items-center space-x-6 mr-24">
            {leftNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-bold transition-colors hover:text-primary uppercase tracking-wide ${
                  item.name === "Home" ? "mr-4" : item.name === "About" ? "ml-2" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/main logo.png" 
                alt="Art_Athlete Logo" 
                width={50} 
                height={50} 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Right Navigation - Desktop Only */}
          <div className="hidden md:flex items-center space-x-4 ml-16">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-bold hover:text-primary uppercase tracking-wide">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link href={service.href} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Contact Link */}
            {rightNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold transition-colors hover:text-primary uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <Button variant="ghost" size="sm" className="md:hidden absolute right-4" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-3">
              {leftNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="px-2 py-1">
                <div className="text-sm font-semibold text-muted-foreground mb-2">Services</div>
                <div className="flex flex-col space-y-2 ml-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="text-sm font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile Contact */}
              {rightNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
