"use client"

import { useWorkModal } from "@/hooks/use-work-modal"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"
import { X, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WorkModal() {
  const { isOpen, closeModal, workData } = useWorkModal()
  const [isFullScreen, setIsFullScreen] = useState(false)

  if (!workData) return null

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  const handleImageClick = () => {
    toggleFullScreen()
  }

  if (isFullScreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={toggleFullScreen}
          >
            <Minimize2 className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 left-4 z-10 text-white hover:bg-white/20"
            onClick={closeModal}
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={workData.image || "/placeholder.svg"}
              alt={workData.title}
              fill
              className="object-contain"
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
