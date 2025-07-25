export interface WorkItem {
  id: number
  title: string
  image: string
  category: string
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
      { id: 1, title: "Sports Banner 1", image: "/Image1.jpg", category: "Sports" },
      { id: 2, title: "Gaming Banner", image: "/banner2.jpg", category: "Gaming" },
      { id: 3, title: "Event Banner", image: "/banner3.jpg", category: "Event" },
      { id: 4, title: "Promo Banner", image: "/banner4.jpg", category: "Promotional" },
      { id: 5, title: "Sports Banner 2", image: "/placeholder.svg?height=300&width=400", category: "Sports" },
      { id: 6, title: "Tech Banner", image: "/placeholder.svg?height=300&width=400", category: "Technology" },
    ],
  },
  {
    id: "pfp",
    title: "Profile Pictures",
    description: "Custom profile pictures and avatars",
    items: [
      { id: 7, title: "Gaming Avatar 1", image: "/pfp/pfp1.jpg", category: "Gaming" },
      { id: 8, title: "Professional PFP", image: "/pfp/pfp2.jpg", category: "Professional" },
      { id: 9, title: "Anime Style PFP", image: "/pfp/pfp3.jpg", category: "Anime" },
      { id: 10, title: "Minimalist Avatar", image: "/pfp/pfp4.jpg", category: "Minimalist" },
      { id: 11, title: "Gaming Avatar 2", image: "/pfp/pfp5.jpg", category: "Gaming" },
      { id: 12, title: "Creative PFP", image: "/pfp/pfp6.jpg", category: "Creative" },
      { id: 13, title: "Streamer Avatar", image: "/pfp/pfp7.jpg", category: "Streaming" },
      { id: 14, title: "Business PFP", image: "/placeholder.svg?height=300&width=300", category: "Business" },
      { id: 15, title: "Artistic PFP", image: "/placeholder.svg?height=300&width=300", category: "Artistic" },
      { id: 16, title: "Gaming Avatar 3", image: "/placeholder.svg?height=300&width=300", category: "Gaming" },
      { id: 17, title: "Modern PFP", image: "/placeholder.svg?height=300&width=300", category: "Modern" },
    ],
  },
  {
    id: "emotes",
    title: "Emotes",
    description: "Custom emotes for streaming and gaming",
    items: [
      { id: 18, title: "Happy Emote", image: "/placeholder.svg?height=200&width=200", category: "Emotion" },
      { id: 19, title: "Angry Emote", image: "/placeholder.svg?height=200&width=200", category: "Emotion" },
      { id: 20, title: "Gaming Emote", image: "/placeholder.svg?height=200&width=200", category: "Gaming" },
      { id: 21, title: "Celebration Emote", image: "/placeholder.svg?height=200&width=200", category: "Celebration" },
      { id: 22, title: "Sad Emote", image: "/placeholder.svg?height=200&width=200", category: "Emotion" },
      { id: 23, title: "Love Emote", image: "/placeholder.svg?height=200&width=200", category: "Emotion" },
    ],
  },
  {
    id: "mascots",
    title: "Mascots",
    description: "Character mascots and brand representatives",
    items: [
      { id: 24, title: "Gaming Mascot", image: "/placeholder.svg?height=400&width=300", category: "Gaming" },
      { id: 25, title: "Sports Mascot", image: "/placeholder.svg?height=400&width=300", category: "Sports" },
      { id: 26, title: "Brand Mascot", image: "/placeholder.svg?height=400&width=300", category: "Brand" },
      { id: 27, title: "Cute Mascot", image: "/placeholder.svg?height=400&width=300", category: "Cute" },
      { id: 28, title: "Tech Mascot", image: "/placeholder.svg?height=400&width=300", category: "Technology" },
      { id: 29, title: "Animal Mascot", image: "/placeholder.svg?height=400&width=300", category: "Animal" },
    ],
  },
  {
    id: "overlays",
    title: "Overlays",
    description: "Stream overlays and UI elements",
    items: [
      { id: 30, title: "Gaming Overlay", image: "/placeholder.svg?height=300&width=500", category: "Gaming" },
      { id: 31, title: "Minimal Overlay", image: "/placeholder.svg?height=300&width=500", category: "Minimal" },
      { id: 32, title: "Colorful Overlay", image: "/placeholder.svg?height=300&width=500", category: "Colorful" },
      {
        id: 33,
        title: "Professional Overlay",
        image: "/placeholder.svg?height=300&width=500",
        category: "Professional",
      },
      { id: 34, title: "Animated Overlay", image: "/placeholder.svg?height=300&width=500", category: "Animated" },
      { id: 35, title: "Custom Overlay", image: "/placeholder.svg?height=300&width=500", category: "Custom" },
    ],
  },
  {
    id: "logos",
    title: "Logos",
    description: "Brand logos and identity design",
    items: [
      { id: 36, title: "Gaming Logo", image: "/placeholder.svg?height=300&width=300", category: "Gaming" },
      { id: 37, title: "Business Logo", image: "/placeholder.svg?height=300&width=300", category: "Business" },
      { id: 38, title: "Sports Logo", image: "/placeholder.svg?height=300&width=300", category: "Sports" },
      { id: 39, title: "Tech Logo", image: "/placeholder.svg?height=300&width=300", category: "Technology" },
      { id: 40, title: "Creative Logo", image: "/placeholder.svg?height=300&width=300", category: "Creative" },
      { id: 41, title: "Minimal Logo", image: "/placeholder.svg?height=300&width=300", category: "Minimal" },
    ],
  },
]

export function getCollectionById(id: string): Collection | undefined {
  return collections.find((collection) => collection.id === id)
}

export function getAllWorkItems(): WorkItem[] {
  return collections.flatMap((collection) => collection.items)
}
