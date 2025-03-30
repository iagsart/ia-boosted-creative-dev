
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";

const AboutSection = () => {
  const values = [
    { title: "Innovation", description: "Toujours à la pointe des dernières technologies" },
    { title: "Expertise", description: "Spécialiste dans plusieurs domaines techniques" },
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
                  src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Portrait du développeur" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg border shadow-lg">
                <p className="font-semibold">Human-Centric AI</p>
                <p className="text-sm text-muted-foreground">Ma philosophie</p>
              </div>
            </div>
          </div>
          
          <div>
            <SectionTitle 
              title="Qui suis-je" 
              subtitle="Un développeur passionné par l'innovation technologique"
            />
            
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Je suis un développeur web indépendant spécialisé dans la création de solutions digitales innovantes. Mon approche "Human-Centric AI" garantit que la technologie reste au service de l'humain, pas l'inverse.
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
                  En savoir plus sur mon parcours
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
