import { Card, CardContent } from "@/components/ui/card"
import { Users, CheckCircle, Award, TrendingUp } from "lucide-react"

const advantages = [
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description: "Un conseiller dédié pour comprendre votre profil et vos ambitions académiques.",
  },
  {
    icon: CheckCircle,
    title: "Maîtrise complète de la procédure Campus France",
    description: "Expertise approfondie des étapes et exigences de Campus France pour maximiser vos chances.",
  },
  {
    icon: Award,
    title: "Conseillers expérimentés",
    description: "Notre équipe possède plusieurs années d'expérience dans l'orientation d'étudiants internationaux.",
  },
  {
    icon: TrendingUp,
    title: "Suivi jusqu'à l'obtention de l'admission",
    description: "Nous restons à vos côtés jusqu'à la réussite de votre projet d'études en France.",
  },
]

export function WhyChooseYazoum() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pourquoi choisir Yazoum ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous mettons notre expertise au service de votre réussite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                  <advantage.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
