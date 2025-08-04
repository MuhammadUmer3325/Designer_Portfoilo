export interface WorkItem {
  id: number
  title: string
  image: string
  category: string
  description?: string
  details?: string
}

export interface Collection {
  id: string
  title: string
  description: string
  items: WorkItem[]
}

export const collections: Collection[] = [
  {
    id: "banners",
    title: "Banners",
    description: "Sports and promotional banners",
    items: [
      { id: 1, title: "Banner 5", image: "/banner5.jpg", category: "Promotional" },
      { id: 2, title: "Banner 6", image: "/banner6.jpg", category: "Promotional" },
      { id: 3, title: "Banner 7", image: "/Banner7.jpg", category: "Promotional" },
      { id: 4, title: "Banner 8", image: "/Banner8.jpg", category: "Promotional" },
      { id: 5, title: "Sports Banner 1", image: "/Image1.jpg", category: "Sports" },
      { id: 6, title: "Gaming Banner", image: "/banner2.jpg", category: "Gaming" },
      { id: 7, title: "Event Banner", image: "/banner3.jpg", category: "Event" },
      { id: 8, title: "Promo Banner", image: "/banner4.jpg", category: "Promotional" },
      { id: 9, title: "Sports Banner 2", image: "/placeholder.svg?height=300&width=400", category: "Sports" },
      { id: 10, title: "Tech Banner", image: "/placeholder.svg?height=300&width=400", category: "Technology" },
    ],
  },
  {
    id: "pfp",
    title: "Profile Pictures",
    description: "Custom profile pictures and avatars",
    items: [
      { id: 11, title: "Gaming Avatar 1", image: "/placeholder.svg?height=300&width=300", category: "Gaming" },
      { id: 12, title: "Professional PFP", image: "/placeholder.svg?height=300&width=300", category: "Professional" },
      { id: 13, title: "Anime Style PFP", image: "/placeholder.svg?height=300&width=300", category: "Anime" },
      { id: 14, title: "Minimalist Avatar", image: "/placeholder.svg?height=300&width=300", category: "Minimalist" },
      { id: 15, title: "Gaming Avatar 2", image: "/placeholder.svg?height=300&width=300", category: "Gaming" },
      { id: 16, title: "Creative PFP", image: "/placeholder.svg?height=300&width=300", category: "Creative" },
      { id: 17, title: "Streamer Avatar", image: "/placeholder.svg?height=300&width=300", category: "Streaming" },
      { id: 18, title: "Business PFP", image: "/placeholder.svg?height=300&width=300", category: "Business" },
      { id: 19, title: "Artistic PFP", image: "/placeholder.svg?height=300&width=300", category: "Artistic" },
      { id: 20, title: "Gaming Avatar 3", image: "/placeholder.svg?height=300&width=300", category: "Gaming" },
      { id: 21, title: "Modern PFP", image: "/placeholder.svg?height=300&width=300", category: "Modern" },
    ],
  },
  {
    id: "coverart",
    title: "Custom Poster",
    description: "Custom poster designs and artwork",
    items: [
      { 
        id: 23, 
        title: "🏀 Jayson Tatum \"Unstoppable\" Motivational Poster", 
        image: "/Poster1.webp", 
        category: "Poster",
        description: "A high-resolution motivational poster featuring NBA star Jayson Tatum in a bold “Unstoppable” theme.\nPerfect for sports fans, gym decor, or anyone seeking daily inspiration through powerful visuals.",
        details: "📐 Print Size: A3 (11.7 x 16.5 inches / 297 x 420 mm)\n(Can be resized for A4 or A2 upon request)\n\n📁 You'll Get:\n1 x High-quality PNG file\n1 x High-resolution PDF (print-ready)\n\n📌 Use It For:\nRoom/Gym wall decoration\nStudy inspiration\nSports-themed workspace setup\nGifting to a basketball fan 🎁"
      },
      { id: 24, title: "Music Cover 1", image: "/placeholder.svg?height=400&width=400", category: "Music" },
      { id: 25, title: "Album Art 1", image: "/placeholder.svg?height=400&width=400", category: "Album" },
      { id: 26, title: "Podcast Cover", image: "/placeholder.svg?height=400&width=400", category: "Podcast" },
      { id: 27, title: "EP Cover", image: "/placeholder.svg?height=400&width=400", category: "EP" },
    ],
  },
  {
    id: "overlays",
    title: "Overlays",
    description: "Stream overlays and UI elements",
    items: [
      { id: 28, title: "Gaming Overlay", image: "/placeholder.svg?height=300&width=500", category: "Gaming" },
      { id: 29, title: "Minimal Overlay", image: "/placeholder.svg?height=300&width=500", category: "Minimal" },
      { id: 30, title: "Colorful Overlay", image: "/placeholder.svg?height=300&width=500", category: "Colorful" },
      {
        id: 31,
        title: "Professional Overlay",
        image: "/placeholder.svg?height=300&width=500",
        category: "Professional",
      },
      { id: 32, title: "Animated Overlay", image: "/placeholder.svg?height=300&width=500", category: "Animated" },
      { id: 33, title: "Custom Overlay", image: "/placeholder.svg?height=300&width=500", category: "Custom" },
    ],
  },
  {
    id: "logos",
    title: "Logos",
    description: "Brand logos and identity design",
    items: [
      { id: 34, title: "Gaming Logo", image: "/placeholder.svg?height=300&width=300", category: "Gaming" },
      { id: 35, title: "Business Logo", image: "/placeholder.svg?height=300&width=300", category: "Business" },
      { id: 36, title: "Sports Logo", image: "/placeholder.svg?height=300&width=300", category: "Sports" },
      { id: 37, title: "Tech Logo", image: "/placeholder.svg?height=300&width=300", category: "Technology" },
      { id: 38, title: "Creative Logo", image: "/placeholder.svg?height=300&width=300", category: "Creative" },
      { id: 39, title: "Minimal Logo", image: "/placeholder.svg?height=300&width=300", category: "Minimal" },
    ],
  },
]

export function getCollectionById(id: string): Collection | undefined {
  return collections.find((collection) => collection.id === id)
}

export function getAllWorkItems(): WorkItem[] {
  return collections.flatMap((collection) => collection.items)
}
