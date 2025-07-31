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
      { id: 11, title: "Gaming Avatar 1", image: "/pfp/pfp1.jpg", category: "Gaming" },
      { id: 12, title: "Professional PFP", image: "/pfp/pfp2.jpg", category: "Professional" },
      { id: 13, title: "Anime Style PFP", image: "/pfp/pfp3.jpg", category: "Anime" },
      { id: 14, title: "Minimalist Avatar", image: "/pfp/pfp4.jpg", category: "Minimalist" },
      { id: 15, title: "Gaming Avatar 2", image: "/pfp/pfp5.jpg", category: "Gaming" },
      { id: 16, title: "Creative PFP", image: "/pfp/pfp6.jpg", category: "Creative" },
      { id: 17, title: "Streamer Avatar", image: "/pfp/pfp7.jpg", category: "Streaming" },
      { id: 18, title: "Business PFP", image: "/placeholder.svg?height=300&width=300", category: "Business" },
      { id: 19, title: "Artistic PFP", image: "/placeholder.svg?height=300&width=300", category: "Artistic" },
      { id: 20, title: "Gaming Avatar 3", image: "/placeholder.svg?height=300&width=300", category: "Gaming" },
      { id: 21, title: "Modern PFP", image: "/placeholder.svg?height=300&width=300", category: "Modern" },
    ],
  },
  {
    id: "coverart",
    title: "Cover Art",
    description: "Custom cover art and album artwork",
    items: [
      { id: 22, title: "Music Cover 1", image: "/placeholder.svg?height=400&width=400", category: "Music" },
      { id: 23, title: "Album Art 1", image: "/placeholder.svg?height=400&width=400", category: "Album" },
      { id: 24, title: "Podcast Cover", image: "/placeholder.svg?height=400&width=400", category: "Podcast" },
      { id: 25, title: "EP Cover", image: "/placeholder.svg?height=400&width=400", category: "EP" },
      { id: 26, title: "Single Cover", image: "/placeholder.svg?height=400&width=400", category: "Single" },
      { id: 27, title: "Mixtape Cover", image: "/placeholder.svg?height=400&width=400", category: "Mixtape" },
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
