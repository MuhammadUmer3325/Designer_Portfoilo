import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Twitter, Dribbble, DribbbleIcon as Behance, Globe } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image 
                src="/main logo.webp" 
                alt="Art_Athlete Logo" 
                width={40} 
                height={40} 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional graphic design services for gaming, sports, and business. Creating stunning visuals that
              bring your ideas to life.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed by passionate creatives.<br />
              Crafted to elevate your brand's identity.
            </p>
            <div className="flex space-x-2">
              <Link href="https://instagram.com/Its_ArtAthlete" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Instagram className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://twitter.com/Its_ArtAthlete" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://dribbble.com/Its_ArtAthlete" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Dribbble className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://behance.net/Its_ArtAthlete" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Behance className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-normal">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/banners" className="hover:text-primary transition-colors">
                  Banner Design
                </Link>
              </li>
              <li>
                <Link href="/logos" className="hover:text-primary transition-colors">
                  Logo Design
                </Link>
              </li>
              <li>
                <Link href="/overlays" className="hover:text-primary transition-colors">
                  Stream Overlays
                </Link>
              </li>
              <li>
                <Link href="/collection" className="hover:text-primary transition-colors">
                  Custom Poster
                </Link>
              </li>
              <li>
                <Link href="/pfp" className="hover:text-primary transition-colors">
                  Profile Pictures
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-normal">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/collection" className="hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-normal">Get In Touch</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info.artathlete@gmail.com" className="hover:text-primary transition-colors">
                  info.artathlete@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Twitter className="h-4 w-4 text-primary" />
                <a href="https://twitter.com/Its_ArtAthlete" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @Its_ArtAthlete
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>Available Worldwide</span>
              </div>
            </div>
            <div className="pt-2">
              <Link href="/contact">
                <Button size="sm">Start Project</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">© {currentYear} Art_Athlete. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="/contact" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
