
import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Palette, Camera, Images, Video, PenTool, FileImage } from "lucide-react";
import { motion } from "framer-motion";

const Content = () => {
  const features = [
    {
      icon: <Images className="h-6 w-6" />,
      title: "Design Graphique",
      description: "Création d'identités visuelles, logos, illustrations et supports marketing personnalisés en intégrant les techniques d'IA générative."
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Montage Vidéo",
      description: "Réalisation et montage de vidéos promotionnelles, explicatives ou narratives avec intégration d'effets spéciaux assistés par IA."
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Création de Contenu",
      description: "Génération de textes, scripts, descriptions et contenus marketing optimisés pour vos besoins spécifiques et votre audience."
    },
    {
      icon: <FileImage className="h-6 w-6" />,
      title: "Optimisation Visuelle",
      description: "Retouche d'images, amélioration qualitative et adaptation multiformat pour tous vos supports digitaux et imprimés."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Brief & Inspiration",
      description: "Discussion approfondie pour comprendre votre vision, vos objectifs et votre identité. Recherche d'inspiration et d'exemples."
    },
    {
      number: "02",
      title: "Concept & Création",
      description: "Élaboration de concepts et création des premières versions avec assistance IA pour multiplier les possibilités créatives."
    },
    {
      number: "03",
      title: "Révision & Affinage",
      description: "Cycles de feedback et d'amélioration pour perfectionner les créations selon vos retours et préférences."
    },
    {
      number: "04",
      title: "Finalisation & Livraison",
      description: "Optimisation finale, préparation des formats adaptés à vos besoins et livraison des fichiers sources."
    }
  ];

  const tools = [
    "Adobe Creative Suite", "Midjourney", "DALL·E", "Stable Diffusion", 
    "Canva Pro", "DaVinci Resolve", "Figma", "Blender", 
    "GPT-4 Vision", "Claude 3 Opus"
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
                  Création<br /><span className="text-gradient">Graphique & Vidéo</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Des créations visuelles impactantes et personnalisées, boostées par l'intelligence artificielle pour un rendu unique et professionnel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Commencer un projet</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/portfolio?filter=content">Voir mes réalisations</Link>
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
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                    alt="Création graphique et vidéo" 
                    className="w-full h-auto rounded"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent/10 backdrop-blur-sm border border-accent/20 p-4 rounded-lg shadow-lg">
                  <Palette className="h-12 w-12 text-accent" />
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
            title="Mes Services Créatifs"
            subtitle="Solutions visuelles personnalisées pour tous vos projets"
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
            title="Mon Processus Créatif"
            subtitle="Une approche méthodique pour des résultats qui dépassent vos attentes"
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
            title="Mes Outils"
            subtitle="Je combine les logiciels professionnels et les dernières IA génératives pour des résultats exceptionnels"
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
                Pourquoi Choisir Mes Services Créatifs ?
              </h2>
              
              <div className="space-y-4">
                {[
                  "Approche personnalisée adaptée à votre identité et vision",
                  "Combinaison unique d'expertise humaine et d'intelligence artificielle",
                  "Optimisation temps/coût grâce aux technologies IA avancées",
                  "Possibilité d'itérations multiples pour un résultat parfait",
                  "Fichiers sources livrés dans les formats de votre choix"
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
              <StatCard value="100%" label="de projets livrés à temps" />
              <StatCard value="+50" label="clients satisfaits" />
              <StatCard value="+200" label="créations réalisées" />
              <StatCard value="illimité" label="nombre de révisions" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Prêt à donner vie à vos idées créatives ?
            </h2>
            <p className="text-accent-foreground/80 text-lg">
              Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
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

export default Content;
