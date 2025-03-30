
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Neuro Diversity Info",
      category: "Éducatif",
      description: "Plateforme d'information sur la neurodiversité, les troubles dys, TDAH, autisme et maladies neurodégénératives",
      image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/neuro-diversity"
    },
    {
      title: "IA Avenir",
      category: "Intelligence Artificielle",
      description: "Site éducatif sur l'histoire, les concepts et l'utilisation des IA avec illustrations et exercices interactifs",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/ia-avenir"
    },
    {
      title: "Assistant Coach Sportif",
      category: "Application",
      description: "Application de gestion pour coachs sportifs (clients, activités, planning, facturation, chronos spécialisés)",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/coach-sportif"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <SectionTitle 
          title="Mes Réalisations" 
          subtitle="Quelques exemples de projets personnels et professionnels"
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
