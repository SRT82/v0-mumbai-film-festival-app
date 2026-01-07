import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-br from-primary to-secondary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Mumba International Film Festival</h3>
            <p className="text-sm font-medium text-white">Years Running: 7</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:mumbafilmfestival@gmail.com" className="text-sm hover:underline text-white">
                  mumbafilmfestival@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <div className="space-y-1">
                  <a href="tel:+919665544453" className="block text-sm hover:underline text-white">
                    +91 9665544453
                  </a>
                  <a href="tel:+919260000665" className="block text-sm hover:underline text-white">
                    +91 9260000665
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Venue</h3>
            <p className="text-sm leading-relaxed text-white">
              National Film Archive of India
              <br />
              Law College Road
              <br />
              Pune, Maharashtra 411004
              <br />
              India
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Partners</h3>
            <p className="mb-4 text-sm leading-relaxed text-white">
              The official partners of the Mumba International Film Festivals: The{" "}
              <span className="font-semibold">Film and Television Institute of India</span>, and the{" "}
              <span className="font-semibold">National Film Archive of India (NFAI)</span> reflecting a strong
              institutional support for independent and emerging voices in cinema.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold text-white drop-shadow-md">MUMBA</span>
          </div>
          <p className="text-sm text-white">Copyright © 2026 by Mumba Film Foundation. All Rights Reserved.</p>
          <p className="mt-2 text-xs text-white/80">
            Organized by Film Festival Company & Mumba Film Foundation | Founder: Jay R. Bhosale
          </p>
        </div>
      </div>
    </footer>
  )
}
