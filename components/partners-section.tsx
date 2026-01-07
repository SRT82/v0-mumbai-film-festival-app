"use client"

import { Building2 } from "lucide-react"

export function PartnersSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent mb-3">
            Official Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Supported by prestigious institutions committed to nurturing independent and emerging voices in cinema
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Partner 1 */}
          <div className="group">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-primary">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    Film and Television
                    <br />
                    Institute of India
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                A premier institution dedicated to excellence in film and television education, fostering creative
                innovation and artistic expression.
              </p>
            </div>
          </div>

          {/* Partner 2 */}
          <div className="group">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-primary">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-secondary to-primary rounded-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    National Film Archive
                    <br />
                    of India (NFAI)
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                India's premier film preservation institution, committed to archiving and celebrating the rich heritage
                of Indian cinema.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold text-primary">Institutional Support:</span> The collaboration with these
            esteemed organizations reflects our commitment to supporting independent and emerging voices in cinema
            through world-class infrastructure, mentorship, and global exposure.
          </p>
        </div>
      </div>
    </section>
  )
}
