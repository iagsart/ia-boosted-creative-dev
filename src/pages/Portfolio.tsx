
import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Neuro Diversity Info",
      category: "Éducatif",
      description: "Plateforme d'information sur la neurodiversité, les troubles dys, TDAH, autisme et maladies neurodégénératives avec des explications théoriques et pratiques, des ressources et des conseils d'adaptation.",
      image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "Tailwind CSS", "IA"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/neuro-diversity"
    },
    {
      title: "Opti Learn",
      category: "Éducatif",
      description: "Site web éducatif sur l'optique scientifique et industrielle, proposant un apprentissage progressif, des ressources, actualités, évaluations et schémas interactifs.",
      image: "https://images.unsplash.com/photo-1585221340263-5b8e211158b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Interactive SVG", "CSS Animations"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/opti-learn"
    },
    {
      title: "IA Avenir",
      category: "Intelligence Artificielle",
      description: "Site éducatif sur l'histoire, les types, les niveaux et les concepts de l'intelligence artificielle, avec explications détaillées, illustrations par schémas, exercices interactifs et actualités.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "Visualizations", "IA"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/ia-avenir"
    },
    {
      title: "Elec Learn",
      category: "Éducatif",
      description: "Plateforme d'apprentissage sur l'électronique et l'électricité, proposant des cours structurés, exercices interactifs et ressources pour tous les niveaux.",
      image: "https://images.unsplash.com/photo-1563770557287-3bdf3b5f40b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML/CSS", "JavaScript", "SVG Animations"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/elec-learn"
    },
    {
      title: "Melody Dimensions",
      category: "Éducatif",
      description: "Site web dédié à la musique, couvrant la théorie, l'histoire, les genres musicaux, la physique du son, et les techniques d'arrangement et de production.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Web Audio API", "CSS3"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/melody-dimensions"
    },
    {
      title: "ATARI Demoscene & FX",
      category: "Rétro & Gaming",
      description: "Site consacré à la demoscene ATARI, proposant des simulations d'effets de démo, l'histoire de l'ATARI ST, des informations sur les groupes de demoscene et des détails techniques.",
      image: "https://images.unsplash.com/photo-1607016284318-d1384f74495a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "Canvas", "WebGL"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/atari-demoscene"
    },
    {
      title: "DATA Science Explorer",
      category: "Éducatif",
      description: "Plateforme d'apprentissage de la data science avec cours interactifs, visualisations modernes, système d'évaluation, ressources et outils en ligne.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "D3.js", "Python", "Jupyter"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/data-science-explorer"
    },
    {
      title: "Assistant Coach Sportif",
      category: "Application",
      description: "Application complète pour coachs sportifs, permettant la gestion des clients, activités, séances, plannings, facturation, avec des outils spécifiques pour différents types d'activités.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Calendar API"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/coach-sportif"
    },
    {
      title: "Creativity Booster",
      category: "Application",
      description: "Application d'aide à la créativité avec to-do liste évoluée, gestion de l'humeur, activités positives, aide à l'idéation avec IA, ressources et outils d'introspection.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "OpenAI API", "Local Storage", "PWA"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/creativity-booster"
    },
    {
      title: "ATARI ST Tools",
      category: "Développement",
      description: "Suite d'outils pour développeurs de jeux et démos sur ATARI ST, incluant génération de courbes, conversion d'images, optimisation de palettes, éditeur de sprites et plus.",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["C++", "Python", "SDL"],
      client: "Projet personnel",
      year: "2021",
      link: "/portfolio/atari-st-tools"
    },
    {
      title: "Personal Mp3 Metadata Manager",
      category: "Application",
      description: "Application de gestion de métadonnées MP3 assistée par IA, avec reformatage de noms de fichiers, édition de métadonnées, extraction de couvertures et plus.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Qt", "ID3", "OpenAI"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/mp3-metadata-manager"
    },
    {
      title: "Hylst Lair",
      category: "Portfolio",
      description: "Site personnel présentant l'ensemble de mes créations littéraires, graphiques, musicales, photographiques et vidéos, avec une navigation par catégorie.",
      image: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Animation", "Media"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/hylst-lair"
    }
  ];

  const projectCategories = [
    "Tous",
    "Éducatif",
    "Intelligence Artificielle",
    "Application",
    "Rétro & Gaming",
    "Développement",
    "Portfolio"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <SectionTitle
            title="Mon Portfolio"
            subtitle="Découvrez mes projets personnels réalisés avec passion et créativité"
            centered
          />

          <Tabs defaultValue="Tous" className="w-full">
            <div className="flex justify-center mb-12 overflow-x-auto">
              <TabsList className="bg-background/60 backdrop-blur-sm">
                {projectCategories.map((category) => (
                  <TabsTrigger key={category} value={category} className="px-4 py-2">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {projectCategories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {projects
                    .filter(project => category === "Tous" || project.category === category)
                    .map((project, index) => (
                      <motion.div 
                        key={index} 
                        variants={item}
                        whileHover={{ y: -10 }}
                        className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <img 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-accent/90 hover:bg-accent">{project.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="bg-secondary/50">{tech}</Badge>
                            ))}
                          </div>
                          
                          <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <span>{project.client}</span>
                            <span>{project.year}</span>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-border">
                            <a 
                              href={project.link} 
                              className="inline-flex items-center text-accent hover:underline gap-1 font-medium"
                            >
                              Voir le projet
                              <ExternalLink size={16} className="ml-1" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
