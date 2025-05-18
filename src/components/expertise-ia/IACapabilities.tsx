
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, Bot, Database, Code, Zap, BarChart, CircuitBoard, Settings, Gauge } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

type CapabilityType = {
  icon: React.ReactNode;
  title: string;
  description: string;
  useCases: string[];
  maturityLevel: 1 | 2 | 3;
  color: string;
};

const capabilities: CapabilityType[] = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Intelligence Artificielle Générale',
    description: "Systèmes IA polyvalents capables de comprendre, d'apprendre et d'appliquer des connaissances à travers différents domaines et tâches.",
    useCases: ['Assistants virtuels', 'Systèmes de recommandation', 'Analyse prédictive'],
    maturityLevel: 2,
    color: 'from-violet-500/20 to-purple-500/20'
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Traitement du Langage Naturel',
    description: "Technologies permettant aux ordinateurs de comprendre, interpréter et générer du langage humain de manière contextuelle et nuancée.",
    useCases: ['Analyse de sentiment', 'Chatbots', 'Résumé de texte'],
    maturityLevel: 3,
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'Systèmes Conversationnels',
    description: "Interfaces d'échange par dialogue permettant des interactions naturelles entre humains et machines.",
    useCases: ['Service client automatisé', 'Assistance virtuelle', 'Formation interactive'],
    maturityLevel: 3,
    color: 'from-teal-500/20 to-emerald-500/20'
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Analyse Prédictive',
    description: "Utilisation de l'IA pour analyser les données historiques et prédire les tendances et comportements futurs.",
    useCases: ['Prévisions commerciales', 'Maintenance prédictive', 'Détection de fraude'],
    maturityLevel: 3,
    color: 'from-amber-500/20 to-yellow-500/20'
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'IA Générative',
    description: "Systèmes créant automatiquement du contenu original : textes, images, audio, vidéo à partir de consignes et d'exemples.",
    useCases: ['Création de contenu', 'Design assisté', 'Prototypage rapide'],
    maturityLevel: 2,
    color: 'from-red-500/20 to-orange-500/20'
  },
  {
    icon: <CircuitBoard className="h-6 w-6" />,
    title: 'Edge AI',
    description: "Déploiement de l'IA sur des appareils en périphérie du réseau, permettant un traitement local et en temps réel.",
    useCases: ['IoT intelligent', 'Appareils autonomes', 'Analyse vidéo en temps réel'],
    maturityLevel: 1,
    color: 'from-sky-500/20 to-indigo-500/20'
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Automatisation Intelligente',
    description: "Combinaison de l'IA avec l'automatisation pour optimiser les processus métier et réduire les interventions humaines.",
    useCases: ['Workflows intelligents', 'RPA avancé', 'Optimisation de processus'],
    maturityLevel: 2,
    color: 'from-pink-500/20 to-rose-500/20'
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "IA explicable (XAI)",
    description: "Méthodologies et techniques permettant de comprendre et d'interpréter les décisions prises par les modèles d'IA.",
    useCases: ['Audit IA', 'Conformité réglementaire', 'Prise de décision transparente'],
    maturityLevel: 1,
    color: 'from-green-500/20 to-lime-500/20'
  },
];

const MaturityIndicator = ({ level }: { level: 1 | 2 | 3 }) => {
  const labels = {
    1: 'Émergent',
    2: 'Établi',
    3: 'Mature'
  };

  const colors = {
    1: 'bg-amber-500',
    2: 'bg-blue-500',
    3: 'bg-green-500'
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className={`h-2 w-6 rounded-full ${i <= level ? colors[level as keyof typeof colors] : 'bg-gray-200'}`}
          />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">{labels[level]}</span>
    </div>
  );
};

const IACapabilities = () => {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-16 lg:py-20 relative bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-3 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
              Technologies clés
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Nos capacités en Intelligence Artificielle
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground">
            Une expertise complète pour répondre à vos défis spécifiques
          </motion.p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto py-2 mb-8">
            <TabsTrigger value="all">Toutes les technologies</TabsTrigger>
            <TabsTrigger value="mature">Technologies matures</TabsTrigger>
            <TabsTrigger value="emerging">Technologies émergentes</TabsTrigger>
            <TabsTrigger value="nlp">Traitement du langage</TabsTrigger>
            <TabsTrigger value="analytics">Analyse de données</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {capabilities.map((capability, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card 
                    className={`h-full overflow-hidden hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-primary/20 group`}
                    onClick={() => setSelectedCapability(capability.title === selectedCapability ? null : capability.title)}
                  >
                    <CardHeader className={`bg-gradient-to-br ${capability.color} pb-4`}>
                      <div className="flex justify-between items-start">
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2.5">
                          {capability.icon}
                        </div>
                        <MaturityIndicator level={capability.maturityLevel} />
                      </div>
                      <CardTitle className="mt-3">{capability.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-4">{capability.description}</p>
                      
                      <div className={`mt-4 transition-all duration-300 ${
                        capability.title === selectedCapability ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 hidden group-hover:block group-hover:opacity-50'
                      }`}>
                        <p className="font-medium mb-2">Cas d'usage :</p>
                        <ul className="space-y-1">
                          {capability.useCases.map((useCase, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-sm">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <p className={`text-sm text-primary mt-3 ${
                        capability.title === selectedCapability ? 'hidden' : 'inline-flex group-hover:hidden'
                      }`}>
                        Cliquez pour en savoir plus
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="mature">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities
                .filter(c => c.maturityLevel === 3)
                .map((capability, index) => (
                  <Card 
                    key={index}
                    className={`h-full overflow-hidden hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-primary/20 group`}
                    onClick={() => setSelectedCapability(capability.title === selectedCapability ? null : capability.title)}
                  >
                    <CardHeader className={`bg-gradient-to-br ${capability.color} pb-4`}>
                      <div className="flex justify-between items-start">
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2.5">
                          {capability.icon}
                        </div>
                        <MaturityIndicator level={capability.maturityLevel} />
                      </div>
                      <CardTitle className="mt-3">{capability.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-4">{capability.description}</p>
                      
                      <div className={`mt-4 transition-all duration-300 ${
                        capability.title === selectedCapability ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 hidden group-hover:block group-hover:opacity-50'
                      }`}>
                        <p className="font-medium mb-2">Cas d'usage :</p>
                        <ul className="space-y-1">
                          {capability.useCases.map((useCase, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-sm">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <p className={`text-sm text-primary mt-3 ${
                        capability.title === selectedCapability ? 'hidden' : 'inline-flex group-hover:hidden'
                      }`}>
                        Cliquez pour en savoir plus
                      </p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="emerging">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities
                .filter(c => c.maturityLevel === 1)
                .map((capability, index) => (
                  <Card 
                    key={index}
                    className={`h-full overflow-hidden hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-primary/20 group`}
                    onClick={() => setSelectedCapability(capability.title === selectedCapability ? null : capability.title)}
                  >
                    <CardHeader className={`bg-gradient-to-br ${capability.color} pb-4`}>
                      <div className="flex justify-between items-start">
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2.5">
                          {capability.icon}
                        </div>
                        <MaturityIndicator level={capability.maturityLevel} />
                      </div>
                      <CardTitle className="mt-3">{capability.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-4">{capability.description}</p>
                      
                      <div className={`mt-4 transition-all duration-300 ${
                        capability.title === selectedCapability ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 hidden group-hover:block group-hover:opacity-50'
                      }`}>
                        <p className="font-medium mb-2">Cas d'usage :</p>
                        <ul className="space-y-1">
                          {capability.useCases.map((useCase, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-sm">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <p className={`text-sm text-primary mt-3 ${
                        capability.title === selectedCapability ? 'hidden' : 'inline-flex group-hover:hidden'
                      }`}>
                        Cliquez pour en savoir plus
                      </p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nlp">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities
                .filter(c => 
                  c.title.includes('Langage') || 
                  c.title.includes('Conversationnel') || 
                  c.useCases.some(u => u.toLowerCase().includes('chatbot') || u.toLowerCase().includes('texte'))
                )
                .map((capability, index) => (
                  <Card 
                    key={index}
                    className={`h-full overflow-hidden hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-primary/20 group`}
                    onClick={() => setSelectedCapability(capability.title === selectedCapability ? null : capability.title)}
                  >
                    <CardHeader className={`bg-gradient-to-br ${capability.color} pb-4`}>
                      <div className="flex justify-between items-start">
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2.5">
                          {capability.icon}
                        </div>
                        <MaturityIndicator level={capability.maturityLevel} />
                      </div>
                      <CardTitle className="mt-3">{capability.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-4">{capability.description}</p>
                      
                      <div className={`mt-4 transition-all duration-300 ${
                        capability.title === selectedCapability ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 hidden group-hover:block group-hover:opacity-50'
                      }`}>
                        <p className="font-medium mb-2">Cas d'usage :</p>
                        <ul className="space-y-1">
                          {capability.useCases.map((useCase, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-sm">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <p className={`text-sm text-primary mt-3 ${
                        capability.title === selectedCapability ? 'hidden' : 'inline-flex group-hover:hidden'
                      }`}>
                        Cliquez pour en savoir plus
                      </p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities
                .filter(c => 
                  c.title.includes('Analyse') || 
                  c.title.includes('Prédictive') || 
                  c.useCases.some(u => u.toLowerCase().includes('donnée') || u.toLowerCase().includes('prévision'))
                )
                .map((capability, index) => (
                  <Card 
                    key={index}
                    className={`h-full overflow-hidden hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-primary/20 group`}
                    onClick={() => setSelectedCapability(capability.title === selectedCapability ? null : capability.title)}
                  >
                    <CardHeader className={`bg-gradient-to-br ${capability.color} pb-4`}>
                      <div className="flex justify-between items-start">
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2.5">
                          {capability.icon}
                        </div>
                        <MaturityIndicator level={capability.maturityLevel} />
                      </div>
                      <CardTitle className="mt-3">{capability.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-4">{capability.description}</p>
                      
                      <div className={`mt-4 transition-all duration-300 ${
                        capability.title === selectedCapability ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 hidden group-hover:block group-hover:opacity-50'
                      }`}>
                        <p className="font-medium mb-2">Cas d'usage :</p>
                        <ul className="space-y-1">
                          {capability.useCases.map((useCase, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-sm">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <p className={`text-sm text-primary mt-3 ${
                        capability.title === selectedCapability ? 'hidden' : 'inline-flex group-hover:hidden'
                      }`}>
                        Cliquez pour en savoir plus
                      </p>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default IACapabilities;
