
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Avatar } from "@/components/ui/avatar";

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
            <div className="relative flex justify-center">
              <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden p-1 bg-accent/10 shadow-lg">
                <img 
                  src="/public/lovable-uploads/d019b205-4b3a-47e7-a7c2-ab36adcff0ee.png" 
                  alt="Geoffroy Streit portrait" 
                  className="w-full h-full object-cover rounded-lg"
                />
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
