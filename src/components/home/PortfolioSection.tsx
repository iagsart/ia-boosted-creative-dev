
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, FileCode, Music, Gamepad, Brush, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-provider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PortfolioSection = () => {
  const { theme } = useTheme();
  
  const projects = [
    {
      title: "Hylst Music Haven",
      category: "Artistique & Technique",
      description: "Bibliothèque musicale de mes créations personnelles assistées par IA, avec interface moderne et lecteur multimédia évolué",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/hylst-music-haven",
      icon: <Music className="h-8 w-8 text-accent" />
    },
    {
      title: "Hylst Graphical Fantasy",
      category: "Artistique & Graphique",
      description: "Galerie de créations graphiques et musicales par IA dans le domaine de la Fantasy, avec design spécifique par catégorie",
      image: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/hylst-graphical-fantasy",
      icon: <Brush className="h-8 w-8 text-accent" />
    },
    {
      title: "Retro Gaming Memories",
      category: "Ludique & Data",
      description: "Site web dédié à l'histoire des consoles et ordinateurs rétro, avec caractéristiques, jeux populaires et ressources d'émulation",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/retro-gaming-memories",
      icon: <Gamepad className="h-8 w-8 text-accent" />
    },
    {
      title: "ATARI ST Tools for Coders",
      category: "Développement & Utilitaire",
      description: "Suite d'outils pour développeurs sur ATARI ST, incluant conversion d'images, optimisation de palettes et éditeur de sprites",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "/portfolio/atari-st-tools",
      icon: <Cpu className="h-8 w-8 text-accent" />
    }
  ];

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Animation du fond
  const backgroundVariants = {
    initial: { 
      backgroundPosition: "0% 0%"
    },
    animate: { 
      backgroundPosition: "100% 100%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
        ease: "linear"
      }
    }
  };

  return (
    <motion.section 
      className={`section-padding relative overflow-hidden ${theme === 'fantasy' ? 'bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50' : 'bg-background'}`}
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
    >
      {/* Particules de fond stylisées */}
      {theme === 'fantasy' && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-accent/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          ))}
        </div>
      )}
      
      {theme === 'tech' && (
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-accent/5"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 150 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                height: [
                  Math.random() * 150 + 50,
                  Math.random() * 250 + 100,
                  Math.random() * 150 + 50,
                ],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
      
      <div className="container relative z-10">
        <SectionTitle 
          title="Mes Réalisations" 
          subtitle="Exemples de projets personnels dans différents domaines"
          centered
        />
        
        {/* Version Carousel pour les petits écrans */}
        <div className="block md:hidden mb-12">
          <Carousel>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to={project.link} className="block">
                      <div className="relative rounded-xl overflow-hidden shadow-lg border border-accent/10 h-[420px] bg-card">
                        <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-accent/90 hover:bg-accent">{project.category}</Badge>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 h-1/2 flex flex-col justify-between">
                          <div>
                            <div className="mb-4 flex justify-center">{project.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                            <p className="text-muted-foreground text-sm text-center">{project.description}</p>
                          </div>
                          <div className="pt-4 text-center">
                            <span className="text-accent font-medium inline-flex items-center">
                              Explorer ce projet
                              <ArrowRight size={16} className="ml-1" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static mx-2 left-0 -translate-y-0" />
              <CarouselNext className="relative static mx-2 right-0 -translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        {/* Version Grid pour les écrans moyens et larges */}
        <motion.div 
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover="hover"
              className="relative group"
            >
              <Link to={project.link} className="block h-full">
                <div className={`h-full rounded-xl overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-xl border ${theme === 'dark' ? 'border-accent/20' : 'border-accent/10'} bg-card relative`}>
                  {/* Image avec overlay au survol */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent/90 hover:bg-accent shadow-lg">{project.category}</Badge>
                    </div>
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Button asChild variant="secondary" className="w-full backdrop-blur-sm bg-background/70">
                        <span className="inline-flex items-center justify-center gap-2">
                          Explorer ce projet
                          <ArrowRight size={16} />
                        </span>
                      </Button>
                    </motion.div>
                  </div>
                  
                  <div className="p-6 relative z-10">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-accent text-white p-3 rounded-full shadow-lg">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 mt-4 text-center group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 text-center">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="group">
              <Link to="/portfolio" className="inline-flex items-center gap-2">
                Voir tous mes projets
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
