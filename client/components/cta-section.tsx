"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-linear-to-br from-primary to-secondary rounded-2xl p-12 md:p-16 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Ne laissez pas votre avenir au hasard
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Donnez-vous toutes les chances de réussir votre projet d&apos;études en France avec un accompagnement
            professionnel et personnalisé.
          </p>
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 shadow-lg"
            onClick={scrollToContact}
          >
            Démarrer mon accompagnement
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
