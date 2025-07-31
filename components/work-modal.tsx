"use client"

import { useWorkModal } from "@/hooks/use-work-modal"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState, useEffect } from "react"
import { X, Maximize2, Minimize2, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { collections } from "@/lib/data"

export function WorkModal() {
  const { isOpen, closeModal, workData, openModal } = useWorkModal()
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [allImages, setAllImages] = useState<any[]>([])

  // Get all images from all collections
  useEffect(() => {
    if (workData) {
      const allItems = collections.flatMap(collection => collection.items)
      setAllImages(allItems)
      const currentIndex = allItems.findIndex(item => item.id === workData.id)
      setCurrentImageIndex(currentIndex >= 0 ? currentIndex : 0)
    }
  }, [workData])

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
    setZoomLevel(1) // Reset zoom when toggling full screen
  }

  const handleImageClick = () => {
    toggleFullScreen()
  }

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5))
  }

  const handlePrevious = () => {
    if (allImages.length > 0) {
      const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : allImages.length - 1
      setCurrentImageIndex(newIndex)
      const newItem = allImages[newIndex]
      
      // Update modal with new item data
      if (newItem) {
        openModal({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          category: newItem.category,
          description: `This is a detailed description of ${newItem.title}. Created with attention to detail and modern design principles.`,
        })
      }
    }
  }

  const handleNext = () => {
    if (allImages.length > 0) {
      const newIndex = currentImageIndex < allImages.length - 1 ? currentImageIndex + 1 : 0
      setCurrentImageIndex(newIndex)
      const newItem = allImages[newIndex]
      
      // Update modal with new item data
      if (newItem) {
        openModal({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          category: newItem.category,
          description: `This is a detailed description of ${newItem.title}. Created with attention to detail and modern design principles.`,
        })
      }
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      switch (e.key) {
        case 'Escape':
          if (isFullScreen) {
            toggleFullScreen()
          } else {
            closeModal()
          }
          break
        case 'ArrowLeft':
          handlePrevious()
          break
        case 'ArrowRight':
          handleNext()
          break
        case '+':
        case '=':
          if (isFullScreen) {
            e.preventDefault()
            handleZoomIn()
          }
          break
        case '-':
          if (isFullScreen) {
            e.preventDefault()
            handleZoomOut()
          }
          break
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, isFullScreen, currentImageIndex])

  if (!workData) return null

  if (isFullScreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center p-4">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={toggleFullScreen}
          >
            <Minimize2 className="h-6 w-6" />
          </Button>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Zoom Controls */}
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={handleZoomOut}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={handleZoomIn}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-white text-sm">
            {currentImageIndex + 1} / {allImages.length}
          </div>

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <Image
              src={workData.image || "/placeholder.svg"}
              alt={workData.title}
              fill
              className="object-contain cursor-pointer transition-transform duration-200"
              style={{ 
                transform: `scale(${zoomLevel})`,
                cursor: zoomLevel > 1 ? 'grab' : 'pointer'
              }}
              onClick={handleImageClick}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{workData.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative w-full overflow-hidden rounded-lg bg-gray-100">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <Image 
                src={workData.image || "/placeholder.svg"} 
                alt={workData.title} 
                fill 
                className="object-contain cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={handleImageClick}
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              onClick={handleImageClick}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{workData.category}</Badge>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Project Details</h3>
              <p className="text-muted-foreground leading-relaxed">{workData.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <h4 className="font-medium mb-2">Category</h4>
                <p className="text-sm text-muted-foreground">{workData.category}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Project Type</h4>
                <p className="text-sm text-muted-foreground">Custom Design</p>
              </div>
            </div>

            {/* Navigation Controls in Modal */}
            <div className="flex items-center justify-between pt-4 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <span className="text-sm text-muted-foreground">
                {currentImageIndex + 1} of {allImages.length}
              </span>
              
              <Button
                variant="outline"
                onClick={handleNext}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
