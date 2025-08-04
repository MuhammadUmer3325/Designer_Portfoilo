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
            <h1 className="text-5xl font-bold tracking-wider bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">About Art_Athlete</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional Graphic Designer specializing in sports visuals from bold banners and posters to eye-catching cover art and motivational wall graphics.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My work brings energy, emotion, and a fan-first mindset to every design. Whether you're a player, team, or sports enthusiast, I help you stand out through powerful, custom-made artwork.
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
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">5+</div>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">24/7</div>
                <p className="text-sm text-muted-foreground">Client Support</p>
              </CardContent>
            </Card>
          </div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide">My Story</h2>
              <p className="text-muted-foreground">
                I started my journey as a passionate sports fan with a love for design. Over time, I turned that passion into a creative profession crafting graphics that capture the intensity, pride, and spirit of the game.
              </p>
              <p className="text-muted-foreground">
                Today, I work with athletes, fans, and sports brands to create dynamic visuals that inspire, represent, and connect.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Adobe Photoshop</Badge>
                <Badge variant="secondary">Adobe Illustrator</Badge>
                <Badge variant="secondary">Figma</Badge>
                <Badge variant="secondary">Poster Design</Badge>
                <Badge variant="secondary">Banner Design</Badge>
                <Badge variant="secondary">Cover Art</Badge>
                <Badge variant="secondary">Social Media Graphics</Badge>
                <Badge variant="secondary">Motivational Wall Posters</Badge>
                <Badge variant="secondary">Sports Tribute Posters</Badge>
                <Badge variant="secondary">Match Day Designs</Badge>
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
                  <h3 className="font-normal mb-2">Custom Sports Posters</h3>
                  <p className="text-sm text-muted-foreground">
                    Player-focused, motivational, tribute, and match-day posters that command attention.
                  </p>
                </div>
                <div>
                  <h3 className="font-normal mb-2">Banners & Cover Art</h3>
                  <p className="text-sm text-muted-foreground">
                    Professionally designed banners and cover graphics for teams, creators, and personal branding.
                  </p>
                </div>
                <div>
                  <h3 className="font-normal mb-2">Social Media Graphics</h3>
                  <p className="text-sm text-muted-foreground">
                    High-impact posts, story templates, and visuals made to boost engagement and showcase your passion for sports.
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
