import { CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Analyse du profil étudiant",
    description:
      "Évaluation détaillée de votre parcours académique, vos objectifs et vos aspirations professionnelles.",
  },
  {
    number: "02",
    title: "Orientation et choix des formations",
    description: "Recommandations personnalisées d'établissements et de programmes adaptés à votre profil.",
  },
  {
    number: "03",
    title: "Montage du dossier Campus France",
    description: "Préparation méticuleuse de tous les documents nécessaires conformément aux exigences.",
  },
  {
    number: "04",
    title: "Préparation entretien",
    description: "Sessions de coaching pour vous préparer efficacement à l'entretien Campus France.",
  },
  {
    number: "05",
    title: "Suivi jusqu'à l'admission",
    description: "Accompagnement continu et support jusqu'à la confirmation de votre admission.",
  },
]

export function ProcessSection() {
  return (
    <section id="processus" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comment ça fonctionne ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Un processus clair et structuré en 5 étapes</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
              {/* Vertical Line */}
              {index !== steps.length - 1 && <div className="absolute left-8 top-16 w-0.5 h-full bg-border" />}

              {/* Number Circle */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {step.number}
                </div>
                <div className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
