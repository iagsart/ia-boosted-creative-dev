
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [filteredProjects, setFilteredProjects] = useState([]);

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
      link: "/portfolio/opti-learn",
      featured: true
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
      link: "/portfolio/atari-demoscene",
      featured: true
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
      link: "/portfolio/atari-st-tools",
      featured: true
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

  // Filtre les projets en fonction de la recherche et de la catégorie
  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = searchQuery.trim() === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'Tous' || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProjects(filtered);
  }, [searchQuery, selectedCategory, projects]);

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

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <Layout>
      <section className="relative py-16 md:py-24">
        {/* Background with gradient and overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background -z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-fixed bg-cover opacity-5 mix-blend-overlay -z-10"></div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Mon Portfolio"
            subtitle="Découvrez mes projets personnels réalisés avec passion et créativité"
            centered
          />

          {/* Barre de recherche */}
          <div className="max-w-md mx-auto mb-12 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Rechercher un projet, une technologie..."
                className="pl-10 pr-4 py-2 w-full bg-background/70 backdrop-blur-sm border border-accent/20 focus:border-accent/40 rounded-full transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 rounded-full"
                  onClick={() => setSearchQuery("")}
                >
                  ×
                </Button>
              )}
            </div>
          </div>

          <Tabs 
            defaultValue="Tous" 
            className="w-full"
            value={selectedCategory}
            onValueChange={handleCategoryChange}
          >
            <div className="flex justify-center mb-12 overflow-x-auto scrollbar-hide">
              <TabsList className="bg-background/60 backdrop-blur-sm border border-accent/10 p-1 rounded-full">
                {projectCategories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category} 
                    className="px-4 py-2 rounded-full data-[state=active]:bg-accent data-[state=active]:text-white transition-all duration-300"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Featured Projects - Always visible */}
            {selectedCategory === "Tous" && (
              <div className="mb-16">
                <h3 className="text-2xl font-display font-semibold mb-8 text-center">Projets mis en avant</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {projects
                    .filter(project => project.featured)
                    .map((project, index) => (
                      <motion.div
                        key={`featured-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card to-card/80 border border-accent/10 shadow-lg hover:shadow-xl transition-all duration-500"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <div className="relative aspect-video overflow-hidden">
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="absolute top-4 left-4 z-20">
                            <Badge className="bg-accent text-white hover:bg-accent/90 shadow-md">{project.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6 relative z-20">
                          <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                          <p className="text-muted-foreground mb-4">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="bg-background/50 backdrop-blur-sm">{tech}</Badge>
                            ))}
                          </div>
                          
                          <div className="flex justify-between items-center text-sm text-muted-foreground mt-4">
                            <span>{project.client}</span>
                            <span>{project.year}</span>
                          </div>
                          
                          <div className="mt-6 pt-4 border-t border-border">
                            <a 
                              href={project.link} 
                              className="inline-flex items-center text-accent hover:text-accent/80 font-medium group/link"
                            >
                              Explorer ce projet
                              <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                            </a>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </motion.div>
                    ))}
                </div>
              </div>
            )}

            {/* Grid de projets filtrés */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                      <motion.div 
                        key={index} 
                        variants={item}
                        whileHover={{ y: -10 }}
                        className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300"
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
                              className="inline-flex items-center text-accent hover:text-accent/80 gap-1 font-medium group"
                            >
                              Voir le projet
                              <ExternalLink size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center">
                      <h3 className="text-xl font-semibold mb-2">Aucun projet trouvé</h3>
                      <p className="text-muted-foreground">
                        Aucun projet ne correspond à votre recherche. Essayez avec d'autres termes ou catégories.
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-4" 
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedCategory("Tous");
                        }}
                      >
                        Réinitialiser les filtres
                      </Button>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
