
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-accent text-accent-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Prêt à transformer votre activité avec des solutions digitales intelligentes ?
          </h2>
          <p className="text-accent-foreground/80 text-lg">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" variant="outline" className="bg-white text-accent hover:bg-white/90" asChild>
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-accent-foreground/10" asChild>
              <Link to="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
