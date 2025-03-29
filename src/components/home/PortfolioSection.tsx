
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PortfolioSection = () => {
  const projects = [
    {
      title: "IA Prédictive pour Retail",
      category: "Intelligence Artificielle",
      description: "Système de prévision des ventes basé sur l'apprentissage automatique",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/retail-ai"
    },
    {
      title: "Plateforme E-commerce",
      category: "Développement Web",
      description: "Site de vente en ligne avec recommandations personnalisées",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/ecommerce"
    },
    {
      title: "Chatbot Service Client",
      category: "Intelligence Artificielle",
      description: "Assistant virtuel intelligent pour le support client 24/7",
      image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/chatbot"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <SectionTitle 
          title="Nos Réalisations" 
          subtitle="Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} to={project.link} className="group block">
              <div className="relative overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent/90 hover:bg-accent/80">{project.category}</Badge>
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/portfolio" className="inline-flex items-center gap-2">
              Voir tous nos projets
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
