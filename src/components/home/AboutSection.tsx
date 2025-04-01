
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";

const AboutSection = () => {
  const values = [
    { title: "Pluridisciplinarité", description: "Optronique, informatique, infographie, gestion commerciale et développement" },
    { title: "Créativité", description: "Approche innovante des défis techniques et créatifs, design graphique personnalisé" },
    { title: "Humanité", description: "L'humain au centre de chaque solution technologique et créative" },
    { title: "Adaptabilité", description: "Capacité à apprendre et évoluer avec chaque projet, quelles que soient ses spécificités" }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/363fd92b-1b9d-4b16-b03a-96f72f450c30.png" 
                    alt="Hylst Logo" 
                    className="w-full h-auto dark:invert" 
                  />
                </div>
                <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/95d61ee5-7e97-432d-b5d3-e44473a39d6a.png" 
                    alt="Hylst Logo Créatif" 
                    className="w-full h-auto dark:invert" 
                  />
                </div>
                <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/e0a57209-0359-4d7b-a8dd-c60c69c1ea63.png" 
                    alt="Hylst Logo Tech" 
                    className="w-full h-auto" 
                  />
                </div>
                <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/cde530d4-9329-44e9-9db7-66ecf5bfd9e3.png" 
                    alt="Hylst Logo Artistique" 
                    className="w-full h-auto dark:invert" 
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg border shadow-lg">
                <p className="font-semibold">Geoffroy Streit</p>
                <p className="text-sm text-muted-foreground">alias Hylst</p>
                <p className="text-xs text-muted-foreground mt-1">Strasbourg</p>
              </div>
            </div>
          </div>
          
          <div>
            <SectionTitle 
              title="Qui suis-je" 
              subtitle="Ingénieur en reconversion IT avec expertise en optronique et infographie"
            />
            
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Passionné de sciences, technologies et design, j'ai étudié l'optique, l'électronique et l'informatique pour intégrer des projets d'ingénierie pluritechnique. Avec plus de 15 ans d'expérience professionnelle incluant des postes de gestion commerciale et technique, je me forme désormais à la Data Science, au développement Python/Web et au design graphique pour élargir mon champ de compétences.
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
