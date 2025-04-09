
import { Code, Brain, Palette, Lightbulb, Music, Database, BarChart3, Laptop, Cpu, FileText, Headphones, Bot } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceCard } from "@/components/ui/service-card";
import { motion } from "framer-motion";

interface ServicesGridProps {
  showTitle?: boolean;
  centered?: boolean;
  title?: string;
  subtitle?: string;
}

const ServicesGrid = ({ 
  showTitle = true, 
  centered = true,
  title = "Mes Services",
  subtitle = "L'humain au centre, la technologie au service de vos projets"
}: ServicesGridProps) => {
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
      icon: <Code size={28} />,
      title: "Développement Web",
      description: "Création d'applications et sites web sans code complexe, privilégiant les outils open source et adaptables à vos besoins spécifiques.",
      link: "/services/development"
    },
    {
      icon: <Cpu size={28} />,
      title: "Expertise Optronique",
      description: "Conseil en optique, électronique, systèmes embarqués et traitement du signal basé sur plus de 15 ans d'expérience dans l'industrie spécialisée.",
      link: "/services/consulting"
    },
    {
      icon: <Database size={28} />,
      title: "Gestion de Données",
      description: "Organisation, traitement et visualisation de vos données avec des outils adaptés (Python, Jupyter, Metabase), automatisation de processus (n8n, make).",
      link: "/services/data"
    },
    {
      icon: <Music size={28} />,
      title: "Audio & Musique",
      description: "Création musicale, sound design, traitement audio et transcription multi-langue pour tous vos projets nécessitant une dimension sonore professionnelle.",
      link: "/services/music"
    },
    {
      icon: <Bot size={28} />,
      title: "Chatbots & IA avancée",
      description: "Développement de chatbots avec mémoire, personnalité adaptative et base documentaire personnalisée pour améliorer votre service client.",
      link: "/services/ai"
    },
    {
      icon: <FileText size={28} />,
      title: "Contenus & Communication",
      description: "Copywriting, storytelling et génération de contenus sur mesure pour vos produits et services avec une touche personnelle boostée par l'IA.",
      link: "/services/content"
    }
  ];

  // Animation variants
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
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/5"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10">
        {showTitle && (
          <SectionTitle 
            title={title} 
            subtitle={subtitle}
            centered={centered}
          />
        )}
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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

export default ServicesGrid;
