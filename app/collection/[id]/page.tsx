import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { CollectionGrid } from "@/components/collection-grid"
import { WorkModal } from "@/components/work-modal"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

// This would typically come from a database or API
const collections = [
  {
    id: "banners",
    title: "Banners",
    description: "Sports and promotional banners",
    items: [
      { id: 1, title: "Sports Banner 1", image: "public/Image1.jpg", category: "Sports" },
      { id: 2, title: "Gaming Banner", image: "/placeholder.svg?height=300&width=400", category: "Gaming" },
      { id: 3, title: "Event Banner", image: "/placeholder.svg?height=300&width=400", category: "Event" },
      { id: 4, title: "Promo Banner", image: "/placeholder.svg?height=300&width=400", category: "Promotional" },
      { id: 5, title: "Sports Banner 2", image: "/placeholder.svg?height=300&width=400", category: "Sports" },
      { id: 6, title: "Tech Banner", image: "/placeholder.svg?height=300&width=400", category: "Technology" },
    ],
  },
  {
    id: "pfp",
    title: "Profile Pictures",
    description: "Custom profile pictures and avatars",
    items: [
      { id: 7, title: "Gaming Avatar 1", image: "/placeholder.svg?height=300&width=300", category: "Gaming" },
      { id: 8, title: "Professional PFP", image: "/placeholder.svg?height=300&width=300", category: "Professional" },
      { id: 9, title: "Anime Style PFP", image: "/placeholder.svg?height=300&width=300", category: "Anime" },
      { id: 10, title: "Minimalist Avatar", image: "/placeholder.svg?height=300&width=300", category: "Minimalist" },
      { id: 11, title: "Gaming Avatar 2", image: "/placeholder.svg?height=300&width=300", category: "Gaming" },
      { id: 12, title: "Creative PFP", image: "/placeholder.svg?height=300&width=300", category: "Creative" },
    ],
  },
  {
    id: "emotes",
    title: "Emotes",
    description: "Custom emotes for streaming and gaming",
    items: [
      { id: 13, title: "Happy Emote", image: "/placeholder.svg?height=200&width=200", category: "Emotion" },
      { id: 14, title: "Angry Emote", image: "/placeholder.svg?height=200&width=200", category: "Emotion" },
      { id: 15, title: "Gaming Emote", image: "/placeholder.svg?height=200&width=200", category: "Gaming" },
      { id: 16, title: "Celebration Emote", image: "/placeholder.svg?height=200&width=200", category: "Celebration" },
      { id: 17, title: "Sad Emote", image: "/placeholder.svg?height=200&width=200", category: "Emotion" },
      { id: 18, title: "Love Emote", image: "/placeholder.svg?height=200&width=200", category: "Emotion" },
    ],
  },
  {
    id: "mascots",
    title: "Mascots",
    description: "Character mascots and brand representatives",
    items: [
      { id: 19, title: "Gaming Mascot", image: "/placeholder.svg?height=400&width=300", category: "Gaming" },
      { id: 20, title: "Sports Mascot", image: "/placeholder.svg?height=400&width=300", category: "Sports" },
      { id: 21, title: "Brand Mascot", image: "/placeholder.svg?height=400&width=300", category: "Brand" },
      { id: 22, title: "Cute Mascot", image: "/placeholder.svg?height=400&width=300", category: "Cute" },
      { id: 23, title: "Tech Mascot", image: "/placeholder.svg?height=400&width=300", category: "Technology" },
      { id: 24, title: "Animal Mascot", image: "/placeholder.svg?height=400&width=300", category: "Animal" },
    ],
  },
  {
    id: "overlays",
    title: "Overlays",
    description: "Stream overlays and UI elements",
    items: [
      { id: 25, title: "Gaming Overlay", image: "/placeholder.svg?height=300&width=500", category: "Gaming" },
      { id: 26, title: "Minimal Overlay", image: "/placeholder.svg?height=300&width=500", category: "Minimal" },
      { id: 27, title: "Colorful Overlay", image: "/placeholder.svg?height=300&width=500", category: "Colorful" },
      {
        id: 28,
        title: "Professional Overlay",
        image: "/placeholder.svg?height=300&width=500",
        category: "Professional",
      },
      { id: 29, title: "Animated Overlay", image: "/placeholder.svg?height=300&width=500", category: "Animated" },
      { id: 30, title: "Custom Overlay", image: "/placeholder.svg?height=300&width=500", category: "Custom" },
    ],
  },
  {
    id: "logos",
    title: "Logos",
    description: "Brand logos and identity design",
    items: [
      { id: 31, title: "Gaming Logo", image: "/placeholder.svg?height=300&width=300", category: "Gaming" },
      { id: 32, title: "Business Logo", image: "/placeholder.svg?height=300&width=300", category: "Business" },
      { id: 33, title: "Sports Logo", image: "/placeholder.svg?height=300&width=300", category: "Sports" },
      { id: 34, title: "Tech Logo", image: "/placeholder.svg?height=300&width=300", category: "Technology" },
      { id: 35, title: "Creative Logo", image: "/placeholder.svg?height=300&width=300", category: "Creative" },
      { id: 36, title: "Minimal Logo", image: "/placeholder.svg?height=300&width=300", category: "Minimal" },
    ],
  },
]

export default function CollectionPage({ params }: { params: { id: string } }) {
  const collection = collections.find((c) => c.id === params.id)

  if (!collection) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <CollectionGrid collection={collection} />
      </main>
      <Footer />
      <WorkModal />
    </div>
  )
}
