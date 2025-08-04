import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Twitter } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:info.artathlete@gmail.com" className="hover:text-primary transition-colors">
              info.artathlete@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Twitter className="h-5 w-5 text-primary" />
            <a href="https://x.com/Its_ArtAthlete" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              @Its_ArtAthlete
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Available Worldwide</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Services</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>• Custom Banner Design</li>
            <li>• Profile Picture Creation</li>
                            <li>• Custom Poster Design</li>
            <li>• Stream Overlay Design</li>
            <li>• Logo & Brand Identity</li>
            <li>• Social Media Graphics</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
