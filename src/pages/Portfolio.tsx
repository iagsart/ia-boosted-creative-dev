
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
      title: "IA Prédictive pour Retail",
      category: "Intelligence Artificielle",
      description: "Système de prévision des ventes basé sur l'apprentissage automatique qui analyse les données historiques de vente et prédit les tendances futures avec une précision de 94%. Notre solution a permis à ce client du secteur retail de réduire ses stocks excédentaires de 27% et d'optimiser sa chaîne d'approvisionnement.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      client: "Grand Distributeur National",
      year: "2023",
      link: "/portfolio/retail-ai"
    },
    {
      title: "Plateforme E-commerce",
      category: "Développement Web",
      description: "Site de vente en ligne avec recommandations personnalisées utilisant des algorithmes d'IA pour analyser le comportement des utilisateurs et suggérer des produits pertinents. Cette plateforme a permis d'augmenter le panier moyen de 32% et d'améliorer le taux de conversion de 18% en seulement trois mois après le lancement.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
      client: "Boutique Mode en Ligne",
      year: "2023",
      link: "/portfolio/ecommerce"
    },
    {
      title: "Chatbot Service Client",
      category: "Intelligence Artificielle",
      description: "Assistant virtuel intelligent pour le support client 24/7 capable de traiter plus de 80% des demandes sans intervention humaine. Intégré aux systèmes CRM existants, ce chatbot a permis de réduire les coûts de support de 42% tout en améliorant la satisfaction client grâce à des temps de réponse instantanés.",
      image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["NLP", "Python", "React", "Google Cloud"],
      client: "Entreprise SaaS B2B",
      year: "2022",
      link: "/portfolio/chatbot"
    },
    {
      title: "Application Mobile Santé",
      category: "Développement Mobile",
      description: "Application mobile de suivi de santé et fitness intégrant des algorithmes d'IA pour personnaliser les recommandations d'entraînement et nutrition. L'application analyse les données utilisateur et ajuste les plans en temps réel, résultant en un taux d'engagement 3x supérieur à la moyenne du secteur.",
      image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "TensorFlow Lite"],
      client: "Startup Fitness Tech",
      year: "2022",
      link: "/portfolio/health-app"
    },
    {
      title: "Automatisation Processus RH",
      category: "Automatisation",
      description: "Système d'automatisation RH qui utilise l'IA pour présélectionner les CV, planifier les entretiens et suivre les candidatures. Cette solution a réduit le temps de recrutement de 65% et amélioré la qualité des embauches grâce à une évaluation plus objective des candidats.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Django", "React", "NLP"],
      client: "Groupe Industriel Multinational",
      year: "2023",
      link: "/portfolio/hr-automation"
    },
    {
      title: "Plateforme Formation en Ligne",
      category: "Développement Web",
      description: "LMS (Learning Management System) personnalisé avec parcours d'apprentissage adaptatifs basés sur l'IA qui s'ajustent en fonction des performances de l'apprenant. Cette plateforme a augmenté les taux de complétion des formations de 47% et amélioré les résultats d'apprentissage.",
      image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      client: "Institution Éducative",
      year: "2022",
      link: "/portfolio/e-learning"
    }
  ];

  const projectCategories = [
    "Tous",
    "Intelligence Artificielle",
    "Développement Web",
    "Développement Mobile",
    "Automatisation"
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
            title="Notre Portfolio"
            subtitle="Découvrez nos projets réalisés avec passion et expertise"
            centered
          />

          <Tabs defaultValue="Tous" className="w-full">
            <div className="flex justify-center mb-12">
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
                              Voir l'étude de cas
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
