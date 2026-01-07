"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Image from "next/image"
export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="accueil" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-secondary/5 to-background -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium text-accent">Experts certifiés Campus France</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Votre projet d&apos;études en France commence ici
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed max-w-3xl mx-auto">
            Yazoum vous accompagne à chaque étape de la procédure Campus France, de l&apos;orientation jusqu&apos;au dépôt du
            dossier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto shadow-lg shadow-accent/25"
              onClick={scrollToContact}
            >
              Être accompagné maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto bg-transparent"
              onClick={scrollToContact}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Parler à un conseiller
            </Button>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <Image
            src="/banner.jpg"
            alt="Étudiants internationaux"
            className="w-full rounded-lg shadow-2xl"
            width={1200}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}
