"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-gradient-to-r from-background via-background to-primary/5 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 transition-transform hover:scale-105">
          <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-white p-1 shadow-md ring-2 ring-primary/20 transition-all group-hover:ring-primary/40">
            <Image
              src="/images/main-20logo.jpg"
              alt="Mumba International Film Festival"
              width={60}
              height={60}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-xl font-bold tracking-tight text-primary">MUMBA</span>
            <span className="text-xs font-medium text-muted-foreground">Film Festival 2026</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#about"
            className="relative text-sm font-semibold text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
          >
            About
          </Link>
          <Link
            href="/#awards"
            className="relative text-sm font-semibold text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
          >
            Awards
          </Link>
          <Link
            href="/#photos"
            className="relative text-sm font-semibold text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
          >
            Photos
          </Link>
          <Link
            href="/contact"
            className="relative text-sm font-semibold text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
          >
            Contact
          </Link>
          <Link
            href="/terms"
            className="relative text-sm font-semibold text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
          >
            Terms
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden bg-gradient-to-r from-primary to-accent font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl md:inline-flex"
          >
            <Link href="https://linktr.ee/mumbafestival">Submit Your Film</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg transition-colors hover:bg-primary/10 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="animate-in slide-in-from-top border-t border-primary/10 bg-gradient-to-b from-background to-primary/5 shadow-lg md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-6 py-6">
            <Link
              href="/#about"
              className="rounded-lg px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#awards"
              className="rounded-lg px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Awards
            </Link>
            <Link
              href="/#photos"
              className="rounded-lg px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Photos
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="rounded-lg px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terms
            </Link>
            <Button asChild className="mt-4 bg-gradient-to-r from-primary to-accent font-semibold shadow-lg">
              <Link href="https://linktr.ee/mumbafestival">Submit Your Film</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
