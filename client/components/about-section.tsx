import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Notre mission",
    description: "Faciliter l'accès aux études supérieures en France pour les étudiants africains et internationaux.",
  },
  {
    icon: Eye,
    title: "Notre vision",
    description: "Devenir la référence en accompagnement Campus France grâce à notre expertise et notre engagement.",
  },
  {
    icon: Heart,
    title: "Notre engagement",
    description:
      "Placer la réussite de chaque étudiant au cœur de nos préoccupations avec un service humain et personnalisé.",
  },
  {
    icon: Shield,
    title: "Nos valeurs",
    description: "Transparence, professionnalisme, et excellence dans chaque interaction avec nos étudiants.",
  },
]

export function AboutSection() {
  return (
    <section id="a-propos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">À propos de Yazoum</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Yazoum est une agence spécialisée dans l&apos;accompagnement des étudiants dans leur projet d&apos;études en France.
            Nous mettons notre expertise au service de votre réussite avec sérieux et professionnalisme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
          {values.map((value, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-full bg-accent/10">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
