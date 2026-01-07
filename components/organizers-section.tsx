import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OrganizersSection() {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-balance lg:text-4xl">Festival Organizers</h2>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Organized by</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium">Film Festival Company</p>
              <p className="font-medium">Mumba Film Foundation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Founder and Organizer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Jay R. Bhosale</p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>In Association with</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">(MIT-WPU) Dadasaheb Phalke International Film School</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
