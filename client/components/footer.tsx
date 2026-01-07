"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Yazoum</h3>
            <p className="text-background/80 leading-relaxed max-w-md">
              Votre partenaire de confiance pour réussir votre projet d&apos;études en France. Accompagnement personnalisé et
              professionnel à chaque étape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("accueil")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Nos services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("processus")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Processus
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("a-propos")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  À propos
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/80 text-sm">© {new Date().getFullYear()} Yazoum. Tous droits réservés.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/80 hover:text-background transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-background/80 hover:text-background transition-colors">
              Conditions d&apos;utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
