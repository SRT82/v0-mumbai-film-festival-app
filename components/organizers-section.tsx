import Image from "next/image"

const organizerProfiles = [
  {
    src: "/images/organizers-leadership.jpg",
    alt: "Founder and festival director profiles for the Mumba Film Festival",
  },
  {
    src: "/images/organizers-committee.jpg",
    alt: "Honourable core committee and jury members of the Mumba Film Festival",
  },
]

export function OrganizersSection() {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-balance lg:mb-12 lg:text-4xl">Festival Organizers</h2>

        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          {organizerProfiles.map((profile) => (
            <div key={profile.src} className="overflow-hidden rounded-xl border bg-background shadow-sm">
              <Image
                src={profile.src}
                alt={profile.alt}
                width={2048}
                height={1366}
                className="h-auto w-full"
                sizes="(max-width: 1280px) 100vw, 1152px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
