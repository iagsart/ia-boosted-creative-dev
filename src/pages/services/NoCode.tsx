
import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Code, 
  Rocket, 
  Clock, 
  Users, 
  Building,
  Handshake,
  Laptop,
  Smartphone, // Replacing Mobile with Smartphone which is available
  Lightbulb,
  FileText,
  Layers 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const NoCodePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Platform data
  const noCodePlatforms = [
    {
      name: "Bubble.io",
      description: "Créez des applications web complexes sans code avec une grande flexibilité.",
      icon: <Layers className="h-6 w-6 text-[#9b87f5]" />,
      useCases: ["Applications web complexes", "Systèmes de réservation", "Marketplaces"],
      color: "bg-gradient-to-br from-[#9b87f5]/20 to-[#7E69AB]/20"
    },
    {
      name: "Webflow",
      description: "Excellent pour les sites web professionnels et interactifs avec un CMS puissant.",
      icon: <Code className="h-6 w-6 text-[#33C3F0]" />,
      useCases: ["Sites vitrines avancés", "Portfolios interactifs", "Blogs avec CMS"],
      color: "bg-gradient-to-br from-[#33C3F0]/20 to-[#1EAEDB]/20"
    },
    {
      name: "Glide",
      description: "Transforme des feuilles de calcul en applications mobiles ou web en quelques minutes.",
      icon: <Smartphone className="h-6 w-6 text-[#D6BCFA]" />, // Updated to use Smartphone
      useCases: ["Applications internes", "Catalogues produits", "Outils de terrain"],
      color: "bg-gradient-to-br from-[#D6BCFA]/20 to-[#9b87f5]/20"
    },
    {
      name: "Airtable",
      description: "Plus qu'une base de données, une plateforme pour construire des applications internes.",
      icon: <FileText className="h-6 w-6 text-[#7E69AB]" />,
      useCases: ["Gestion de projet", "CRM simplifié", "Inventaires"],
      color: "bg-gradient-to-br from-[#7E69AB]/20 to-[#E5DEFF]/20"
    }
  ];

  const lowCodePlatforms = [
    {
      name: "Retool",
      description: "Pour construire rapidement des outils internes en se connectant à diverses bases de données et API.",
      icon: <Laptop className="h-6 w-6 text-[#1EAEDB]" />,
      useCases: ["Dashboards", "Interfaces d'administration", "Outils métiers"],
      color: "bg-gradient-to-br from-[#1EAEDB]/20 to-[#33C3F0]/20"
    },
    {
      name: "Budibase",
      description: "Plateforme Low-Code open-source pour créer des outils internes. Permet l'auto-hébergement.",
      icon: <Building className="h-6 w-6 text-[#E5DEFF]" />,
      useCases: ["Applications métiers", "Portails clients", "Automatisations"],
      color: "bg-gradient-to-br from-[#E5DEFF]/20 to-[#D6BCFA]/20"
    },
    {
      name: "Directus",
      description: "Headless CMS open-source qui peut servir de backend Low-Code puissant.",
      icon: <Layers className="h-6 w-6 text-[#9b87f5]" />,
      useCases: ["APIs personnalisées", "Gestion de contenu", "Backends sur mesure"],
      color: "bg-gradient-to-br from-[#9b87f5]/20 to-[#7E69AB]/20"
    },
    {
      name: "Mendix",
      description: "Cible les entreprises avec des besoins d'applications complexes et intégrées.",
      icon: <Building className="h-6 w-6 text-[#33C3F0]" />,
      useCases: ["Applications d'entreprise", "Systèmes intégrés", "Applications critiques"],
      color: "bg-gradient-to-br from-[#33C3F0]/20 to-[#1EAEDB]/20"
    }
  ];

  // Advantages data
  const advantages = [
    {
      title: "Rapidité de développement",
      description: "De l'idée au déploiement en quelques jours ou semaines au lieu de plusieurs mois.",
      icon: <Clock className="h-10 w-10 p-2 bg-purple-100 rounded-lg text-purple-600" />
    },
    {
      title: "Réduction des coûts",
      description: "Moins de temps de développement, moins de besoins en ressources techniques spécialisées.",
      icon: <ArrowRight className="h-10 w-10 p-2 bg-blue-100 rounded-lg text-blue-600" />
    },
    {
      title: "Accessibilité",
      description: "Permet à des non-développeurs de créer leurs propres outils et solutions.",
      icon: <Users className="h-10 w-10 p-2 bg-indigo-100 rounded-lg text-indigo-600" />
    },
    {
      title: "Agilité",
      description: "Modifications et mises à jour rapides pour s'adapter aux besoins changeants.",
      icon: <Rocket className="h-10 w-10 p-2 bg-purple-100 rounded-lg text-purple-600" />
    },
    {
      title: "Collaboration améliorée",
      description: "Les plateformes visuelles facilitent la compréhension entre équipes techniques et métiers.",
      icon: <Handshake className="h-10 w-10 p-2 bg-blue-100 rounded-lg text-blue-600" />
    },
    {
      title: "Réduction de la dette technique",
      description: "Les plateformes gèrent une grande partie de l'infrastructure sous-jacente.",
      icon: <Code className="h-10 w-10 p-2 bg-indigo-100 rounded-lg text-indigo-600" />
    }
  ];

  // Use cases
  const useCases = [
    {
      title: "Pour les PME",
      icon: <Building className="h-10 w-10 mb-4 text-purple-600" />,
      examples: [
        "Portail client personnalisé",
        "Application de suivi de chantier",
        "Outil de gestion des stocks",
        "Tableaux de bord sur mesure",
        "CRM adapté à votre activité"
      ]
    },
    {
      title: "Pour les grandes entreprises",
      icon: <Users className="h-10 w-10 mb-4 text-blue-600" />,
      examples: [
        "Optimisation des workflows logistiques",
        "Digitalisation des processus métiers",
        "Applications pour les forces de terrain",
        "Prototypage rapide de nouveaux services",
        "Intégration de systèmes legacy"
      ]
    },
    {
      title: "Pour les indépendants",
      icon: <Lightbulb className="h-10 w-10 mb-4 text-indigo-600" />,
      examples: [
        "Portfolio interactif",
        "Automatisation des tâches administratives",
        "Système de prise de rendez-vous",
        "Outil de suivi de projets clients",
        "Boutique en ligne personnalisée"
      ]
    }
  ];

  // Example projects data (fictional)
  const exampleProjects = [
    {
      title: "Portail client pour cabinet d'architectes",
      platform: "Bubble.io",
      description: "Suivi de projet, partage de plans et communication centralisée pour un cabinet d'architectes.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      results: "Réduction de 40% des emails et appels de suivi. Satisfaction client améliorée de 35%."
    },
    {
      title: "Application de gestion pour chantiers BTP",
      platform: "Glide",
      description: "Suivi des équipements, planning des équipes et rapports d'incidents en temps réel.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      results: "Gain de 15 heures/semaine en saisie manuelle. ROI en moins de 3 mois."
    },
    {
      title: "Système de réservation pour espace de coworking",
      platform: "Retool",
      description: "Réservation d'espaces, gestion des ressources et facturation automatisée.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      results: "Installation en 2 semaines, contre 3 mois estimés pour une solution codée sur mesure."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-background to-background dark:from-purple-950/20 dark:via-background dark:to-background -z-10"></div>
        
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block mb-4 px-4 py-1.5 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-sm font-medium">
              Faites plus avec moins de code
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-blue-500 to-indigo-700 dark:from-purple-400 dark:via-blue-300 dark:to-indigo-400">
              No-Code / Low-Code
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Accélérez votre transformation digitale sans équipe de développement dédiée.
              <span className="block mt-2 text-base italic">Parce que parfois, le meilleur code est celui qu'on n'écrit pas 😉</span>
            </p>
          </motion.div>
          
          {/* Visual intro */}
          <div className="relative mb-12 mt-16">
            <motion.div 
              className="w-full h-96 relative rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90">
                <div className="flex flex-col justify-center items-center h-full px-6 md:px-10 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">De l'idée à l'application en un temps record</h2>
                  
                  <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 items-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold">80%</div>
                      <div className="text-sm opacity-80">Plus rapide que le développement traditionnel</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold">60%</div>
                      <div className="text-sm opacity-80">Économies sur les coûts de développement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold">100%</div>
                      <div className="text-sm opacity-80">Adaptable à vos besoins spécifiques</div>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="mt-10 bg-white text-purple-700 hover:bg-white/90 hover:text-purple-800"
                    asChild
                  >
                    <Link to="/contact">
                      Discuter de votre projet
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is No-Code/Low-Code */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionTitle 
            title="Qu'est-ce que le No-Code / Low-Code ?" 
            subtitle="Une révolution dans le développement d'applications"
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-purple-50/50 dark:from-background dark:to-purple-900/10">
              <CardHeader>
                <CardTitle className="text-2xl">No-Code</CardTitle>
                <CardDescription className="text-base">
                  Créez des applications sans écrire une seule ligne de code
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full">
                      <svg className="h-3 w-3 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Interfaces visuelles de type "glisser-déposer"</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full">
                      <svg className="h-3 w-3 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Accessible aux utilisateurs non techniques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full">
                      <svg className="h-3 w-3 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Configuration par flux de travail visuel</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full">
                      <svg className="h-3 w-3 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Idéal pour les applications internes et les processus métiers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-blue-50/50 dark:from-background dark:to-blue-900/10">
              <CardHeader>
                <CardTitle className="text-2xl">Low-Code</CardTitle>
                <CardDescription className="text-base">
                  Développez plus vite en minimisant le code manuel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">
                      <svg className="h-3 w-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Combine interfaces visuelles et code personnalisé</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">
                      <svg className="h-3 w-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Plus de flexibilité pour les cas complexes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">
                      <svg className="h-3 w-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Extension avec du code pour fonctionnalités avancées</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">
                      <svg className="h-3 w-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Idéal pour les applications plus complexes et évolutives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Quick illustration */}
          <div className="relative mt-20 mb-12 p-6 border border-dashed border-purple-300 dark:border-purple-800 rounded-lg bg-white/50 dark:bg-gray-900/50 overflow-hidden">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-70"></div>
            <div className="absolute -left-14 -bottom-14 w-28 h-28 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-70"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="text-center p-4">
                <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-3">
                  <span className="text-purple-600 dark:text-purple-400">Traditional</span>
                </div>
                <code className="text-xs block mb-2"><span className="text-green-600 dark:text-green-400">// 100+ lignes de code</span></code>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-2 bg-red-400 rounded-full" style={{width: '100%'}}></div>
                </div>
                <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">Temps de développement : <span className="font-semibold">Semaines/Mois</span></p>
              </div>
              
              <div className="text-center p-4">
                <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-3">
                  <span className="text-blue-600 dark:text-blue-400">Low-Code</span>
                </div>
                <code className="text-xs block mb-2"><span className="text-green-600 dark:text-green-400">// 10-20 lignes de code</span></code>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-2 bg-yellow-400 rounded-full" style={{width: '30%'}}></div>
                </div>
                <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">Temps de développement : <span className="font-semibold">Jours/Semaines</span></p>
              </div>
              
              <div className="text-center p-4">
                <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-3">
                  <span className="text-purple-600 dark:text-purple-400">No-Code</span>
                </div>
                <code className="text-xs block mb-2"><span className="text-green-600 dark:text-green-400">// 0 lignes de code</span></code>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-2 bg-green-400 rounded-full" style={{width: '5%'}}></div>
                </div>
                <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">Temps de développement : <span className="font-semibold">Heures/Jours</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Les avantages */}
      <section className="py-16 bg-gradient-to-b from-background to-purple-50/30 dark:from-background dark:to-purple-900/5">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionTitle 
            title="Pourquoi adopter le No-Code / Low-Code ?" 
            subtitle="Les avantages qui transforment votre entreprise"
            centered
          />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          >
            {advantages.map((advantage, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800"
              >
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Value proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-medium mb-4">
              <span className="text-purple-600 dark:text-purple-400 font-bold">10x</span> plus rapide, 
              <span className="text-blue-600 dark:text-blue-400 font-bold"> 3x</span> moins cher, 
              <span className="text-indigo-600 dark:text-indigo-400 font-bold"> 100%</span> adapté à vos besoins
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Le No-Code / Low-Code n'est pas seulement un outil pour les petits projets. C'est une approche stratégique qui permet d'accélérer votre transformation numérique, d'impliquer davantage vos équipes métiers, et de vous adapter rapidement aux évolutions de votre secteur.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Plateformes */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionTitle 
            title="Les meilleures plateformes" 
            subtitle="Des outils adaptés à chaque besoin"
            centered
          />
          
          <div className="mt-10">
            <Tabs defaultValue="nocode" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="nocode" className="text-base">Plateformes No-Code</TabsTrigger>
                <TabsTrigger value="lowcode" className="text-base">Plateformes Low-Code</TabsTrigger>
              </TabsList>
              
              <TabsContent value="nocode">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {noCodePlatforms.map((platform, index) => (
                    <Card key={index} className={cn("relative overflow-hidden border-0 shadow-md", platform.color)}>
                      <CardHeader>
                        <div className="mb-2">{platform.icon}</div>
                        <CardTitle>{platform.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Cas d'usage :</p>
                          <ul className="text-xs space-y-1">
                            {platform.useCases.map((useCase, i) => (
                              <li key={i} className="flex items-center">
                                <svg className="h-3 w-3 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="lowcode">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {lowCodePlatforms.map((platform, index) => (
                    <Card key={index} className={cn("relative overflow-hidden border-0 shadow-md", platform.color)}>
                      <CardHeader>
                        <div className="mb-2">{platform.icon}</div>
                        <CardTitle>{platform.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Cas d'usage :</p>
                          <ul className="text-xs space-y-1">
                            {platform.useCases.map((useCase, i) => (
                              <li key={i} className="flex items-center">
                                <svg className="h-3 w-3 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-16 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-900/5">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionTitle 
            title="Cas d'usage par secteur" 
            subtitle="Des solutions adaptées à chaque besoin"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  {useCase.icon}
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {useCase.examples.map((example, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comment ça marche */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionTitle 
            title="Comment ça marche ?" 
            subtitle="Notre approche No-Code / Low-Code en 4 étapes"
            centered
          />
          
          <div className="relative mt-16">
            {/* Timeline connector */}
            <div className="absolute top-0 left-1/2 w-1 h-full bg-purple-200 dark:bg-purple-900/30 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                  <div className="w-10 h-10 rounded-full border-4 border-purple-600 bg-white dark:bg-gray-900 flex items-center justify-center">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:text-right"
                  >
                    <div className="md:hidden w-10 h-10 rounded-full border-4 border-purple-600 bg-white dark:bg-gray-900 flex items-center justify-center mb-4">
                      <span className="text-purple-600 font-bold">1</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Analyse des besoins</h3>
                    <p className="text-muted-foreground">
                      Nous commençons par comprendre vos objectifs, processus métiers et exigences spécifiques.
                      Cette phase est cruciale pour concevoir une solution parfaitement adaptée à vos besoins.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg"
                  >
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Ateliers de découverte et entretiens utilisateurs</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Cartographie des processus actuels et identification des points d'amélioration</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Définition des indicateurs de succès (KPIs)</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                  <div className="w-10 h-10 rounded-full border-4 border-blue-600 bg-white dark:bg-gray-900 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:order-2 md:text-left"
                  >
                    <div className="md:hidden w-10 h-10 rounded-full border-4 border-blue-600 bg-white dark:bg-gray-900 flex items-center justify-center mb-4">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Conception de solution</h3>
                    <p className="text-muted-foreground">
                      Nous sélectionnons la plateforme No-Code/Low-Code la plus adaptée et concevons
                      l'architecture de votre solution en collaboration avec votre équipe.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg md:order-1"
                  >
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Sélection de la plateforme optimale (Bubble, Retool, Glide...)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Conception de maquettes interactives et workflows</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Validation du modèle de données et des intégrations nécessaires</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                  <div className="w-10 h-10 rounded-full border-4 border-indigo-600 bg-white dark:bg-gray-900 flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">3</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:text-right"
                  >
                    <div className="md:hidden w-10 h-10 rounded-full border-4 border-indigo-600 bg-white dark:bg-gray-900 flex items-center justify-center mb-4">
                      <span className="text-indigo-600 font-bold">3</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Développement itératif</h3>
                    <p className="text-muted-foreground">
                      Nous construisons votre application par cycles courts avec des feedbacks
                      réguliers, vous permettant de voir les résultats rapidement et d'ajuster le cap si nécessaire.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg"
                  >
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Cycles de développement courts (1-2 semaines)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Démonstrations régulières et ajustements en temps réel</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Tests utilisateurs continus pour valider l'expérience</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                  <div className="w-10 h-10 rounded-full border-4 border-green-600 bg-white dark:bg-gray-900 flex items-center justify-center">
                    <span className="text-green-600 font-bold">4</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="md:order-2 md:text-left"
                  >
                    <div className="md:hidden w-10 h-10 rounded-full border-4 border-green-600 bg-white dark:bg-gray-900 flex items-center justify-center mb-4">
                      <span className="text-green-600 font-bold">4</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Déploiement et support</h3>
                    <p className="text-muted-foreground">
                      Une fois votre solution finalisée, nous assurons son déploiement, formons vos équipes
                      et continuons à vous accompagner selon vos besoins.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg md:order-1"
                  >
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Migration des données et intégration avec vos systèmes existants</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Formation des utilisateurs et documentation complète</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Support technique et évolutions selon vos besoins</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Exemples de réalisations */}
      <section className="py-16 bg-gradient-to-b from-background to-indigo-50/30 dark:from-background dark:to-indigo-900/5">
        <div className="container max-w-6xl mx-auto px-4">
          <SectionTitle 
            title="Exemples de réalisations" 
            subtitle="Des projets concrets qui ont transformé l'activité de nos clients"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {exampleProjects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg">
                  <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded">
                        {project.platform}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </CardContent>
                  <CardFooter className="border-t border-border/40 bg-muted/20">
                    <p className="text-xs font-medium">Résultats: <span className="text-accent">{project.results}</span></p>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <SectionTitle 
            title="Questions fréquentes" 
            subtitle="Tout ce que vous devez savoir sur le No-Code / Low-Code"
            centered
          />
          
          <div className="mt-10 space-y-4">
            <Card className="border bg-card">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-medium">Le No-Code est-il adapté aux projets d'entreprise complexes ?</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="text-muted-foreground">
                  Absolument ! Bien que souvent associé à des projets simples, le No-Code/Low-Code moderne peut gérer des flux de travail complexes, des intégrations multiples et des logiques métier sophistiquées. Pour les cas très spécifiques, nous pouvons combiner approches No-Code et développement traditionnel au besoin.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border bg-card">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-medium">Qu'en est-il de la sécurité et de la conformité ?</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="text-muted-foreground">
                  Les plateformes No-Code/Low-Code modernes respectent des standards élevés de sécurité et offrent des fonctionnalités avancées comme l'authentification multi-facteurs, le chiffrement des données et la gestion des droits. Nous veillons à choisir des plateformes conformes à vos exigences réglementaires (RGPD, etc.).
                </p>
              </CardContent>
            </Card>
            
            <Card className="border bg-card">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-medium">Comment éviter l'effet "boîte noire" et la dépendance à une plateforme ?</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="text-muted-foreground">
                  C'est une préoccupation légitime que nous adressons en : 1) Privilégiant les plateformes ouvertes avec des options d'exportation de données, 2) Documentant en détail les workflows et logiques métier, 3) Formant vos équipes pour vous rendre autonomes, et 4) Élaborant une stratégie de sortie en cas de besoin futur.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border bg-card">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-medium">Quel est le coût par rapport au développement traditionnel ?</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="text-muted-foreground">
                  Le coût global peut être 3 à 5 fois inférieur au développement traditionnel, grâce à des temps de développement réduits (semaines au lieu de mois) et moins de ressources techniques requises. Il faut toutefois considérer les coûts d'abonnement aux plateformes, qui varient selon votre usage et vos besoins d'évolutivité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900">
        <div className="container max-w-4xl mx-auto px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à transformer votre idée en application ?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Discutons de votre projet et voyons comment le No-Code / Low-Code peut vous faire gagner du temps et de l'argent.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-white/90 border-0" asChild>
                <Link to="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 border border-white/30" asChild>
                <Link to="/services">
                  Découvrir nos autres services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NoCodePage;
