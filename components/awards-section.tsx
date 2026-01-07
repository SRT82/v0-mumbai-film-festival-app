import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Film, Star } from "lucide-react"

export function AwardsSection() {
  return (
    <section id="awards" className="py-16 lg:py-24 bg-gradient-to-b from-white via-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance lg:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Awards & Cash Prizes
          </h2>
          <p className="text-xl text-muted-foreground">MUMBA (MUIFF2026) International Film Festival - 7th Season</p>
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-center text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center justify-center gap-2">
            <Film className="h-6 w-6" />
            Feature Film Category (60 to 140 minutes)
          </h3>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-white hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Trophy className="h-7 w-7 text-yellow-500" />
                  <CardTitle className="text-lg">1st Best Feature Film</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {/* Updated first cash prize to ₹1,00,000 */}
                <p className="text-3xl font-bold text-primary">₹1,00,000</p>
                <p className="text-sm text-muted-foreground">1,111.70 USD</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-white hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Trophy className="h-7 w-7 text-gray-400" />
                  <CardTitle className="text-lg">2nd Best Feature Film</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">₹51,000</p>
                <p className="text-sm text-muted-foreground">568.82 USD</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-white hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Trophy className="h-7 w-7 text-amber-600" />
                  <CardTitle className="text-lg">3rd Best Feature Film</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">₹11,000</p>
                <p className="text-sm text-muted-foreground">122.48 USD</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-center text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent flex items-center justify-center gap-2">
            <Film className="h-6 w-6" />
            Short Film Category (1 to 60 minutes)
          </h3>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="border-secondary/30 bg-gradient-to-br from-secondary/10 to-white hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Trophy className="h-7 w-7 text-yellow-500" />
                  <CardTitle className="text-lg">1st Best Film</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-secondary">₹21,000</p>
                <p className="text-sm text-muted-foreground">233.82 USD</p>
              </CardContent>
            </Card>

            <Card className="border-secondary/30 bg-gradient-to-br from-secondary/10 to-white hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Trophy className="h-7 w-7 text-gray-400" />
                  <CardTitle className="text-lg">2nd Best Film</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-secondary">₹11,000</p>
                <p className="text-sm text-muted-foreground">122.48 USD</p>
              </CardContent>
            </Card>

            <Card className="border-secondary/30 bg-gradient-to-br from-secondary/10 to-white hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Trophy className="h-7 w-7 text-amber-600" />
                  <CardTitle className="text-lg">3rd Best Film</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-secondary">₹5,000</p>
                <p className="text-sm text-muted-foreground">55.67 USD</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-center text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent flex items-center justify-center gap-2">
            <Star className="h-6 w-6" />
            Special 90 Second Film Category
          </h3>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="border-accent/30 bg-gradient-to-br from-accent/10 to-white hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Trophy className="h-7 w-7 text-yellow-500" />
                  <CardTitle className="text-lg">1st Best Film</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">₹10,000</p>
                <p className="text-sm text-muted-foreground">111.34 USD</p>
              </CardContent>
            </Card>

            <Card className="border-accent/30 bg-gradient-to-br from-accent/10 to-white hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Trophy className="h-7 w-7 text-gray-400" />
                  <CardTitle className="text-lg">2nd Best Film</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">₹5,000</p>
                <p className="text-sm text-muted-foreground">55.67 USD</p>
              </CardContent>
            </Card>

            <Card className="border-accent/30 bg-gradient-to-br from-accent/10 to-white hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Trophy className="h-7 w-7 text-amber-600" />
                  <CardTitle className="text-lg">3rd Best Film</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">₹3,000</p>
                <p className="text-sm text-muted-foreground">33.40 USD</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-center text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Special Category Awards
          </h3>
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <Card className="border-primary/30 bg-gradient-to-br from-white to-primary/5 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle>Best Animation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">₹5,000</p>
                <p className="text-sm text-muted-foreground">55.67 USD</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-gradient-to-br from-white to-primary/5 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle>Best Documentary</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">₹5,000</p>
                <p className="text-sm text-muted-foreground">55.67 USD</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-center text-2xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent flex items-center justify-center gap-2">
            <Award className="h-6 w-6" />
            Special Jury Awards
          </h3>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Best Marathi Short Film",
              "Best South Indian Short Film",
              "Best Cinematographer",
              "Best Film Music",
              "Best Director",
              "Best Acting (Female)",
              "Best Acting (Male)",
              "Best Child Artist (Boy)",
              "Best Child Artist (Girl)",
              "Best Screenplay",
              "Best Short Film Editing",
            ].map((award) => (
              <Card
                key={award}
                className="text-center bg-gradient-to-br from-white to-accent/10 hover:shadow-lg transition-all"
              >
                <CardContent className="pt-6">
                  <p className="font-medium">{award}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
