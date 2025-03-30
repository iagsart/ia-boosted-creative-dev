
import { Code, Brain, Palette, Lightbulb, Music, Database, BarChart3, Laptop } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { ServiceCard } from "@/components/ui/service-card";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code size={28} />,
      title: "Développement Sur Mesure",
      description: "Applications web/desktop, sites vitrines et e-commerce adaptés à vos besoins. Solutions de programmation en Python, React et C++.",
      link: "/services/development"
    },
    {
      icon: <Brain size={28} />,
      title: "Intelligence Artificielle",
      description: "Intégration d'IA multimodales, automatisation de processus et développement de solutions prédictives pour optimiser votre activité.",
      link: "/services/ai"
    },
    {
      icon: <Palette size={28} />,
      title: "Création Graphique & Vidéo",
      description: "Conception graphique, montage vidéo et création de contenu visuel assistés par IA pour un rendu professionnel et personnalisé.",
      link: "/services/content"
    },
    {
      icon: <Database size={28} />,
      title: "Data Science",
      description: "Analyse de données, visualisation et insights pour prendre des décisions éclairées. Tableaux de bord et rapports automatisés.",
      link: "/services/data"
    },
    {
      icon: <Music size={28} />,
      title: "Création Musicale",
      description: "Composition musicale assistée par IA pour vos projets vidéo, podcasts, jeux ou applications. Ambiances sonores personnalisées.",
      link: "/services/music"
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Conseil Tech",
      description: "Accompagnement personnel dans vos projets tech, formations sur les outils IA et recommandations adaptées à vos besoins.",
      link: "/services/consulting"
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
    <section className="section-padding bg-background">
      <div className="container">
        <SectionTitle 
          title="Mes Services" 
          subtitle="Solutions innovantes et personnalisées adaptées à vos projets"
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
