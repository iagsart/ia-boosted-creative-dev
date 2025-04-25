
import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Lightbulb, Search, GraduationCap, Compass, PieChart, Sparkles, Code, Palette } from "lucide-react";
import { motion } from "framer-motion";

const Consulting = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Audit Technologique",
      description: "Évaluation de vos systèmes, processus et outils actuels pour identifier les opportunités d'optimisation et d'innovation."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Conseil Stratégique",
      description: "Recommandations personnalisées pour intégrer les technologies émergentes et l'IA dans votre activité ou vos projets personnels."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Formation IA & Tech",
      description: "Sessions d'apprentissage adaptées pour maîtriser les outils d'IA, de programmation ou de création assistée par intelligence artificielle."
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Accompagnement de Projet",
      description: "Suivi et conseil sur vos projets tech en cours pour maximiser les chances de réussite et éviter les écueils courants."
    }
  ];

  const expertiseAreas = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Intelligence Artificielle",
      description: "Maîtrise des modèles multimodaux (GPT-4, Claude 3, DALL-E, Midjourney), des LLMs, techniques de prompt engineering et systèmes d'IA génératifs."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Développement",
      description: "Expertise en Python, JavaScript/React, automatisation, intégration d'APIs, et développement d'applications web et desktop."
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Data & Analytics",
      description: "Connaissance approfondie des outils d'analyse de données, visualisation, et techniques d'extraction d'insights à partir de données brutes."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Créativité Tech",
      description: "Maîtrise des outils de création assistée par IA pour le graphisme, le contenu rédactionnel, l'audio et la vidéo."
    }
  ];

  const processes = [
    {
      number: "01",
      title: "Diagnostic Initial",
      description: "Échange approfondi pour comprendre vos besoins, défis et objectifs spécifiques afin de cibler parfaitement mon intervention."
    },
    {
      number: "02",
      title: "Analyse & Recherche",
      description: "Étude détaillée de votre situation et exploration des solutions adaptées, avec benchmark des meilleures pratiques du secteur."
    },
    {
      number: "03",
      title: "Recommandations",
      description: "Présentation de recommandations claires et actionnables, avec priorisation des actions selon leur impact et leur faisabilité."
    },
    {
      number: "04",
      title: "Implémentation & Suivi",
      description: "Accompagnement dans la mise en œuvre des recommandations et suivi régulier pour garantir des résultats concrets."
    }
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
      {/* Hero section - Modernisée pour être cohérente avec la page d'accueil */}
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
                className="animate-fade-up [animation-delay:200ms]"
              >
                <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full text-sm font-medium">
                  Expertise & Accompagnement - Strasbourg
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Conseil<br /><span className="text-gradient">Technologique</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Bénéficiez d'un accompagnement expert pour naviguer dans l'écosystème technologique et tirer le meilleur parti de l'IA et des innovations digitales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:400ms]">
                  <Button size="lg" asChild className="group">
                    <Link to="/contact" className="flex items-center gap-2">
                      Prendre rendez-vous
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/portfolio?filter=consulting">Voir mes interventions</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:w-1/2 animate-fade-up [animation-delay:600ms]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/60 rounded-lg blur opacity-30"></div>
                <div className="relative bg-card rounded-lg p-2 shadow-xl">
                  <img 
                    src="/images/services/conseil_technologique.jpg" 
                    alt="Conseil technologique" 
                    className="w-full h-auto rounded"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent/10 backdrop-blur-sm border border-accent/20 p-4 rounded-lg shadow-lg">
                  <Lightbulb className="h-12 w-12 text-accent" />
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
            title="Mes Services de Conseil"
            subtitle="Un accompagnement personnalisé pour répondre à vos défis technologiques"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-card border rounded-lg p-8 hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
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

      {/* Expertise section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <SectionTitle
            title="Domaines d'Expertise"
            subtitle="Mon parcours diversifié me permet de vous conseiller dans de multiples domaines tech"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {expertiseAreas.map((area, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-card border rounded-lg p-8 hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="p-3 bg-accent/10 rounded-full w-fit mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionTitle
            title="Ma Méthodologie de Conseil"
            subtitle="Une approche structurée pour des résultats concrets et durables"
            centered
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card border hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-accent/80 mb-4">
                      {process.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About me section - Style modernisé */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/70 to-accent/40 rounded-lg blur opacity-30"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl border">
                  <img 
                    src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Geoffroy Streit" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
            
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Geoffroy Streit
              </h2>
              <p className="text-lg">
                Ancien ingénieur en sciences de l'industrie spécialisé en Optonique, Électronique et Informatique Industrielle, j'ai acquis plus de 15 ans d'expérience dans le commerce avant de me reconvertir dans le développement web/desktop, la data science et le machine learning.
              </p>
              <p className="text-lg">
                Cette double expertise technique et commerciale me permet d'avoir une vision à 360° de vos projets et de vous proposer des solutions pragmatiques qui allient innovation technologique et réalité business.
              </p>
              <p className="text-lg">
                Passionné par les nouvelles technologies et l'IA, je me forme continuellement pour rester à la pointe et vous faire bénéficier des dernières avancées dans ces domaines en pleine évolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Pourquoi Choisir Mes Conseils ?
              </h2>
              
              <div className="space-y-4">
                {[
                  "Vision multidisciplinaire alliant technique et business",
                  "Approche pragmatique centrée sur vos besoins spécifiques",
                  "Veille technologique constante sur les innovations IA et tech",
                  "Pédagogie adaptée pour rendre complexe accessible",
                  "Recommandations actionnables avec résultats mesurables"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-accent/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              
              <Button asChild className="group">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Prendre rendez-vous
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              <StatCard value="+50" label="clients conseillés" />
              <StatCard value="+30%" label="d'efficacité moyenne gagnée" />
              <StatCard value="+15" label="années d'expertise technique" />
              <StatCard value="100%" label="de recommandations actionnables" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Prêt à transformer votre approche technologique ?
            </h2>
            <p className="text-accent-foreground/80 text-lg">
              Contactez-moi dès aujourd'hui pour discuter de vos besoins et bénéficier d'un premier échange gratuit.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-accent hover:bg-white/90 border-white" asChild>
              <Link to="/contact">Prendre rendez-vous</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consulting;
