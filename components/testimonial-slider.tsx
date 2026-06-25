"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type Testimonial = {
  id: number
  name: string
  position: string
  quote: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vidya Amin",
    position: "Family Law Client",
    quote:
      "My grandmother wanted to gift a property, and Vista Legal made the entire process incredibly smooth and hassle-free. They handled everything with such care and efficiency—it meant a lot to our family. Truly grateful beyond words.",
    rating: 5,
  },
  {
    id: 2,
    name: "Shweta B.N",
    position: "Corporate and Commercial Law Client",
    quote:
      "Vista Legal made registering my property in India smooth and hassle-free while I was based in London. They handled the GPA process professionally, kept me updated, and ensured everything was completed on time. Highly recommend their services!",
    rating: 5,
  },
  {
    id: 3,
    name: "Khushi Pashine",
    position: "Civil Law Client",
    quote:
      "My uncle recently needed help preparing his will, and Vista Legal made the entire process easy and reassuring for him. They listened to him with patience, explained everything clearly, and guided him with genuine care. I'm truly grateful for the support and professionalism they showed throughout.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sahana",
    position: "Legal Documentation and Advisory",
    quote:
      "Registering my partnership firm with Vista Legal was a breeze. Their team is highly professional and well-connected, making the entire process fast and hassle-free. Highly recommend their services for anyone looking to register a firm!",
    rating: 5,
  },
  {
    id: 5,
    name: "Lolitha Reddy",
    position: "Litigation and Dispute Resolution Client",
    quote:
      "Vista Legal helped resolve a long-standing property issue that had been troubling me for years. Their professionalism, clear advice, and effective handling made all the difference. Highly recommended!",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 6000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div
      className="relative mx-auto max-w-4xl overflow-hidden rounded-lg border border-border bg-card p-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative min-h-[400px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute left-0 top-0 w-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex justify-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <blockquote className="mb-6 text-lg sm:text-xl italic text-muted-foreground text-center px-2">
              “{testimonial.quote}”
            </blockquote>
            <div className="text-center">
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-muted-foreground text-sm">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls (fixed) */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Previous testimonial">
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Next testimonial">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
