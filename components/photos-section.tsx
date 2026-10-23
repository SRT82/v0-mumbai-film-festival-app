"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

const photos = [
  {
    src: "/images/festival-slide-1.jpeg",
    alt: "Festival guests and filmmakers gathered at the official festival backdrop",
    category: "Festival Moments",
  },
  {
    src: "/images/festival-slide-2.jpeg",
    alt: "Festival guests, venue, passes, and red carpet moments",
    category: "Festival Highlights",
  },
  {
    src: "/images/festival-slide-3.jpeg",
    alt: "Filmmakers and guests speaking at festival discussions",
    category: "Conversations",
  },
  {
    src: "/images/festival-slide-4.jpeg",
    alt: "Artists and panelists during festival sessions",
    category: "Panels",
  },
  {
    src: "/images/festival-slide-5.jpeg",
    alt: "Festival awards, stage presentations, and guest interactions",
    category: "Awards",
  },
  {
    src: "/images/festival-slide-6.jpeg",
    alt: "Award ceremonies and audience moments inside the festival auditorium",
    category: "Celebrations",
  },
  {
    src: "/images/festival-slide-7.jpeg",
    alt: "Festival organizers, filmmakers, and audience members gathered in the auditorium",
    category: "Festival Community",
  },
  {
    src: "/images/festival-slide-8.jpeg",
    alt: "Festival attendees, volunteers, and audience moments across the venue",
    category: "Audience Moments",
  },
  {
    src: "/images/festival-slide-9.jpeg",
    alt: "Guests and speakers sharing moments at festival screenings and events",
    category: "Guest Moments",
  },
  {
    src: "/images/festival-slide-10.jpeg",
    alt: "Festival red carpet arrivals, portraits, and venue highlights",
    category: "Red Carpet",
  },
  {
    src: "/images/festival-slide-11.jpeg",
    alt: "Festival guests, award recipients, and filmmaker conversations",
    category: "Celebrations",
  },
  {
    src: "/images/homepage-20background.jpeg",
    alt: "Festival auditorium packed with audience",
    category: "Venue",
  },
  {
    src: "/images/1.jpeg",
    alt: "Audience at National Film Archive of India",
    category: "Venue",
  },
  {
    src: "/images/5.jpeg",
    alt: "Speaker addressing the audience",
    category: "Events",
  },
  {
    src: "/images/6.jpeg",
    alt: "Festival attendees during screening",
    category: "Audience",
  },
  {
    src: "/images/2.jpeg",
    alt: "Festival jury and organizers on stage",
    category: "Team",
  },
  {
    src: "/images/7.jpeg",
    alt: "Festival participants group photo",
    category: "Awards",
  },
  {
    src: "/images/3.jpeg",
    alt: "Award winners on stage",
    category: "Awards",
  },
  {
    src: "/images/8.jpeg",
    alt: "Complete festival team photo",
    category: "Team",
  },
  {
    src: "/images/4.jpeg",
    alt: "Winners receiving certificates",
    category: "Awards",
  },
]

export function PhotosSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  return (
    <section id="photos" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance lg:text-4xl">Festival Gallery</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Moments from our previous editions at the National Film Archive of India, Pune
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-muted"
              onClick={() => setSelectedPhoto(photo.src)}
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-medium text-white">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl p-0">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedPhoto && (
            <img src={selectedPhoto || "/placeholder.svg"} alt="Festival photo" className="h-auto w-full" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
