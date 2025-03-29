
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";

const AboutSection = () => {
  const values = [
    { title: "Innovation", description: "Toujours à la pointe des dernières technologies" },
    { title: "Expertise", description: "Des spécialistes dans chaque domaine technique" },
    { title: "Qualité", description: "Des solutions robustes et performantes" },
    { title: "Adaptabilité", description: "Des solutions sur mesure pour chaque client" }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Notre équipe au travail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg border shadow-lg">
                <p className="font-semibold">Human-Centric AI</p>
                <p className="text-sm text-muted-foreground">Notre philosophie</p>
              </div>
            </div>
          </div>
          
          <div>
            <SectionTitle 
              title="Qui sommes-nous" 
              subtitle="Une équipe d'experts passionnés par l'innovation technologique"
            />
            
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Nous sommes une agence digitale nouvelle génération qui associe l'expertise technique traditionnelle à la puissance de l'intelligence artificielle. Notre approche "Human-Centric AI" garantit que la technologie reste au service de l'humain, pas l'inverse.
              </p>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-accent mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild className="mt-4">
                <Link to="/about" className="inline-flex items-center gap-2">
                  En savoir plus sur notre équipe
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
