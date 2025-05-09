
import React from 'react';
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  Smartphone,
  Briefcase,
  Clock,
  DollarSign,
  Users,
  ArrowRightCircle,
  BarChart2,
  Zap,
  Code,
  Building,
  Handshake,
  Laptop,
  Lightbulb,
  FileText,
  Layers 
} from "lucide-react";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const NoCode = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Plateforme No-Code
  const noCodingPlatforms = [
    {
      name: "Bubble.io",
      description: "Créez des applications web complexes sans écrire de code. Interface visuelle puissante et flexible.",
      icon: <Code className="h-6 w-6 text-[#6366F1]" />,
      useCases: ["Applications complexes", "SaaS", "Portails clients"],
      color: "bg-gradient-to-br from-[#6366F1]/20 to-[#4338CA]/20"
    },
    {
      name: "Webflow",
      description: "Créez des sites web professionnels avec un CMS puissant. Design et animations de qualité.",
      icon: <Layers className="h-6 w-6 text-[#38BDF8]" />,
      useCases: ["Sites vitrines", "Portfolios", "Blog d'entreprise"],
      color: "bg-gradient-to-br from-[#38BDF8]/20 to-[#0284C7]/20"
    },
    {
      name: "Glide",
      description: "Transforme des feuilles de calcul en applications mobiles ou web en quelques minutes.",
      icon: <Smartphone className="h-6 w-6 text-[#D6BCFA]" />,
      useCases: ["Applications internes", "Catalogues produits", "Outils de terrain"],
      color: "bg-gradient-to-br from-[#D6BCFA]/20 to-[#9b87f5]/20"
    },
    {
      name: "Airtable",
      description: "Plus qu'une base de données, une plateforme pour construire des applications et workflows.",
      icon: <Database className="h-6 w-6 text-[#34D399]" />,
      useCases: ["CRM", "Gestion de projet", "Inventaire"],
      color: "bg-gradient-to-br from-[#34D399]/20 to-[#059669]/20"
    },
    {
      name: "AppSheet",
      description: "Créez des applications à partir de sources de données comme Google Sheets ou Excel.",
      icon: <FileText className="h-6 w-6 text-[#FB923C]" />,
      useCases: ["Applications mobiles", "Formulaires", "Suivi de données"],
      color: "bg-gradient-to-br from-[#FB923C]/20 to-[#EA580C]/20"
    },
    {
      name: "Stacker",
      description: "Créez des portails clients et des outils internes basés sur vos données existantes.",
      icon: <Building className="h-6 w-6 text-[#F472B6]" />,
      useCases: ["Portails clients", "Tableaux de bord", "Outils internes"],
      color: "bg-gradient-to-br from-[#F472B6]/20 to-[#DB2777]/20"
    }
  ];

  // Avantages du No-Code
  const advantages = [
    {
      title: "Rapidité de développement",
      description: "Réduisez le temps de développement de plusieurs mois à quelques semaines, voire quelques jours.",
      icon: <Clock />
    },
    {
      title: "Réduction des coûts",
      description: "Économisez sur les coûts de développement et de maintenance des solutions logicielles.",
      icon: <DollarSign />
    },
    {
      title: "Accessibilité",
      description: "Permettez à des non-développeurs de créer leurs propres outils et applications.",
      icon: <Users />
    },
    {
      title: "Agilité",
      description: "Adaptez rapidement vos applications aux besoins changeants du marché ou de l'entreprise.",
      icon: <Zap />
    },
    {
      title: "Productivité accrue",
      description: "Automatisez les tâches répétitives et concentrez-vous sur les aspects à forte valeur ajoutée.",
      icon: <BarChart2 />
    },
    {
      title: "Collaboration améliorée",
      description: "Facilitez la compréhension et la collaboration entre les équipes techniques et métiers.",
      icon: <Handshake />
    }
  ];

  // Cas d'usage par secteur
  const useCases = [
    {
      sector: "PME",
      title: "Digitalisation et automatisation",
      description: "Transformez vos processus papier en workflows numériques. Créez des outils internes sans dépendre d'une équipe technique complète.",
      examples: [
        "Application de suivi des interventions terrain",
        "CRM sur mesure adapté à votre activité",
        "Portail client avec gestion de projets"
      ],
      icon: <Building className="h-8 w-8" />
    },
    {
      sector: "Grandes entreprises",
      title: "Innovation et efficacité opérationnelle",
      description: "Réduisez le shadow IT et donnez aux départements les moyens de créer leurs propres outils, tout en gardant le contrôle sur la sécurité et la gouvernance.",
      examples: [
        "Tableaux de bord pour le suivi des KPIs",
        "Applications pour optimiser la logistique",
        "Portails de collaboration inter-départements"
      ],
      icon: <Briefcase className="h-8 w-8" />
    },
    {
      sector: "Startups",
      title: "MVP et itération rapide",
      description: "Lancez votre produit plus rapidement sur le marché et itérez en fonction des retours utilisateurs sans investissement massif en développement.",
      examples: [
        "Première version fonctionnelle de votre plateforme",
        "Tests A/B de différentes fonctionnalités",
        "Validation de votre concept avant investissement lourd"
      ],
      icon: <Lightbulb className="h-8 w-8" />
    },
    {
      sector: "Freelances",
      title: "Élargissement des services",
      description: "Proposez à vos clients des solutions complètes sans avoir à maîtriser toutes les technologies de développement.",
      examples: [
        "Création de sites web dynamiques",
        "Applications métier pour vos clients",
        "Dashboards et outils de reporting"
      ],
      icon: <Laptop className="h-8 w-8" />
    }
  ];

  // Schéma de projet typique
  const projectSteps = [
    {
      step: 1,
      title: "Analyse des besoins",
      description: "Nous identifions ensemble vos objectifs, contraintes et exigences spécifiques."
    },
    {
      step: 2,
      title: "Choix de la plateforme",
      description: "Nous sélectionnons la solution No-Code/Low-Code la plus adaptée à votre projet."
    },
    {
      step: 3,
      title: "Prototype rapide",
      description: "Nous développons un premier prototype fonctionnel en quelques jours pour validation."
    },
    {
      step: 4,
      title: "Itération et affinage",
      description: "Nous affinons la solution en fonction de vos retours et ajoutons les fonctionnalités."
    },
    {
      step: 5,
      title: "Formation",
      description: "Nous vous formons à l'utilisation et à la maintenance de votre application."
    },
    {
      step: 6,
      title: "Déploiement et support",
      description: "Nous déployons la solution et assurons un support technique continu."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-4"
              >
                <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
                  Innovation sans code
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Solutions <span className="text-primary">No-Code</span> et <span className="text-primary">Low-Code</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-[600px]"
              >
                Développez vos applications d'entreprise jusqu'à 10 fois plus rapidement et à une fraction du coût, sans compromettre la qualité ou l'évolutivité.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg">
                  <Link to="/contact">Démarrer un projet</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/portfolio">Voir nos réalisations</Link>
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 relative"
            >
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-1 shadow-lg">
                <img 
                  src="/images/services/services_de_developpement.svg"
                  alt="No-Code / Low-Code Development"
                  className="rounded-xl w-full"
                />
                <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-center p-6">
                    <h3 className="text-white font-bold text-2xl mb-2">Créez sans coder</h3>
                    <p className="text-white/90">Transformez vos idées en applications fonctionnelles</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg border shadow-lg p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <Zap className="text-primary h-5 w-5" />
                  <p className="font-medium">Développement 10x plus rapide</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avantages No-Code / Low-Code */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Pourquoi choisir le No-Code / Low-Code ?
            </h2>
            <p className="text-muted-foreground text-lg">
              Les plateformes No-Code et Low-Code révolutionnent la façon dont les entreprises créent leurs solutions digitales
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {advantages.map((advantage, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-background rounded-xl border p-6 shadow-sm flex flex-col h-full"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {React.cloneElement(advantage.icon, { className: "h-6 w-6 text-primary" })}
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground flex-grow">{advantage.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plateformes No-Code / Low-Code */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Plateformes No-Code que nous maîtrisons
            </h2>
            <p className="text-muted-foreground text-lg">
              Nous utilisons les outils les plus puissants et flexibles du marché pour créer vos applications sur mesure
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {noCodingPlatforms.map((platform, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`rounded-xl p-6 border shadow-sm h-full ${platform.color}`}
              >
                <div className="mb-4">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-muted-foreground mb-4">{platform.description}</p>
                <div className="mt-auto">
                  <p className="font-medium text-sm mb-2">Cas d'usage:</p>
                  <div className="flex flex-wrap gap-2">
                    {platform.useCases.map((useCase, i) => (
                      <span key={i} className="bg-background/80 text-xs rounded-full px-3 py-1">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cas d'usage par secteur */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Solutions adaptées à votre secteur
            </h2>
            <p className="text-muted-foreground text-lg">
              Découvrez comment le No-Code et le Low-Code peuvent transformer votre activité
            </p>
          </div>

          <Tabs defaultValue={useCases[0].sector} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
              {useCases.map((useCase, index) => (
                <TabsTrigger key={index} value={useCase.sector} className="text-center">
                  <div className="flex flex-col items-center gap-2">
                    {useCase.icon}
                    <span>{useCase.sector}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {useCases.map((useCase, index) => (
              <TabsContent key={index} value={useCase.sector} className="pt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                        <p className="text-muted-foreground mb-6">{useCase.description}</p>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Applications populaires:</h4>
                          <ul className="space-y-3">
                            {useCase.examples.map((example, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <ArrowRightCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-muted/30 rounded-lg p-6">
                        <img 
                          src={index % 2 === 0 ? "/images/services/solutions_ia.svg" : "/images/services/services_creatifs.svg"}
                          alt={`${useCase.sector} solutions`}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Notre approche de projet
            </h2>
            <p className="text-muted-foreground text-lg">
              Un processus simple et efficace pour concrétiser rapidement vos idées
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {/* Timeline steps */}
            <div className="space-y-12">
              {projectSteps.map((step, index) => (
                <div key={index} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row gap-8 items-center ${
                      index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                      <span className="text-primary-foreground font-bold text-sm">
                        {step.step}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 !== 0 ? 'md:pr-12 text-left' : 'md:pl-12 text-left md:text-right'
                    }`}
                    >
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>

                    {/* Spacer for alignment on mobile */}
                    <div className="md:w-1/2 hidden md:block"></div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Prêt à créer votre solution sans code ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transformez vos idées en applications fonctionnelles en quelques semaines au lieu de plusieurs mois.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Discuter de mon projet</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">Explorer nos réalisations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NoCode;

// Ajout d'icônes manquantes dans un composant séparé
const Database = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);
