
import { Code, Brain, Palette, Lightbulb } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceCard } from "@/components/ui/service-card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code size={28} />,
      title: "Développement Sur Mesure",
      description: "Applications web/mobile, sites web performants et automatisation de processus pour répondre à vos besoins spécifiques.",
      link: "/services/development"
    },
    {
      icon: <Brain size={28} />,
      title: "Intelligence Artificielle",
      description: "Analyse prédictive, chatbots intelligents, optimisation et computer vision pour propulser votre entreprise.",
      link: "/services/ai"
    },
    {
      icon: <Palette size={28} />,
      title: "Création Assistée par IA",
      description: "Génération de contenu, design graphique et montages audiovisuels automatisés avec une touche créative.",
      link: "/services/content"
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Conseil Tech",
      description: "Audit d'optimisation, formation aux outils IA et veille technologique pour vous garder à la pointe.",
      link: "/services/consulting"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <SectionTitle 
          title="Nos Services" 
          subtitle="Découvrez notre gamme complète de services innovants"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
