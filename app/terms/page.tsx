import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, AlertCircle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 lg:py-24 bg-gradient-to-b from-white via-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-8 text-4xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
            <p className="mb-12 text-center text-xl text-muted-foreground">MUMBA International Film Festival 2026</p>

            <div className="space-y-6">
              <Card className="border-primary/30 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Film Specifications</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Documentary, Art/Drama, or Animation: 1 to 30 minutes and 30 to 60 minutes</li>
                        <li>• Feature Film: 60 to 140 minutes</li>
                        <li>• Quality: HD, FHD, or 4K</li>
                        <li>• File Size: Maximum 1 to 10 GB</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Submission Guidelines</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Open to filmmakers worldwide</li>
                        <li>• Upload to Google Drive or Video Upload platform (must be public and downloadable)</li>
                        <li>• Once submitted, films cannot be changed</li>
                        <li>• Separate form and fee required for each film submission</li>
                        <li>• All languages are acceptable</li>
                        <li>• Theme is open - films on all subjects accepted</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Subtitles Requirements</h3>
                      <p className="text-muted-foreground">
                        Subtitles are not required for Marathi or Hindi language films. For Tamil, Telugu, Malayalam,
                        Kannada, English, or other languages, subtitles are mandatory.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Censor Certificate</h3>
                      <p className="text-muted-foreground">
                        If your film is officially selected, a valid censor certificate (CBFC Certificate) is mandatory
                        for Feature Films. Films without a censor certificate will not be screened.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Important Policies</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          • Submission fees are non-refundable for any reason, whether your film is accepted or not
                        </li>
                        <li>• Films not following festival rules and conditions will be disqualified without refund</li>
                        <li>• All applicants will be notified two weeks before the festival date</li>
                        <li>
                          • Any errors in video during screening are the sole responsibility of the submitter - please
                          check before submitting
                        </li>
                        <li>• Private or email-submitted Google Drive links will not be accepted</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Award Winners</h3>
                      <p className="text-muted-foreground">
                        Makers of award-winning films must be present at the festival. If winners are not present when
                        awards are announced, the prize will not be sent online.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Travel & Accommodation</h3>
                      <p className="text-muted-foreground">
                        Filmmakers coming from outside the city or state must bear their own travel and accommodation
                        expenses. These will not be provided by the festival.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Selection & Invitation Process</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          • Festival organizers review submissions based on artistic merit, thematic relevance,
                          technical quality, and programming goals
                        </li>
                        <li>• Selection may involve multiple rounds of screenings and evaluations</li>
                        <li>
                          • Formal invitations include screening schedule, venue, events, and specific requirements
                        </li>
                        <li>• Selected filmmakers must confirm acceptance within the specified timeframe</li>
                        <li>
                          • Promotional materials (stills, trailers, posters, filmmaker bios) will be requested for
                          marketing
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-gradient-to-br from-white to-primary/5">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Festival Entry</h3>
                      <p className="text-muted-foreground">
                        Free to view: Free entry for everyone to attend the festival screenings.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
