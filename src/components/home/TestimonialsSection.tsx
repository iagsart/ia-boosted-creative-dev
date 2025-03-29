
import { SectionTitle } from "@/components/ui/section-title";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      position: "Directrice Marketing, FashionTech",
      quote: "L'équipe d'AgenceDev a transformé notre approche marketing grâce à leur solution IA. Nous avons vu nos conversions augmenter de 45% en seulement 3 mois !",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Thomas Martin",
      position: "CEO, InnoStart",
      quote: "Le développement de notre application mobile a été réalisé dans les temps et avec un niveau de qualité exceptionnel. Un partenaire de confiance pour tous nos projets digitaux.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sophie Laurent",
      position: "Fondatrice, EcoSolutions",
      quote: "La refonte de notre site web et l'implémentation d'une IA conversationnelle ont révolutionné notre relation client. Un grand merci à toute l'équipe !",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container">
        <SectionTitle 
          title="Ce que nos clients disent" 
          subtitle="Découvrez pourquoi nos clients nous font confiance"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border relative">
              <div className="absolute -top-5 left-6">
                <div className="h-10 w-10 rounded-full overflow-hidden border-4 border-background">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-6">
                <blockquote className="text-muted-foreground italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
