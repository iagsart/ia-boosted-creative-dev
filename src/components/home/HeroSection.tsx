
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { StatCard } from "@/components/ui/stat-card";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background via-secondary/50 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="animate-fade-up [animation-delay:200ms]">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full text-sm font-medium">
              L'humain augmenté par l'IA - Strasbourg
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Geoffroy Streit<br /><span className="text-gradient">Consultant Créatif & IA</span>
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground animate-fade-up [animation-delay:400ms]">
            Je combine mes qualités humaines d'analyse, d'écoute et de créativité avec la puissance de l'IA pour transformer vos idées en solutions adaptées.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up [animation-delay:600ms]">
            <Button size="lg" asChild className="group">
              <Link to="/contact" className="flex items-center gap-2">
                Discuter de votre projet
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Découvrir mes services</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-up [animation-delay:800ms]">
          <StatCard value="100%" label="d'approche personnalisée" />
          <StatCard value="IA+" label="amplification humaine" />
          <StatCard value="15+" label="projets personnels réalisés" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
