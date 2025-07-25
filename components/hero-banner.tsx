import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

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
        <div className="absolute inset-0 bg-black/30 sm:bg-black/40"></div>
      </div>
      
      {/* Content - Hidden on mobile, visible on desktop */}
      <div className="hidden sm:block container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
            Creative
            <span className="text-primary block sm:inline"> Design</span>
            <br className="hidden sm:block" />
            Solutions
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Professional graphic design services including banners, logos, mascots, emotes, and more. Bringing your
            creative vision to life with stunning visual designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button 
              size="lg" 
              className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 w-full sm:w-auto h-10 sm:h-auto"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 bg-transparent border-white text-white hover:bg-white hover:text-black w-full sm:w-auto h-10 sm:h-auto"
            >
              Get In Touch
            </Button>
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
