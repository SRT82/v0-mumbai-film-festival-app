"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    title: "Mumba International Film Festival 2026",
    subtitle: "Celebrating global cinema and emerging filmmakers - 7th Season",
    image: "/images/festival-slide-1.jpeg",
    link: "https://linktr.ee/mumbafestival",
  },
  {
    title: "A Festival of Shared Stories",
    subtitle: "Filmmakers, artists, and audiences come together in Pune",
    image: "/images/festival-slide-4.jpeg",
    link: "https://linktr.ee/mumbafestival",
  },
  {
    title: "Moments from the Festival",
    subtitle: "Celebrating cinema, conversations, and unforgettable performances",
    image: "/images/festival-slide-5.jpeg",
    link: "https://linktr.ee/mumbafestival",
  },
  {
    title: "National Film Archive of India, Pune",
    subtitle: "Venue of the Grand Festival - 06th to 10th October 2026",
    image: "/images/festival-slide-2.jpeg",
    link: "https://linktr.ee/mumbafestival",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gradient-to-br from-primary/5 to-white lg:h-[700px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white lg:p-16">
            <h2 className="mb-2 text-4xl font-bold text-balance lg:text-6xl drop-shadow-lg">{slide.title}</h2>
            {slide.subtitle && <p className="mb-4 text-xl lg:text-2xl drop-shadow-md">{slide.subtitle}</p>}
            <Button
              asChild
              size="lg"
              className="mt-4 bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary transition-all shadow-lg"
            >
              <Link href={slide.link}>Submit Now</Link>
            </Button>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
