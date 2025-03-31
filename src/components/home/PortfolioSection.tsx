
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Hylst Music Haven",
      category: "Artistique & Technique",
      description: "Bibliothèque musicale de mes créations personnelles assistées par IA, avec interface moderne et lecteur multimédia évolué",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/hylst-music-haven"
    },
    {
      title: "Hylst Graphical Fantasy",
      category: "Artistique & Graphique",
      description: "Galerie de créations graphiques et musicales par IA dans le domaine de la Fantasy, avec design spécifique par catégorie",
      image: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/hylst-graphical-fantasy"
    },
    {
      title: "Retro Gaming Memories",
      category: "Ludique & Data",
      description: "Site web dédié à l'histoire des consoles et ordinateurs rétro, avec caractéristiques, jeux populaires et ressources d'émulation",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/retro-gaming-memories"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <SectionTitle 
          title="Mes Réalisations" 
          subtitle="Exemples de projets personnels dans différents domaines"
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
              Voir tous mes projets
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
