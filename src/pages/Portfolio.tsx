import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Search, Cpu, Globe, Monitor, Code, Gamepad2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Web Projects
  const webProjects = [
    {
      title: "Neuro Diversity Info",
      category: "Éducatif & Social",
      subcategory: "Web",
      description: "Plateforme d'information sur la neurodiversité, les troubles dys, TDAH, autisme et maladies neurodégénératives avec des explications théoriques et pratiques, des ressources et des conseils d'adaptation.",
      image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "Tailwind CSS", "IA"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/neuro-diversity"
    },
    {
      title: "Aide à l'Apprentissage Scolaire",
      category: "Éducatif & Social",
      subcategory: "Web",
      description: "Plateforme dédiée à l'aide et la motivation pour l'apprentissage scolaire, avec des ressources sur le fonctionnement de la mémoire, l'amélioration de la concentration, des méthodologies d'apprentissage, astuces et outils.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/aide-apprentissage"
    },
    {
      title: "Hylst Music Haven",
      category: "Artistique & Technique",
      subcategory: "Web",
      description: "Bibliothèque musicale de mes créations personnelles assistées par IA, avec backend/frontend, interface moderne, système de recherche avancé, playlists personnalisées, affichage de cover art et lecteur multimédia évolué.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Web Audio API", "IA"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/hylst-music-haven",
      featured: true
    },
    {
      title: "Hylst Graphical Fantasy",
      category: "Artistique & Graphique",
      subcategory: "Web",
      description: "Galerie présentant mes créations graphiques et musicales par IA dans le domaine de la Fantasy et de l'art, avec design spécifique par catégorie, système de tri via metadata et ambiance sonore personnalisée.",
      image: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Next.js", "Framer Motion", "Supabase", "IA"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/hylst-graphical-fantasy",
      featured: true
    },
    {
      title: "Hylst Art",
      category: "Commercial & Créatif",
      subcategory: "Web",
      description: "Site e-commerce moderne proposant le téléchargement HD de mes meilleures créations graphiques, musicales, littéraires et vidéo, avec intégration de systèmes de paiement et plateformes de soutien.",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Next.js", "Stripe", "PayPal", "Tailwind CSS", "Supabase"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/hylst-art"
    },
    {
      title: "Charming City",
      category: "Ludique & Créatif",
      subcategory: "Web",
      description: "Jeu de flirt en ligne boosté à l'IA offrant une expérience interactive et personnalisée à chaque utilisateur.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "OpenAI", "Socket.io", "MongoDB"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/charming-city"
    },
    {
      title: "Aventures Inédites",
      category: "Ludique & Créatif",
      subcategory: "Web",
      description: "Jeu de rôle textuel et graphique alimenté par l'IA, générant des aventures uniques à chaque partie avec des illustrations dynamiques.",
      image: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "OpenAI", "MongoDB", "Socket.io"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/aventures-inedites"
    },
    {
      title: "Offrez-vous un Instant Virtuel",
      category: "Commercial & Créatif",
      subcategory: "Web",
      description: "Plateforme de services fantaisistes, poétiques et artistiques sur mesure avec une présentation moderne et artistique intégrant des systèmes de paiement.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Next.js", "Stripe", "Tailwind CSS", "Framer Motion"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/instant-virtuel"
    },
    {
      title: "Hylst Mini Games",
      category: "Ludique & Créatif",
      subcategory: "Web",
      description: "Collection de mini-jeux web incluant démineur, asteroids, puzzle, courses, memory et space shooter, le tout avec une interface unifiée et moderne.",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Canvas API", "JavaScript", "HTML5", "CSS3"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/hylst-mini-games"
    },
    {
      title: "Retro Gaming Memories",
      category: "Ludique & Data",
      subcategory: "Web",
      description: "Site web dédié à l'histoire des consoles de jeux et ordinateurs rétro, présentant leurs caractéristiques, jeux populaires, ressources d'émulation et outils de gestion de ROMs.",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "MongoDB", "Express", "Node.js"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/retro-gaming-memories",
      featured: true
    },
    {
      title: "Mon Assistant Ludothèque",
      category: "Ludique & Data",
      subcategory: "Web",
      description: "Application de gestion de ludothèque personnelle avec base de données de jeux de société, rôle, cartes, et plateaux, incluant des outils d'aide au jeu générés par IA.",
      image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Firebase", "OpenAI", "Tailwind CSS"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/assistant-ludotheque"
    },
    {
      title: "IA Avenir",
      category: "Éducatif & Social",
      subcategory: "Web",
      description: "Site éducatif sur l'histoire, les types, les niveaux et les concepts de l'intelligence artificielle, avec explications détaillées, illustrations par schémas, exercices interactifs et actualités.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "Visualizations", "IA"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/ia-avenir"
    },
    {
      title: "Elec Learn",
      category: "Éducatif & Social",
      subcategory: "Web",
      description: "Plateforme d'apprentissage sur l'électronique et l'électricité, proposant des cours structurés, exercices interactifs et ressources pour tous les niveaux.",
      image: "https://images.unsplash.com/photo-1563770557287-3bdf3b5f40b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML/CSS", "JavaScript", "SVG Animations"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/elec-learn"
    },
    {
      title: "Melody Dimensions",
      category: "Éducatif & Social",
      subcategory: "Web",
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
      subcategory: "Web",
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
      category: "Éducatif & Social",
      subcategory: "Web",
      description: "Plateforme d'apprentissage de la data science avec cours interactifs, visualisations modernes, système d'évaluation, ressources et outils en ligne.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "D3.js", "Python", "Jupyter"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/data-science-explorer"
    },
    {
      title: "Assistant Coach Sportif",
      category: "Application & Gestion",
      subcategory: "Web",
      description: "Application complète pour coachs sportifs, permettant la gestion des clients, activités, séances, plannings, facturation, avec des outils spécifiques pour différents types d'activités.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Calendar API"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/coach-sportif"
    },
    {
      title: "Creativity Booster",
      category: "Application & Gestion",
      subcategory: "Web",
      description: "Application d'aide à la créativité avec to-do liste évoluée, gestion de l'humeur, activités positives, aide à l'idéation avec IA, ressources et outils d'introspection.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "OpenAI API", "Local Storage", "PWA"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/creativity-booster"
    },
    {
      title: "Hylst Lair",
      category: "Portfolio & Artistique",
      subcategory: "Web",
      description: "Site personnel présentant l'ensemble de mes créations littéraires, graphiques, musicales, photographiques et vidéos, avec une navigation par catégorie.",
      image: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Animation", "Media"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/hylst-lair"
    }
  ];

  // Desktop Projects
  const desktopProjects = [
    {
      title: "ATARI ST Tools for Coders",
      category: "Développement & Utilitaire",
      subcategory: "PC",
      description: "Suite d'outils pour développeurs de jeux et démos sur ATARI ST, incluant génération de courbes, conversion d'images, optimisation de palettes, éditeur de sprites et plus.",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["C++", "Python", "SDL"],
      client: "Projet personnel",
      year: "2021",
      link: "/portfolio/atari-st-tools",
      featured: true
    },
    {
      title: "Palette Optimizer",
      category: "Développement & Utilitaire",
      subcategory: "PC",
      description: "Outil d'optimisation de palettes de couleurs pour ATARI ST Pixel Art et personnes déficientes visuelles, permettant d'ajuster et visualiser les palettes optimales.",
      image: "https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["C++", "Qt", "OpenGL"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/palette-optimizer"
    },
    {
      title: "Hylst ROM Generator",
      category: "Développement & Utilitaire",
      subcategory: "PC",
      description: "Générateur de listes de ROMs de jeux rétro avec parseur d'informations pour créer des bases de données structurées pour l'émulation.",
      image: "https://images.unsplash.com/photo-1624519847929-7a1838ec750c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "SQLite"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/hylst-rom-generator"
    },
    {
      title: "Hylst Image Filtering Program",
      category: "Développement & Utilitaire",
      subcategory: "PC",
      description: "Application de traitement d'images avec différents filtres et effets, optimisée pour les performances et la qualité de rendu.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["C++", "OpenCV", "Qt"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/hylst-image-filtering"
    },
    {
      title: "Database Converter & Manager",
      category: "Développement & Utilitaire",
      subcategory: "PC",
      description: "Outil pour importer/exporter des données entre CSV/JSON/XML et SQLite/PostgreSQL/MySQL avec affichage, édition et tri des tables et gestion des requêtes SQL.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Qt", "SQLAlchemy"],
      client: "Projet personnel",
      year: "2022",
      link: "/portfolio/database-converter"
    },
    {
      title: "MP3 Data Manager",
      category: "Développement & Utilitaire",
      subcategory: "PC",
      description: "Application de gestion des métadonnées MP3, permettant de charger, afficher, éditer et exporter les tags ID3 standards et étendus, avec extraction de cover art.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Qt", "ID3", "OpenAI"],
      client: "Projet personnel",
      year: "2023",
      link: "/portfolio/mp3-metadata-manager"
    },
    {
      title: "Hylst Shoot Them Up",
      category: "Jeu & Divertissement",
      subcategory: "PC",
      description: "Jeu de tir spatial avec graphismes vectoriels, gestion de particules avancée et système de progression.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["C++", "SDL", "OpenGL"],
      client: "Projet personnel",
      year: "2021",
      link: "/portfolio/hylst-shmup"
    },
    {
      title: "Dice Roller Simulator",
      category: "Jeu & Divertissement",
      subcategory: "PC Terminal",
      description: "Simulateur avancé de lancers de dés avec interface en mode texte, historique, statistiques et configurations personnalisables.",
      image: "https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["C++", "Mode texte"],
      client: "Projet personnel",
      year: "2020",
      link: "/portfolio/dice-roller"
    },
    {
      title: "Hylst Digital Butler",
      category: "Développement & Utilitaire",
      subcategory: "PC Terminal",
      description: "Utilitaire multi-fonctions en mode texte offrant divers services et assistances dans un style raffiné de majordome digital.",
      image: "https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Mode texte"],
      client: "Projet personnel",
      year: "2021",
      link: "/portfolio/digital-butler"
    },
    {
      title: "Collection de Mini Jeux Textuels",
      category: "Jeu & Divertissement",
      subcategory: "PC Terminal",
      description: "Ensemble de petits jeux en mode texte incluant Pong, Moto Racer, Hero Platformer, Alien Shooter, Space Explorer, Pac-Ascii, et plus.",
      image: "https://images.unsplash.com/photo-1554511052-9bf3babf2671?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["C", "Mode texte"],
      client: "Projet personnel",
      year: "2020-2022",
      link: "/portfolio/mini-jeux-textuels"
    },
    {
      title: "Silver Creek",
      category: "Jeu & Divertissement",
      subcategory: "PC Terminal",
      description: "Jeu d'aventure et de stratégie au Far West en mode texte, avec gestion de ressources, combats et exploration.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["C", "Mode texte"],
      client: "Projet personnel",
      year: "2021",
      link: "/portfolio/silver-creek"
    },
    {
      title: "Inspecteur Bourde",
      category: "Jeu & Divertissement",
      subcategory: "PC Terminal",
      description: "Jeu d'enquête policière loufoque où l'on incarne l'Inspecteur Bourde à la recherche du chien Saucisse disparu.",
      image: "https://images.unsplash.com/photo-1573481078935-b9605167e06b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["C", "Mode texte"],
      client: "Projet personnel",
      year: "2021",
      link: "/portfolio/inspecteur-bourde"
    },
    {
      title: "L'Épopée Loufoque du Héros Malgré Lui",
      category: "Jeu & Divertissement",
      subcategory: "PC Terminal",
      description: "RPG simpliste et humoristique en mode texte avec progression de personnage, combats au tour par tour et quêtes absurdes.",
      image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["C", "Mode texte"],
      client: "Projet personnel",
      year: "2021",
      link: "/portfolio/epopee-loufoque"
    },
    {
      title: "Démos ATARI ST/Falcon",
      category: "Démo & Artistique",
      subcategory: "ATARI",
      description: "Diverses démos artistiques, graphiques et musicales réalisées en GFA Basic pour ATARI ST et Falcon, explorant différents effets visuels et sonores.",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["GFA Basic", "ATARI ST", "ATARI Falcon"],
      client: "Projet personnel",
      year: "1990-2000",
      link: "/portfolio/demos-atari"
    },
    {
      title: "Collection de Jeux ATARI ST",
      category: "Jeu & Divertissement",
      subcategory: "ATARI",
      description: "Ensemble de jeux pour ATARI ST incluant Bubble Shooter, Mini Platformer, Jeu des Petits Chevaux, jeux textuels et d'enquête, et plus.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["GFA Basic", "ATARI ST"],
      client: "Projet personnel",
      year: "1990-2000",
      link: "/portfolio/jeux-atari"
    },
    {
      title: "Utilitaires ATARI ST",
      category: "Développement & Utilitaire",
      subcategory: "ATARI",
      description: "Collection d'utilitaires pour ATARI ST : affichage d'images multi-formats, lecteur de fichiers musicaux, gestion de disques et fichiers, et outil d'aide à la conception de jeux.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["GFA Basic", "ATARI ST"],
      client: "Projet personnel",
      year: "1990-2000",
      link: "/portfolio/utilitaires-atari"
    }
  ];

  // Combine all projects
  const allProjects = [...webProjects, ...desktopProjects];

  // Project categories for filtering
  const projectCategories = [
    "Tous",
    "Web",
    "PC",
    "ATARI",
    "Éducatif & Social",
    "Artistique & Technique",
    "Artistique & Graphique",
    "Commercial & Créatif",
    "Ludique & Créatif",
    "Ludique & Data",
    "Application & Gestion",
    "Portfolio & Artistique",
    "Développement & Utilitaire",
    "Jeu & Divertissement",
    "Démo & Artistique",
    "Rétro & Gaming"
  ];

  // Filtre les projets en fonction de la recherche et de la catégorie
  useEffect(() => {
    const filtered = allProjects.filter(project => {
      const matchesSearch = searchQuery.trim() === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === 'Tous' || 
        project.category === selectedCategory ||
        project.subcategory === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProjects(filtered);
  }, [searchQuery, selectedCategory, allProjects]);

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

  const getCategoryIcon = (category) => {
    switch(category) {
      case "Web":
        return <Globe className="mr-2" size={16} />;
      case "PC":
        return <Monitor className="mr-2" size={16} />;
      case "ATARI":
        return <Cpu className="mr-2" size={16} />;
      default:
        return <Code className="mr-2" size={16} />;
    }
  };

  return (
    <Layout>
      <PageHeader
        title="Mon Portfolio Dev"
        subtitle="Découvrez mes projets personnels réalisés avec passion et créativité"
        backgroundEffect="gradient"
      />

      <section className="relative py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Mon Portfolio Dev"
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
              <TabsList className="bg-background/60 backdrop-blur-sm border border-accent/10 p-1 rounded-full mb-6">
                <TabsTrigger 
                  value="Tous" 
                  className="px-4 py-2 rounded-full data-[state=active]:bg-accent data-[state=active]:text-white transition-all duration-300"
                >
                  Tous
                </
