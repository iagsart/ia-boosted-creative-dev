
import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code, Brain, Palette } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { 
      icon: <Code className="h-6 w-6 text-accent" />, 
      title: "Développement Web",
      description: "Expert en React, TypeScript et Node.js pour créer des applications web modernes et performantes."
    },
    { 
      icon: <Brain className="h-6 w-6 text-accent" />, 
      title: "Intelligence Artificielle",
      description: "Intégration d'APIs IA, fine-tuning de modèles et développement de solutions IA personnalisées."
    },
    { 
      icon: <Palette className="h-6 w-6 text-accent" />, 
      title: "Design UX/UI",
      description: "Création d'interfaces utilisateur intuitives et esthétiques avec Figma et les derniers frameworks CSS."
    },
    { 
      icon: <Lightbulb className="h-6 w-6 text-accent" />, 
      title: "Conseil Tech",
      description: "Accompagnement stratégique pour vous aider à choisir les meilleures technologies pour vos projets."
    }
  ];

  const experiences = [
    {
      period: "2018 - Présent",
      title: "Freelance Développeur Web & IA",
      company: "Tech Innovate",
      description: "Conception et développement d'applications web et solutions IA pour divers clients, des startups aux grandes entreprises."
    },
    {
      period: "2015 - 2018",
      title: "Lead Developer",
      company: "Digital Solutions",
      description: "Direction technique d'une équipe de développeurs, mise en place de bonnes pratiques et développement de projets web complexes."
    },
    {
      period: "2012 - 2015",
      title: "Développeur Full Stack",
      company: "WebTech Agency",
      description: "Développement de sites web et applications pour des clients variés, utilisant les dernières technologies front-end et back-end."
    }
  ];

  const education = [
    {
      year: "2012",
      degree: "Master en Informatique",
      school: "École Supérieure d'Informatique",
      description: "Spécialisation en développement d'applications et intelligence artificielle."
    },
    {
      year: "2010",
      degree: "Licence en Sciences Informatiques",
      school: "Université de Technologie",
      description: "Fondamentaux de la programmation, des algorithmes et des structures de données."
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
                Développeur Web et Consultant IA passionné par la création de solutions digitales innovantes et accessibles.
              </p>
              <p className="text-muted-foreground">
                Avec plus de 8 ans d'expérience dans le développement web et l'intelligence artificielle, je vous accompagne dans la réalisation de vos projets digitaux, de la conception à la livraison.
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
            subtitle="Une expertise technique diversifiée pour répondre à vos besoins"
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
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionTitle 
            title="Mon parcours" 
            subtitle="Mon expérience professionnelle et ma formation"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Expérience professionnelle</h3>
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
              <h3 className="text-2xl font-semibold mb-6">Formation</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-accent pl-6 relative"
                  >
                    <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-2"></div>
                    <p className="text-sm text-accent font-medium">{edu.year}</p>
                    <h4 className="text-xl font-semibold mt-1">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <p className="mt-2">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                    <div>
                      <p className="font-medium">AWS Certified Solutions Architect</p>
                      <p className="text-sm text-muted-foreground">Amazon Web Services, 2021</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                    <div>
                      <p className="font-medium">TensorFlow Developer Certificate</p>
                      <p className="text-sm text-muted-foreground">Google, 2020</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                    <div>
                      <p className="font-medium">Professional Scrum Master I</p>
                      <p className="text-sm text-muted-foreground">Scrum.org, 2019</p>
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
              Je crois fermement que la technologie doit rester un outil au service de l'humain. C'est pourquoi j'adopte une approche "Human-Centric AI" dans tous mes projets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-secondary/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Accessibilité</h3>
                <p className="text-muted-foreground">
                  Des solutions accessibles à tous, quelles que soient les compétences techniques.
                </p>
              </div>
              
              <div className="p-6 bg-secondary/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Éthique</h3>
                <p className="text-muted-foreground">
                  Une utilisation responsable et éthique de l'intelligence artificielle.
                </p>
              </div>
              
              <div className="p-6 bg-secondary/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Simplicité</h3>
                <p className="text-muted-foreground">
                  Des interfaces intuitives et des processus simplifiés pour une expérience optimale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
