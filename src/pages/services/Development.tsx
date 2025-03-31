import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Code, Server, Globe, Smartphone, Zap, Lightbulb, BrainCircuit, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Development = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Applications Web",
      description: "Sites vitrines, e-commerce, plateformes SaaS et applications métier sur mesure avec une attention particulière à l'expérience utilisateur et aux performances."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Applications Mobiles",
      description: "Applications natives et cross-platform pour iOS et Android, optimisées pour offrir des performances exceptionnelles et une expérience utilisateur fluide."
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Back-end & API",
      description: "Services back-end robustes et API RESTful ou GraphQL pour connecter vos applications et systèmes avec une architecture scalable et sécurisée."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Optimisation & Performance",
      description: "Audit et optimisation de vos applications existantes pour améliorer les temps de chargement, l'indexation SEO et l'expérience utilisateur."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analyse & Conception",
      description: "Nous commençons par comprendre vos besoins métier et définir les spécifications techniques détaillées du projet."
    },
    {
      number: "02",
      title: "Développement Agile",
      description: "Notre équipe développe votre solution par itérations, avec des démonstrations régulières pour valider chaque fonctionnalité."
    },
    {
      number: "03",
      title: "Tests & Assurance Qualité",
      description: "Chaque composant est rigoureusement testé pour garantir stabilité, sécurité et performance optimale."
    },
    {
      number: "04",
      title: "Déploiement & Support",
      description: "Mise en production de votre application et accompagnement continu pour assurer son évolution et sa maintenance."
    }
  ];

  const technologies = [
    "React", "Node.js", "TypeScript", "Python", "Django", 
    "React Native", "GraphQL", "PostgreSQL", "MongoDB", 
    "Docker", "AWS", "CI/CD"
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

  // New project ideas by category
  const projectIdeas = {
    web: [
      {
        title: "Portfolio Multimédia Interactif",
        description: "Site vitrine moderne avec sections pour présenter vos créations (audio, vidéo, graphisme) et intégrer des démos interactives de vos projets techniques.",
        difficulty: "Modérée",
        time: "2-4 semaines"
      },
      {
        title: "Plateforme d'Apprentissage Interactive",
        description: "Site éducatif sur un domaine spécifique (IA, électronique, histoire des jeux vidéo) avec contenu progressif, quiz interactifs et ressources téléchargeables.",
        difficulty: "Modérée",
        time: "4-8 semaines"
      },
      {
        title: "Générateur de Contenu IA",
        description: "Application web permettant aux utilisateurs de créer du contenu (musique, images, textes) via des interfaces IA simplifiées avec options de personnalisation.",
        difficulty: "Élevée",
        time: "6-10 semaines"
      },
      {
        title: "Bibliothèque Médias Personnalisée",
        description: "Gestionnaire privé pour vos créations avec catégorisation, tags, métadonnées et filtrage avancé pour organiser votre catalogue créatif.",
        difficulty: "Modérée",
        time: "3-6 semaines"
      }
    ],
    desktop: [
      {
        title: "Éditeur de Métadonnées Avancé",
        description: "Application bureau pour éditer et organiser les métadonnées de divers formats de fichiers (photos, musique, vidéo) avec prévisualisation et édition par lot.",
        difficulty: "Modérée",
        time: "4-8 semaines"
      },
      {
        title: "Convertisseur Audio/Vidéo Spécialisé",
        description: "Outil de conversion optimisé pour des formats spécifiques avec préservation de métadonnées et paramètres avancés pour les créateurs de contenu.",
        difficulty: "Modérée",
        time: "3-5 semaines"
      },
      {
        title: "Outil de Développement Rétro",
        description: "Environnement de développement pour machines vintage (ATARI, Amiga, etc.) avec émulation intégrée, débogage et outils de conversion graphique/audio.",
        difficulty: "Élevée",
        time: "8-12 semaines"
      }
    ],
    mobile: [
      {
        title: "Companion App pour Créateurs",
        description: "Application mobile complémentaire à vos services web, permettant aux utilisateurs de visualiser et interagir avec vos créations en déplacement.",
        difficulty: "Modérée",
        time: "4-8 semaines"
      },
      {
        title: "Scanner de Collections",
        description: "App mobile pour scanner, cataloguer et gérer des collections physiques (jeux rétro, livres, vinyles) avec reconnaissance d'image et API de bases de données.",
        difficulty: "Modérée à Élevée",
        time: "6-10 semaines"
      }
    ],
    iot: [
      {
        title: "Station Météo Connectée",
        description: "Système de monitoring environnemental avec capteurs (température, humidité, pression) et interface web/mobile pour visualiser les données.",
        difficulty: "Modérée",
        time: "4-6 semaines"
      },
      {
        title: "Contrôleur Domotique DIY",
        description: "Système central pour gérer divers appareils domestiques (lumières, chauffage) via une interface web personnalisée et accessible à distance.",
        difficulty: "Élevée",
        time: "6-10 semaines"
      }
    ]
  };

  return (
    <Layout>
      {/* Hero section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Développement<br /><span className="text-gradient">Sur Mesure</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Créez des applications web et mobile performantes, évolutives et ergonomiques qui répondent exactement à vos besoins métier.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Démarrer un projet</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/portfolio?filter=web">Voir nos réalisations</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/60 rounded-lg blur opacity-30"></div>
                <div className="relative bg-card rounded-lg p-2 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Développement d'applications" 
                    className="w-full h-auto rounded"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent/10 backdrop-blur-sm border border-accent/20 p-4 rounded-lg shadow-lg">
                  <Code className="h-12 w-12 text-accent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionTitle
            title="Nos Services de Développement"
            subtitle="Solutions sur mesure adaptées à vos enjeux métier"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-card border rounded-lg p-8 hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 bg-accent/10 rounded-full w-fit mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <SectionTitle
            title="Notre Processus"
            subtitle="Une méthodologie éprouvée pour des résultats prévisibles"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-card border hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-accent/80 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionTitle
            title="Nos Technologies"
            subtitle="Nous utilisons des technologies modernes et éprouvées pour construire des solutions robustes"
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="px-6 py-3 bg-secondary/50 rounded-full text-foreground font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Ideas section - NEW */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionTitle
            title="Idées de Projets Réalisables"
            subtitle="Des projets à échelle humaine pour un développeur indépendant"
            centered
          />
          
          <Tabs defaultValue="web" className="mt-12">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-background/60 backdrop-blur-sm border border-accent/10 p-1 rounded-full">
                <TabsTrigger 
                  value="web" 
                  className="px-4 py-2 rounded-full data-[state=active]:bg-accent data-[state=active]:text-white transition-all duration-300"
                >
                  <Globe className="mr-2" size={16} />
                  Web
                </TabsTrigger>
                <TabsTrigger 
                  value="desktop" 
                  className="px-4 py-2 rounded-full data-[state=active]:bg-accent data-[state=active]:text-white transition-all duration-300"
                >
                  <Monitor className="mr-2" size={16} />
                  Desktop
                </TabsTrigger>
                <TabsTrigger 
                  value="mobile" 
                  className="px-4 py-2 rounded-full data-[state=active]:bg-accent data-[state=active]:text-white transition-all duration-300"
                >
                  <Smartphone className="mr-2" size={16} />
                  Mobile
                </TabsTrigger>
                <TabsTrigger 
                  value="iot" 
                  className="px-4 py-2 rounded-full data-[state=active]:bg-accent data-[state=active]:text-white transition-all duration-300"
                >
                  <BrainCircuit className="mr-2" size={16} />
                  IoT
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="web" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectIdeas.web.map((idea, index) => (
                  <Card key={index} className="bg-card border hover:shadow-md transition-all duration-300 overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-accent/60"></div>
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">{idea.title}</h3>
                          <div className="flex gap-3 mt-2">
                            <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full">Difficulté: {idea.difficulty}</span>
                            <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full">Durée: {idea.time}</span>
                          </div>
                        </div>
                        <div className="p-2 bg-accent/10 rounded-full">
                          <Lightbulb size={20} className="text-accent" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">{idea.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Discuter d'un projet web
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="desktop" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectIdeas.desktop.map((idea, index) => (
                  <Card key={index} className="bg-card border hover:shadow-md transition-all duration-300 overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-accent/60"></div>
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">{idea.title}</h3>
                          <div className="flex gap-3 mt-2">
                            <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full">Difficulté: {idea.difficulty}</span>
                            <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full">Durée: {idea.time}</span>
                          </div>
                        </div>
                        <div className="p-2 bg-accent/10 rounded-full">
                          <Monitor size={20} className="text-accent" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">{idea.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Discuter d'un projet desktop
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="mobile" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectIdeas.mobile.map((idea, index) => (
                  <Card key={index} className="bg-card border hover:shadow-md transition-all duration-300 overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-accent/60"></div>
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">{idea.title}</h3>
                          <div className="flex gap-3 mt-2">
                            <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full">Difficulté: {idea.difficulty}</span>
                            <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full">Durée: {idea.time}</span>
                          </div>
                        </div>
                        <div className="p-2 bg-accent/10 rounded-full">
                          <Smartphone size={20} className="text-accent" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">{idea.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Discuter d'un projet mobile
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="iot" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectIdeas.iot.map((idea, index) => (
                  <Card key={index} className="bg-card border hover:shadow-md transition-all duration-300 overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-accent/60"></div>
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">{idea.title}</h3>
                          <div className="flex gap-3 mt-2">
                            <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full">Difficulté: {idea.difficulty}</span>
                            <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full">Durée: {idea.time}</span>
                          </div>
                        </div>
                        <div className="p-2 bg-accent/10 rounded-full">
                          <BrainCircuit size={20} className="text-accent" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">{idea.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Discuter d'un projet IoT
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 p-6 rounded-xl bg-accent/10 border border-accent/20">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-accent/20 rounded-full shrink-0">
                <Database className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Projet sur-mesure</h3>
                <p className="text-muted-foreground">
                  Vous avez une idée spécifique qui ne figure pas dans cette liste ? Je suis ouvert à la discussion pour 
                  concevoir et développer un projet personnalisé qui répond exactement à vos besoins. Mon expertise 
                  technique diversifiée me permet d'aborder des projets dans de nombreux domaines.
                </p>
                <Button className="mt-4" variant="outline" asChild>
                  <Link to="/contact">Me contacter pour en discuter</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Pourquoi Choisir Nos Services de Développement?
              </h2>
              
              <div className="space-y-4">
                {[
                  "Applications sur mesure adaptées à vos besoins spécifiques",
                  "Code propre et maintenable pour une évolution pérenne",
                  "Architecture scalable qui grandit avec votre entreprise",
                  "Sécurité intégrée dès la conception du projet",
                  "Méthodologie agile pour des résultats rapides et concrets"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-accent/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Discuter de votre projet
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              <StatCard value="+40%" label="de ROI moyen pour nos clients" />
              <StatCard value="100%" label="de projets livrés à temps" />
              <StatCard value="+2M" label="d'utilisateurs de nos applications" />
              <StatCard value="24/7" label="support technique disponible" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Prêt à transformer votre idée en réalité digitale?
            </h2>
            <p className="text-accent-foreground/80 text-lg">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-accent hover:bg-white/90 border-white" asChild>
              <Link to="/contact">Démarrer un projet</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Development;
