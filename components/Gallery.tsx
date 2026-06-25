"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  { src: "/images/gallery/IMG_8553.jpg", alt: "Vista Legal office reception area" },
  { src: "/images/gallery/IMG_8561.jpg", alt: "Vista Legal team at work" },
  {
    src: "/images/gallery/IMG_8797.jpg",
    alt: "Advocates Manoj Kumar J Y and Subhash R. at Vista Legal",
  },
  { src: "/images/gallery/IMG_8563.jpg", alt: "Vista Legal conference room" },
  { src: "/images/gallery/IMG_8570.jpg", alt: "Legal team discussion at Vista Legal" },
  { src: "/images/gallery/IMG_8578.jpg", alt: "Vista Legal office interior" },
  { src: "/images/gallery/IMG_8582.jpg", alt: "Advocates collaborating at Vista Legal" },
  { src: "/images/gallery/IMG_8587.jpg", alt: "Vista Legal meeting room" },
  { src: "/images/gallery/IMG_8589.jpg", alt: "Vista Legal office workspace" },
  { src: "/images/gallery/IMG_8595.jpg", alt: "Client consultation at Vista Legal" },
  { src: "/images/gallery/IMG_8600.jpg", alt: "Vista Legal team meeting" },
  { src: "/images/gallery/IMG_8616.jpg", alt: "Vista Legal office in Rajajinagar" },
  { src: "/images/gallery/IMG_8625.jpg", alt: "Advocates at Vista Legal office" },
  { src: "/images/gallery/IMG_8631.jpg", alt: "Vista Legal law office interior" },
  { src: "/images/gallery/IMG_8653.jpg", alt: "Team collaboration at Vista Legal" },
  { src: "/images/gallery/IMG_8664.jpg", alt: "Subhash R., Founding Partner at Vista Legal" },
  { src: "/images/gallery/IMG_8675.jpg", alt: "Vista Legal office hallway" },
  { src: "/images/gallery/IMG_8686.jpg", alt: "Spandana C. M, Associate at Vista Legal" },
  { src: "/images/gallery/IMG_8701.jpg", alt: "Vista Legal research and reference area" },
  { src: "/images/gallery/IMG_8715.jpg", alt: "Vista Legal team workspace" },
  { src: "/images/gallery/IMG_8729.jpg", alt: "Vista Legal office seating area" },
  {
    src: "/images/gallery/IMG_8735.jpg",
    alt: "Manoj Kumar J Y, Founding Partner at Vista Legal",
  },
  { src: "/images/gallery/IMG_8740.jpg", alt: "Document review at Vista Legal" },
  { src: "/images/gallery/IMG_8741.jpg", alt: "Vista Legal office desk space" },
  { src: "/images/gallery/IMG_8743.jpg", alt: "Advocates reviewing case files at Vista Legal" },
  { src: "/images/gallery/IMG_8750.jpg", alt: "Vista Legal office common area" },
  { src: "/images/gallery/IMG_8758.jpg", alt: "Vista Legal team gathering" },
  { src: "/images/gallery/IMG_8763.jpg", alt: "Vista Legal front desk area" },
  { src: "/images/gallery/IMG_8782.jpg", alt: "Vista Legal consultation room" },
  { src: "/images/gallery/IMG_8785.jpg", alt: "Vista Legal office photographs" },
  { src: "/images/gallery/IMG_8787.jpg", alt: "Advocates in the Vista Legal office" },
  { src: "/images/gallery/IMG_8791.jpg", alt: "Vista Legal office exterior" },
]

export default function GallerySection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  return (
    <section className="py-16 bg-muted/40">
      <div className="container px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Vista Legal Gallery
        </h2>

        <div
          className="relative mx-auto w-full max-w-[90%] sm:max-w-5xl overflow-hidden rounded-lg shadow-md bg-white"
          style={{ aspectRatio: "3 / 2", maxHeight: "min(70vh, 720px)" }}
        >
          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 1024px"
            className="object-contain transition-transform duration-700 ease-in-out"
            priority={current === 0}
          />
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 px-3 py-1 text-xl font-bold shadow hover:bg-white"
            aria-label="Previous gallery image"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 px-3 py-1 text-xl font-bold shadow hover:bg-white"
            aria-label="Next gallery image"
          >
            ›
          </button>
        </div>

        <div className="mt-4 text-muted-foreground text-sm">
          {current + 1} / {images.length}
        </div>
      </div>
    </section>
  )
}
