import { Film, Users, Award, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            About Mumba International Film Festival
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="text-center group">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
              <Film className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Cinematic Excellence</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Showcasing bold and diverse storytelling from around the world
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Emerging Talent</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discovering and nurturing independent filmmakers and new voices
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Recognition</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Honoring outstanding filmmaking with prestigious awards and cash prizes
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Global Collaboration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fostering international cinematic partnerships and cultural exchange
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-balance">
            MUMBA International Film Festival is a prestigious celebration of cinema that aims to bring meaningful,
            bold, and diverse storytelling from across the world to Indian audiences. Rooted in the cultural fabric of
            India and inspired by the vibrant spirit of emerging filmmakers, the festival serves as a platform for short
            films, documentaries, and feature films that challenge narratives, provoke thought, and inspire change.
          </p>

          <p className="text-balance">
            Held annually at the iconic{" "}
            <span className="font-semibold text-foreground">National Film Archive of India</span> in Pune, MUMBA
            International Film Festival is committed to discovering new talent, nurturing independent storytelling, and
            fostering global cinematic collaborations. The festival features competitive sections, masterclasses, panel
            discussions, special screenings, and curated experiences that connect creators and audiences meaningfully.
          </p>

          <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <p className="text-center text-lg font-medium text-foreground">
              Whether you are a filmmaker, a film lover, a student of cinema, or a curious soul—MUMBA International Film
              Festival invites you to be part of a cinematic movement that transcends borders and celebrates
              storytelling in its purest form.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm font-semibold text-muted-foreground mb-2">Organized by</p>
            <p className="text-base font-bold text-foreground">Film Festival Company & Mumba Film Foundation</p>
            <p className="text-sm text-muted-foreground mt-1">
              Founder and Organizer: <span className="font-semibold text-foreground">Jay R. Bhosale</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">In Association with</p>
            <p className="text-sm font-medium text-foreground">(MIT-WPU) Dadasaheb Phalke International Film School</p>
          </div>
        </div>
      </div>
    </section>
  )
}
