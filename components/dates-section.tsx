import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DatesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-balance lg:text-4xl">Event Information</h2>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle>Important Dates</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium">Submissions Opening</p>
                <p className="text-muted-foreground">1 January 2026</p>
              </div>
              <div>
                <p className="font-medium">Submissions Last Date</p>
                <p className="text-muted-foreground">31 March 2026</p>
              </div>
              <div>
                <p className="font-medium">Extended Deadline</p>
                <p className="text-muted-foreground">31 May 2026</p>
              </div>
              <div>
                <p className="font-medium">Notification Date</p>
                <p className="text-muted-foreground">30 June 2026</p>
              </div>
              <div>
                <p className="font-medium">Festival Event Date</p>
                <p className="text-muted-foreground">25 - 30 July 2026</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <CardTitle>Venue</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium">National Film Archive of India</p>
                <p className="text-muted-foreground">Law College Road</p>
                <p className="text-muted-foreground">Pune, Maharashtra 411004</p>
                <p className="text-muted-foreground">India</p>
              </div>
              <div className="space-y-2 border-t pt-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href="mailto:mumbafilmfestival@gmail.com" className="text-sm hover:text-primary">
                    mumbafilmfestival@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href="tel:+919665544453" className="text-sm hover:text-primary">
                    +91 9665544453
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href="tel:+919260000665" className="text-sm hover:text-primary">
                    +91 9260000665
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Submission Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                <p className="text-sm font-medium">• Short Films (1-60 min)</p>
                <p className="text-sm font-medium">• Feature Films (60-140 min)</p>
                <p className="text-sm font-medium">• Documentary (1-60 min)</p>
                <p className="text-sm font-medium">• Animation (1-60 min)</p>
                <p className="text-sm font-medium">• 90 Second Films</p>
                <p className="text-sm">All languages accepted</p>
                <p className="text-sm">Open theme</p>
                <p className="text-sm">HD/FHD/4K Quality</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="https://linktr.ee/mumbafestival">Submit Your Film Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
