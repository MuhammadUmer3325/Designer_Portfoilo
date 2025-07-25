import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"
import { CollectionGrid } from "@/components/collection-grid"
import { WorkModal } from "@/components/work-modal"
import { Footer } from "@/components/footer"
import { collections } from "@/lib/data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner />
      <main className="container mx-auto px-4 py-12 space-y-16">
        {collections.map((collection) => (
          <CollectionGrid key={collection.id} collection={collection} showFirst={4} />
        ))}
      </main>
      <Footer />
      <WorkModal />
    </div>
  )
}
