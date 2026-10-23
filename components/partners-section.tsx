"use client"

export function PartnersSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Official Partners
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-gray-600">
            Supported by prestigious institutions committed to nurturing independent and emerging voices in cinema
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-lg">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/official%20partners-xr8tQwrWzexRwCkQTYqIF0c1VvSSZH.jpeg"
            alt="Official partners of the Mumba International Film Festival"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
