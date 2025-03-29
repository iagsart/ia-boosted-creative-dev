
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";

const AboutSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
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
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background p-4 rounded-md border">
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Toujours à la pointe des dernières technologies</p>
                </div>
                <div className="bg-background p-4 rounded-md border">
                  <h4 className="font-semibold">Expertise</h4>
                  <p className="text-sm text-muted-foreground">Des spécialistes dans chaque domaine technique</p>
                </div>
                <div className="bg-background p-4 rounded-md border">
                  <h4 className="font-semibold">Qualité</h4>
                  <p className="text-sm text-muted-foreground">Des solutions robustes et performantes</p>
                </div>
                <div className="bg-background p-4 rounded-md border">
                  <h4 className="font-semibold">Adaptabilité</h4>
                  <p className="text-sm text-muted-foreground">Des solutions sur mesure pour chaque client</p>
                </div>
              </div>
              
              <Button asChild>
                <Link to="/about" className="inline-flex items-center gap-2">
                  En savoir plus sur notre équipe
                  <ArrowRight size={16} />
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
