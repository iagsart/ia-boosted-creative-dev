
import { Code, Brain, Palette, Lightbulb, Music, Database, BarChart3, Laptop, Cpu } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceCard } from "@/components/ui/service-card";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain size={28} />,
      title: "Conseil IA & Prompting",
      description: "Accompagnement dans l'utilisation des IA pour vos projets, optimisation de prompts et stratégies d'intégration pour maximiser le potentiel créatif et technique.",
      link: "/services/ai"
    },
    {
      icon: <Palette size={28} />,
      title: "Infographie & Design",
      description: "Création de logos, identités visuelles et supports graphiques personnalisés avec une approche combinant créativité humaine et outils numériques avancés.",
      link: "/services/content"
    },
    {
      icon: <Cpu size={28} />,
      title: "Expertise Optronique",
      description: "Conseil en optique, électronique, systèmes embarqués et traitement du signal basé sur plus de 15 ans d'expérience dans l'industrie spécialisée.",
      link: "/services/consulting"
    },
    {
      icon: <Code size={28} />,
      title: "Solutions No-Code & Low-Code",
      description: "Création d'applications et sites web sans code complexe, privilégiant les outils open source et adaptables à vos besoins spécifiques.",
      link: "/services/development"
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Idéation & Stratégie Créative",
      description: "Séances de brainstorming assistées par IA, génération de concepts innovants et élaboration de stratégies créatives pour votre entreprise ou projet.",
      link: "/services/consulting"
    },
    {
      icon: <Database size={28} />,
      title: "Gestion & Visualisation de Données",
      description: "Organisation, traitement et visualisation de vos données avec des outils adaptés (Python, Jupyter, Metabase), automatisation de processus (n8n, make).",
      link: "/services/data"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container">
        <SectionTitle 
          title="Mes Services" 
          subtitle="L'humain au centre, la technologie au service de vos projets"
          centered
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
