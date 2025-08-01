import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Users, Award, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bebas tracking-tight">About Art_Athlete</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional graphic designer specializing in gaming, sports, and digital content creation. Bringing
              creative visions to life with stunning visual designs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">500+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Palette className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">1000+</div>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">5+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">24/7</div>
                <p className="text-sm text-muted-foreground">Support</p>
              </CardContent>
            </Card>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bebas">My Story</h2>
              <p className="text-muted-foreground">
                Started as a passionate gamer and artist, I discovered my love for graphic design through creating
                content for gaming communities. Over the years, I've honed my skills and expanded into professional
                design services.
              </p>
              <p className="text-muted-foreground">
                Today, I specialize in creating high-quality graphics for streamers, gamers, sports teams, and
                businesses. Every project is crafted with attention to detail and a deep understanding of what makes
                great design.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bebas">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Adobe Photoshop</Badge>
                <Badge variant="secondary">Adobe Illustrator</Badge>
                <Badge variant="secondary">Figma</Badge>
                <Badge variant="secondary">Banner Design</Badge>
                <Badge variant="secondary">Logo Design</Badge>
                <Badge variant="secondary">Character Design</Badge>
                <Badge variant="secondary">UI/UX Design</Badge>
                <Badge variant="secondary">Brand Identity</Badge>
                <Badge variant="secondary">Gaming Graphics</Badge>
                <Badge variant="secondary">Sports Design</Badge>
              </div>
            </div>
          </div>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle>What I Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Gaming Graphics</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom banners, overlays, emotes, and profile pictures for streamers and gamers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Brand Identity</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete logo design and brand identity packages for businesses and teams.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Character Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom mascots and character illustrations for brands and content creators.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Digital Marketing</h3>
                  <p className="text-sm text-muted-foreground">
                    Social media graphics, promotional materials, and marketing visuals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
