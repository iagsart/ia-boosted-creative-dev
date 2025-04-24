
import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Database, BarChart3, TrendingUp, FileSearch, LineChart, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Data = () => {
  const features = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Traitement de Données",
      description: "Nettoyage, structuration et préparation de vos données pour en tirer le maximum de valeur et faciliter l'analyse."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Visualisation & Dashboards",
      description: "Création de tableaux de bord interactifs et rapports visuels pour rendre vos données compréhensibles et exploitables."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Analyse Prédictive",
      description: "Développement de modèles d'IA prédictifs pour anticiper les tendances et optimiser vos processus décisionnels."
    },
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: "Extraction d'Insights",
      description: "Identification des tendances et informations stratégiques cachées dans vos données pour guider vos décisions."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Collecte & Évaluation",
      description: "Identification des sources de données pertinentes et évaluation de leur qualité pour établir une base solide d'analyse."
    },
    {
      number: "02",
      title: "Préparation & Traitement",
      description: "Nettoyage, transformation et structuration des données brutes pour les rendre exploitables par les outils d'analyse."
    },
    {
      number: "03",
      title: "Analyse & Modélisation",
      description: "Application des techniques statistiques et d'apprentissage automatique pour extraire des insights significatifs."
    },
    {
      number: "04",
      title: "Visualisation & Reporting",
      description: "Présentation des résultats sous forme de visualisations intuitives et actionables pour faciliter la prise de décision."
    }
  ];

  const tools = [
    "Python", "Pandas", "Numpy", "Scikit-learn", 
    "TensorFlow", "Power BI", "Tableau", "SQL", 
    "Jupyter Notebook", "Matplotlib"
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
                  Data<br /><span className="text-gradient">Science</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transformez vos données en insights actionnables et prenez des décisions éclairées grâce à l'analyse avancée et l'intelligence artificielle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Commencer un projet</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/portfolio?filter=data">Voir mes réalisations</Link>
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
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Analyse de données" 
                    className="w-full h-auto rounded"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent/10 backdrop-blur-sm border border-accent/20 p-4 rounded-lg shadow-lg">
                  <BarChart3 className="h-12 w-12 text-accent" />
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
            title="Mes Services de Data Science"
            subtitle="Exploitez tout le potentiel de vos données pour une prise de décision optimale"
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
            title="Mon Approche Analytique"
            subtitle="Une méthodologie rigoureuse pour transformer les données en insights actionnables"
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

      {/* Tools section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionTitle
            title="Mes Outils d'Analyse"
            subtitle="J'utilise les technologies de pointe en data science pour des résultats précis et fiables"
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {tools.map((tech, index) => (
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

      {/* Benefits section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Pourquoi Choisir Mes Services d'Analyse ?
              </h2>
              
              <div className="space-y-4">
                {[
                  "Expertise technique et méthodologique en science des données",
                  "Approche adaptée aux besoins spécifiques de votre activité",
                  "Visualisations claires et insights actionnables",
                  "Modèles prédictifs pour anticiper les tendances futures",
                  "Formations et transfert de connaissances pour votre autonomie"
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
              <StatCard value="+35%" label="d'efficacité opérationnelle moyenne" />
              <StatCard value="+25" label="projets d'analyse réalisés" />
              <StatCard value="+40%" label="de ROI moyen après implémentation" />
              <StatCard value="100%" label="satisfaction client" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Prêt à valoriser vos données ?
            </h2>
            <p className="text-accent-foreground/80 text-lg">
              Contactez-moi dès aujourd'hui pour discuter de votre projet d'analyse et obtenir un devis personnalisé.
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

export default Data;
