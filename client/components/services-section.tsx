import { Card, CardContent } from "@/components/ui/card"
import { Compass, FileText, MessageSquare, Send, Plane } from "lucide-react"

const services = [
  {
    icon: Compass,
    title: "Orientation académique",
    description:
      "Analyse de votre profil et conseil personnalisé sur le choix des formations et établissements adaptés à vos objectifs.",
  },
  {
    icon: FileText,
    title: "Constitution du dossier Campus France",
    description:
      "Préparation complète de votre dossier avec tous les documents requis pour maximiser vos chances d'acceptation.",
  },
  {
    icon: MessageSquare,
    title: "Préparation des entretiens",
    description:
      "Entraînement et coaching pour réussir vos entretiens Campus France avec confiance et professionnalisme.",
  },
  {
    icon: Send,
    title: "Aide à la candidature et suivi",
    description:
      "Accompagnement dans vos démarches de candidature et suivi régulier jusqu'à l'obtention de votre admission.",
  },
  {
    icon: Plane,
    title: "Conseils visa et installation",
    description:
      "Orientation sur les démarches visa et conseils pratiques pour faciliter votre installation en France.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement complet pour chaque étape de votre projet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary/10 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="h-7 w-7 text-secondary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
