import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, BrainCircuit, Code, FileSearch2, Search, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const AI = () => {
  const features = [
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "Conseil en IA",
      description: "Stratégies d'intégration de l'IA pour optimiser vos opérations et innover."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Développement d'Agents IA",
      description: "Création d'agents autonomes pour automatiser des tâches complexes."
    },
    {
      icon: <FileSearch2 className="h-6 w-6" />,
      title: "Optimisation de Prompts",
      description: "Amélioration de vos prompts pour obtenir des résultats précis et pertinents."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Solutions de Recherche",
      description: "Implémentation de solutions de recherche avancées basées sur l'IA."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analyse des Besoins",
      description: "Identification précise de vos défis et opportunités."
    },
    {
      number: "02",
      title: "Conception de la Solution",
      description: "Élaboration d'une stratégie IA sur mesure pour répondre à vos objectifs."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Mise en œuvre de la solution IA avec une intégration transparente."
    },
    {
      number: "04",
      title: "Suivi & Optimisation",
      description: "Surveillance continue et ajustements pour garantir des performances optimales."
    }
  ];

  const tools = [
    "GPT-4", "Claude 3 Opus", "Langchain", "Llama 3",
    "Pinecone", "Weaviate", "n8n", "Make",
    "Python", "Jupyter", "Metabase"
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
                  Solutions<br /><span className="text-gradient">Intelligence Artificielle</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Maximisez votre potentiel grâce à des solutions IA sur mesure, conçues pour automatiser, innover et transformer votre activité.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Discuter de votre projet</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/portfolio?filter=ai">Découvrir mes réalisations</Link>
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
                    src="/images/services/intelligence_artificielle.jpg" 
                    alt="Solutions IA" 
                    className="w-full h-auto rounded"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent/10 backdrop-blur-sm border border-accent/20 p-4 rounded-lg shadow-lg">
                  <BrainCircuit className="h-12 w-12 text-accent" />
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
            title="Mes Services IA"
            subtitle="Des applications concrètes pour booster votre activité"
            centered
          />
          
          <div className="mt-12 flex justify-center">
            <img
              src="/images/services/solutions_ia.svg"
              alt="Solutions IA"
              className="w-full max-w-4xl h-auto"
            />
          </div>
          
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
            title="Mon Processus IA"
            subtitle="Une approche structurée pour des résultats optimaux"
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
            title="Mes Outils IA"
            subtitle="Les technologies de pointe pour des solutions performantes"
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
                Pourquoi Choisir Mes Services IA ?
              </h2>
              
              <div className="space-y-4">
                {[
                  "Expertise pointue en IA et en développement",
                  "Solutions sur mesure adaptées à vos besoins spécifiques",
                  "Intégration transparente avec vos systèmes existants",
                  "Suivi continu et optimisation des performances",
                  "Accompagnement personnalisé à chaque étape du projet"
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
              <StatCard value="95%" label="de satisfaction client" />
              <StatCard value="+30" label="projets IA réalisés" />
              <StatCard value="+10" label="années d'expérience" />
              <StatCard value="illimité" label="support technique" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Prêt à transformer votre entreprise avec l'IA ?
            </h2>
            <p className="text-accent-foreground/80 text-lg">
              Contactez-moi dès aujourd'hui pour discuter de votre projet et découvrir comment l'IA peut vous aider à atteindre vos objectifs.
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

export default AI;
