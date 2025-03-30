
import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Music, Headphones, Play, Radio, Mic2, FileAudio } from "lucide-react";
import { motion } from "framer-motion";

const Music = () => {
  const features = [
    {
      icon: <Music className="h-6 w-6" />,
      title: "Composition Originale",
      description: "Création de musiques originales sur mesure pour vos projets, adaptées à votre univers et à vos besoins spécifiques."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Sound Design",
      description: "Conception d'ambiances sonores, effets et habillages audio pour enrichir vos contenus vidéo, jeux ou applications."
    },
    {
      icon: <Radio className="h-6 w-6" />,
      title: "Production Musicale",
      description: "Arrangements, mixage et mastering professionnels pour un rendu sonore de qualité sur tous supports."
    },
    {
      icon: <Mic2 className="h-6 w-6" />,
      title: "Voix Off & Podcasts",
      description: "Production de contenus audio narratifs, voix off et podcasts avec post-production complète."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Briefing & Direction",
      description: "Discussion sur l'ambiance recherchée, les références et le contexte d'utilisation pour définir le style musical adapté."
    },
    {
      number: "02",
      title: "Maquette & Exploration",
      description: "Création de premières ébauches musicales avec l'aide de l'IA pour explorer différentes directions créatives."
    },
    {
      number: "03",
      title: "Production & Affinage",
      description: "Développement complet de la composition choisie avec arrangements détaillés et production soignée."
    },
    {
      number: "04",
      title: "Mixage & Mastering",
      description: "Finalisation technique pour un son équilibré et professionnel, adapté à tous les supports de diffusion."
    }
  ];

  const tools = [
    "Ableton Live", "FL Studio", "MIDI", "Instruments Virtuels", 
    "IA Musicales", "Mastering IA", "Sound Libraries", "Pro Tools", 
    "Audacity", "AIVA"
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
                  Création<br /><span className="text-gradient">Musicale</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Des compositions originales et sound design de qualité professionnelle, amplifiés par l'intelligence artificielle pour donner une dimension sonore unique à vos projets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Commencer un projet</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/portfolio?filter=music">Écouter mes créations</Link>
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
                    src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Création musicale" 
                    className="w-full h-auto rounded"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent/10 backdrop-blur-sm border border-accent/20 p-4 rounded-lg shadow-lg">
                  <Music className="h-12 w-12 text-accent" />
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
            title="Mes Services Musicaux"
            subtitle="Solutions sonores personnalisées pour tous types de projets créatifs"
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
            title="Mon Processus de Création"
            subtitle="Une approche méthodique et créative pour des productions musicales qui vous ressemblent"
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
            title="Mes Outils de Production"
            subtitle="Je combine instruments, technologies et IA pour des créations musicales uniques"
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

      {/* Samples section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <SectionTitle
            title="Extraits de Compositions"
            subtitle="Écoutez quelques échantillons de mes créations musicales récentes"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              { title: "Ambiance Cinématique", duration: "1:30", type: "Film" },
              { title: "Électronique Inspirante", duration: "2:15", type: "Publicité" },
              { title: "Corporate Dynamique", duration: "1:45", type: "Présentation" },
              { title: "Sound Design Immersif", duration: "0:55", type: "Jeu vidéo" }
            ].map((sample, index) => (
              <div key={index} className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">{sample.title}</h3>
                    <span className="text-sm text-muted-foreground">{sample.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Type: {sample.type}</p>
                  <div className="w-full bg-secondary/50 rounded-full h-1.5 mb-4">
                    <div className="bg-accent h-1.5 rounded-full" style={{ width: Math.random() * 100 + '%' }}></div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                    <Play size={16} />
                    Écouter
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link to="/portfolio?filter=music" className="inline-flex items-center gap-2">
                Découvrir plus d'exemples
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Pourquoi Choisir Mes Services Musicaux ?
              </h2>
              
              <div className="space-y-4">
                {[
                  "Compositions 100% originales et adaptées à vos besoins",
                  "Approche hybride alliant sensibilité humaine et puissance de l'IA",
                  "Droit d'utilisation commercial complet sur les créations",
                  "Multiple révisions jusqu'à votre satisfaction totale",
                  "Livraison rapide et formats adaptés à tous vos supports"
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
              <StatCard value="+30" label="projets musicaux réalisés" />
              <StatCard value="100%" label="droits d'utilisation inclus" />
              <StatCard value="48h" label="délai moyen pour une première maquette" />
              <StatCard value="+15" label="genres musicaux maîtrisés" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Prêt à donner une dimension sonore à votre projet ?
            </h2>
            <p className="text-accent-foreground/80 text-lg">
              Contactez-moi dès aujourd'hui pour discuter de vos besoins musicaux et obtenir un devis personnalisé.
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

export default Music;
