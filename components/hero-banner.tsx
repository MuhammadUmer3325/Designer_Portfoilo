import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroBanner() {
  return (
    <section className="relative w-full aspect-[3/1] sm:h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Heroimage.jpg"
          alt="Hero Banner"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10 sm:bg-black/20"></div>
      </div>
      
      {/* Content - Hidden on mobile, visible on desktop */}
              <div className="hidden sm:block container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 mt-96">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-white text-black hover:bg-gray-100 font-bold uppercase tracking-wide drop-shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <p className="text-white/80 text-sm font-medium animate-pulse">
              Let's create something amazing together
            </p>
          </div>

        </div>
      </div>
      
      {/* Scroll indicator - hidden on very small screens */}
      <div className="hidden sm:block absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
      </div>
    </section>
  )
}
