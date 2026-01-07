import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Amina K.",
    country: "Sénégal",
    rating: 5,
    feedback:
      "Grâce à Yazoum, j'ai été admise dans l'université de mes rêves. L'accompagnement était professionnel et rassurant du début à la fin.",
  },
  {
    name: "Ibrahim M.",
    country: "Côte d'Ivoire",
    rating: 5,
    feedback:
      "L'équipe de Yazoum m'a aidé à préparer mon dossier et mon entretien Campus France. Leur expertise a fait toute la différence.",
  },
  {
    name: "Fatou D.",
    country: "Cameroun",
    rating: 5,
    feedback:
      "Un service exceptionnel ! Ils m'ont guidée à chaque étape avec patience et professionnalisme. Je recommande vivement.",
  },
  {
    name: "Moussa T.",
    country: "Mali",
    rating: 5,
    feedback:
      "Je ne savais pas par où commencer. Yazoum a simplifié tout le processus et m'a permis d'obtenir mon admission sans stress.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Témoignages de nos étudiants</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez l&apos;expérience de ceux qui nous ont fait confiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">&quot;{testimonial.feedback}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
