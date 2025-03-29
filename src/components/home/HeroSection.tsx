
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
              Expertise technique & créative
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transformez vos idées en <span className="text-gradient">solutions digitales</span> intelligentes
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground animate-fade-up [animation-delay:400ms]">
            Combinaison d'expertise technique et créative boostée par l'IA pour des résultats qui dépassent vos attentes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up [animation-delay:600ms]">
            <Button size="lg" asChild>
              <Link to="/contact">Obtenir un audit gratuit</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-6 text-center animate-fade-up [animation-delay:800ms]">
          <div className="bg-background rounded-lg shadow-sm border p-6 w-full sm:w-[calc(33.33%-1rem)]">
            <h3 className="text-xl font-semibold mb-1">+150%</h3>
            <p className="text-sm text-muted-foreground">de performance sur les projets IA</p>
          </div>
          <div className="bg-background rounded-lg shadow-sm border p-6 w-full sm:w-[calc(33.33%-1rem)]">
            <h3 className="text-xl font-semibold mb-1">99%</h3>
            <p className="text-sm text-muted-foreground">de satisfaction client</p>
          </div>
          <div className="bg-background rounded-lg shadow-sm border p-6 w-full sm:w-[calc(33.33%-1rem)]">
            <h3 className="text-xl font-semibold mb-1">50+</h3>
            <p className="text-sm text-muted-foreground">projets livrés</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
