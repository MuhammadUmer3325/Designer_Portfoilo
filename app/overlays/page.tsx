import { Navbar } from "@/components/navbar"
import { CollectionGrid } from "@/components/collection-grid"
import { WorkModal } from "@/components/work-modal"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { getCollectionById } from "@/lib/data"
import { notFound } from "next/navigation"

export default function OverlaysPage() {
  const collection = getCollectionById("overlays")

  if (!collection) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <BackButton />
        <CollectionGrid collection={collection} />
      </main>
      <Footer />
      <WorkModal />
    </div>
  )
}
