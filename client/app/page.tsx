import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseYazoum } from "@/components/why-choose-yazoum"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseYazoum />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <AboutSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
