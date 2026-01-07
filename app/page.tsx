import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { AboutSection } from "@/components/about-section"
import { AwardsSection } from "@/components/awards-section"
import { OrganizersSection } from "@/components/organizers-section"
import { DatesSection } from "@/components/dates-section"
import { PhotosSection } from "@/components/photos-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <AwardsSection />
        <OrganizersSection />
        <DatesSection />
        <PhotosSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
