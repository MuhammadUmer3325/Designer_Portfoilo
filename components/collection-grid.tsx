"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useWorkModal } from "@/hooks/use-work-modal"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Collection } from "@/lib/data"

interface CollectionGridProps {
  collection: Collection
  showFirst?: number
}

export function CollectionGrid({ collection, showFirst }: CollectionGridProps) {
  const { openModal } = useWorkModal()
  const displayItems = showFirst ? collection.items.slice(0, showFirst) : collection.items
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: false,
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps'
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const handleItemClick = (item: any) => {
    openModal({
      id: item.id,
      title: item.title,
      image: item.image,
      category: item.category,
      description: `This is a detailed description of ${item.title}. Created with attention to detail and modern design principles.`,
    })
  }

  const isBannerCollection = collection.id === "banners"
  const isEmoteCollection = collection.id === "emotes"
  const isPfpCollection = collection.id === "pfp"

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{collection.title}</h2>
          <p className="text-muted-foreground mt-2">{collection.description}</p>
        </div>
        {showFirst && collection.items.length > showFirst && (
          <Link href={`/${collection.id}`}>
            <Button variant="outline">See More</Button>
          </Link>
        )}
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:block">
        <div
          className={`grid gap-6 ${
            isBannerCollection
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
              : isEmoteCollection
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                : isPfpCollection
                  ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {displayItems.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
              onClick={() => handleItemClick(item)}
            >
              <CardContent className="p-0">
                {isBannerCollection ? (
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt=""
                        fill
                        className="object-cover blur-md scale-110 opacity-50"
                      />
                    </div>
                    <div className="relative h-full flex items-center justify-center p-4">
                      <div className="relative w-full h-32">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ) : (
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1 truncate">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mobile View - Show all items in grid if no showFirst, otherwise slider */}
      {showFirst ? (
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {displayItems.map((item) => (
                <div key={item.id} className="flex-[0_0_80%] min-w-0">
                  <Card
                    className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 h-full"
                    onClick={() => handleItemClick(item)}
                  >
                    <CardContent className="p-0 h-full">
                      {isBannerCollection ? (
                        <div className="relative h-48 overflow-hidden">
                          <div className="absolute inset-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt=""
                              fill
                              className="object-cover blur-md scale-110 opacity-50"
                            />
                          </div>
                          <div className="relative h-full flex items-center justify-center p-4">
                            <div className="relative w-full h-32">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                fill
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                      ) : (
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold text-sm mb-1 truncate">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          {canScrollPrev && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}
          {canScrollNext && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      ) : (
        <div className="md:hidden">
          <div
            className={`grid gap-4 ${
              isBannerCollection
                ? "grid-cols-1"
                : isEmoteCollection
                  ? "grid-cols-2"
                  : isPfpCollection
                    ? "grid-cols-2"
                    : "grid-cols-1"
            }`}
          >
            {displayItems.map((item) => (
              <Card
                key={item.id}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
                onClick={() => handleItemClick(item)}
              >
                <CardContent className="p-0">
                  {isBannerCollection ? (
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt=""
                          fill
                          className="object-cover blur-md scale-110 opacity-50"
                        />
                      </div>
                      <div className="relative h-full flex items-center justify-center p-4">
                        <div className="relative w-full h-32">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  ) : (
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-1 truncate">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
