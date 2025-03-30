
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";

const AboutSection = () => {
  const values = [
    { title: "Pluridisciplinarité", description: "Optronique, informatique, gestion commerciale et développement" },
    { title: "Créativité", description: "Approche innovante des défis techniques et créatifs" },
    { title: "Humanité", description: "L'humain au centre de chaque solution technologique" },
    { title: "Adaptabilité", description: "Capacité à apprendre et évoluer avec chaque projet" }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/2e3e631c-fa44-4ba0-bd05-1427dc962a15.png" 
                  alt="Portrait de Geoffroy Streit" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg border shadow-lg">
                <p className="font-semibold">Geoffroy Streit</p>
                <p className="text-sm text-muted-foreground">alias Hylst</p>
              </div>
            </div>
          </div>
          
          <div>
            <SectionTitle 
              title="Qui suis-je" 
              subtitle="Ingénieur en reconversion IT avec expertise en optronique"
            />
            
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Passionné de sciences et technologies, j'ai étudié l'optique, l'électronique et l'informatique pour intégrer des projets d'ingénierie pluritechnique. Avec plus de 15 ans d'expérience professionnelle incluant des postes de gestion commerciale et technique, je me forme désormais à la Data Science et au développement Python/Web pour élargir mon champ de compétences.
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
