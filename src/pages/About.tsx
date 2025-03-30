
import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code, Brain, Palette } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { 
      icon: <Brain className="h-6 w-6 text-accent" />, 
      title: "Intelligence Artificielle",
      description: "Solides connaissances en prompting et intégration d'IA dans les workflows créatifs et techniques."
    },
    { 
      icon: <Palette className="h-6 w-6 text-accent" />, 
      title: "Créativité & Communication",
      description: "Capacité à générer des idées originales et à communiquer efficacement des concepts complexes."
    },
    { 
      icon: <Code className="h-6 w-6 text-accent" />, 
      title: "Notions Techniques",
      description: "Connaissances de base en développement web, bases de données et architecture logicielle, complétées par l'IA."
    },
    { 
      icon: <Lightbulb className="h-6 w-6 text-accent" />, 
      title: "Analyse & Adaptabilité",
      description: "Compréhension rapide des besoins, raisonnement arborescent et adaptabilité face aux nouveaux défis."
    }
  ];

  const experiences = [
    {
      period: "Présent",
      title: "Consultant Indépendant en IA & Créativité",
      company: "HumanAI Conseil",
      description: "Accompagnement de clients dans leurs projets digitaux avec une approche centrée sur l'humain et assistée par l'IA pour compenser mes limitations techniques et optimiser les résultats."
    },
    {
      period: "Parcours",
      title: "Autodidacte en Développement et IA",
      company: "",
      description: "Apprentissage continu des technologies web et d'IA, exploration des possibilités du No-Code/Low-Code et développement d'une expertise en prompting et intégration d'IA."
    },
    {
      period: "Background",
      title: "Expériences Variées",
      company: "Divers secteurs",
      description: "Parcours multidisciplinaire combinant des expériences dans les domaines technique, commercial et artistique, formant une base polyvalente pour aborder des projets divers."
    }
  ];

  const philosophie = [
    {
      title: "L'humain d'abord",
      description: "Je crois que la technologie doit servir l'humain et non l'inverse. Mon approche place toujours la dimension humaine au centre de chaque projet."
    },
    {
      title: "IA comme partenaire",
      description: "J'utilise l'IA comme un amplificateur de mes propres capacités, compensant mes limites techniques tout en préservant ma créativité et mon jugement humain."
    },
    {
      title: "Apprentissage permanent",
      description: "Je m'engage dans un processus d'apprentissage continu, m'adaptant aux nouvelles technologies et méthodologies au gré des projets."
    },
    {
      title: "Open Source et indépendance",
      description: "Je privilégie les solutions open source et l'indépendance vis-à-vis des grands fournisseurs technologiques, pour des solutions plus flexibles et éthiques."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">À propos de moi</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Consultant créatif et facilitateur IA, je combine la sensibilité humaine avec les possibilités de l'intelligence artificielle.
              </p>
              <p className="text-muted-foreground">
                Mon parcours pluridisciplinaire m'a doté d'une capacité à comprendre divers domaines sans nécessairement en être expert. C'est précisément cette polyvalence, combinée à ma maîtrise croissante des outils d'IA, qui me permet de m'adapter à vos besoins spécifiques et de trouver des solutions créatives à vos défis.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-accent/10 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Portrait du développeur" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg border shadow-lg">
                <p className="font-semibold">Human-Centric AI</p>
                <p className="text-sm text-muted-foreground">Ma philosophie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionTitle 
            title="Mes compétences" 
            subtitle="Un mélange de qualités humaines et de connaissances techniques, augmentées par l'IA"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full hover:shadow-md transition-all">
                  <CardContent className="pt-6">
                    <div className="mb-4 p-2 inline-flex rounded-md bg-accent/10">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="p-6 bg-secondary/20 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Mon approche des compétences techniques</h3>
              <p className="text-muted-foreground">
                Je possède des connaissances intermédiaires (2-3/5) dans plusieurs domaines techniques comme React, Node.js, PostgreSQL, et Docker, sans être expert dans aucun d'eux. 
                Ce qui me distingue est ma capacité à utiliser l'IA comme partenaire pour compléter ces connaissances, en apprenant rapidement ce dont j'ai besoin pour chaque projet spécifique.
                Je continue d'apprendre chaque jour, me spécialisant progressivement dans les solutions No-Code et Low-Code qui me permettent de créer sans être limité par mes connaissances techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionTitle 
            title="Mon parcours" 
            subtitle="Une trajectoire d'apprentissage continu et d'adaptabilité"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Mon cheminement</h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-accent pl-6 relative"
                  >
                    <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-2"></div>
                    <p className="text-sm text-accent font-medium">{exp.period}</p>
                    <h4 className="text-xl font-semibold mt-1">{exp.title}</h4>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="mt-2">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Mes atouts humains</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                  <div>
                    <p className="font-medium">Écoute active et empathie</p>
                    <p className="text-sm text-muted-foreground">Compréhension profonde des besoins et attentes des clients.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                  <div>
                    <p className="font-medium">Raisonnement arborescent</p>
                    <p className="text-sm text-muted-foreground">Capacité à explorer différentes solutions et perspectives pour chaque problème.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                  <div>
                    <p className="font-medium">Créativité et idéation</p>
                    <p className="text-sm text-muted-foreground">Génération d'idées originales et approche innovante des défis.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                  <div>
                    <p className="font-medium">Communication claire</p>
                    <p className="text-sm text-muted-foreground">Traduction de concepts complexes en idées accessibles et convaincantes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                  <div>
                    <p className="font-medium">Apprentissage rapide</p>
                    <p className="text-sm text-muted-foreground">Acquisition efficace de nouvelles connaissances selon les besoins du projet.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Domaines d'intérêt</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                    <div>
                      <p className="font-medium">Intelligence artificielle générative</p>
                      <p className="text-sm text-muted-foreground">Exploration des possibilités créatives et pratiques des LLM et outils IA.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                    <div>
                      <p className="font-medium">Développement No-Code et Low-Code</p>
                      <p className="text-sm text-muted-foreground">Solutions de développement accessibles et adaptables.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                    <div>
                      <p className="font-medium">Open Source et éthique technologique</p>
                      <p className="text-sm text-muted-foreground">Promotion de solutions respectueuses des utilisateurs et indépendantes.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Ma philosophie" 
              subtitle="Human-Centric AI : la technologie au service de l'humain"
              centered
            />
            
            <p className="text-lg mb-6">
              Je crois fermement que la technologie doit rester un outil au service de l'humain, et non l'inverse. Cette conviction guide chacune de mes décisions et interventions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {philosophie.map((item, index) => (
                <div key={index} className="p-6 bg-secondary/20 rounded-lg text-left">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
