
import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Code, Server, Globe, Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";

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
