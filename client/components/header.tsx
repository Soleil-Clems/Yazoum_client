"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo avec point rouge subtil */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Yazoum</span>
          <span className="w-2 h-2 rounded-full bg-accent"></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("accueil")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Nos services
          </button>
          <button
            onClick={() => scrollToSection("processus")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Processus
          </button>
          <button
            onClick={() => scrollToSection("temoignages")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Témoignages
          </button>
          <button
            onClick={() => scrollToSection("a-propos")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            À propos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="hidden md:block">
          {/* Bouton CTA avec accent rouge */}
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Commencer mon projet
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Nos services
            </button>
            <button
              onClick={() => scrollToSection("processus")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Processus
            </button>
            <button
              onClick={() => scrollToSection("temoignages")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection("a-propos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
            >
              Commencer mon projet
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
