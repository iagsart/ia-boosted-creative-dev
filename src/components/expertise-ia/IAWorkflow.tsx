
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Layers, ArrowRight, Code, Database, BarChart, PieChart, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const workflowSteps = [
  {
    id: 1,
    icon: <Database className="h-6 w-6 text-blue-500" />,
    title: "Acquisition et préparation des données",
    description: "Collecte, nettoyage et structuration des données pour alimenter les modèles d'IA.",
    details: "Cette phase cruciale représente souvent jusqu'à 70% du temps d'un projet d'IA. Nos experts utilisent des techniques avancées d'ETL (Extract, Transform, Load), d'enrichissement de données et de validation pour garantir des données de qualité.",
    color: "border-blue-500/30 bg-blue-500/5"
  },
  {
    id: 2,
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    title: "Conception et entraînement du modèle",
    description: "Sélection et entraînement des algorithmes d'IA adaptés à votre problématique spécifique.",
    details: "Nous utilisons les dernières avancées en apprentissage automatique (machine learning) et apprentissage profond (deep learning) pour créer des modèles performants. L'entraînement est réalisé sur des infrastructures scalables adaptées à la complexité du problème.",
    color: "border-purple-500/30 bg-purple-500/5"
  },
  {
    id: 3,
    icon: <Settings className="h-6 w-6 text-green-500" />,
    title: "Évaluation et optimisation",
    description: "Test rigoureux des performances et ajustement des modèles pour maximiser leur efficacité.",
    details: "Nos protocoles d'évaluation comprennent des métriques adaptées à chaque type de problème. L'optimisation fine des hyperparamètres et l'analyse des erreurs permettent d'améliorer continuellement la performance des modèles.",
    color: "border-green-500/30 bg-green-500/5"
  },
  {
    id: 4,
    icon: <Code className="h-6 w-6 text-amber-500" />,
    title: "Déploiement et intégration",
    description: "Mise en production sécurisée et intégration des solutions IA dans votre infrastructure existante.",
    details: "Nous utilisons des approches MLOps modernes pour industrialiser le déploiement des modèles. L'intégration est réalisée via des API robustes, des microservices ou des architectures serverless selon vos besoins.",
    color: "border-amber-500/30 bg-amber-500/5"
  },
  {
    id: 5,
    icon: <BarChart className="h-6 w-6 text-red-500" />,
    title: "Monitoring et maintenance",
    description: "Surveillance continue des performances et mise à jour régulière pour garantir des résultats optimaux.",
    details: "Nos systèmes de surveillance détectent automatiquement les dérives de modèles et les anomalies de performance. Des mises à jour régulières et des réentraînements permettent de maintenir et d'améliorer la valeur ajoutée de la solution.",
    color: "border-red-500/30 bg-red-500/5"
  },
];

const IAWorkflow = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNextStep = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const nextStep = activeStep < workflowSteps.length ? activeStep + 1 : 1;
    setTimeout(() => {
      setActiveStep(nextStep);
      setIsAnimating(false);
    }, 500);
  };

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
    <section className="py-16 lg:py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      
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
              Méthodologie
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Comment nous développons des solutions IA
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground">
            Une approche structurée pour des résultats concrets et mesurables
          </motion.p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Connector line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hidden lg:block opacity-30 rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {workflowSteps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <motion.div 
                  className={`h-24 w-24 rounded-full flex items-center justify-center border-4 relative z-10 cursor-pointer transition-all duration-300 ${
                    activeStep === step.id 
                      ? `${step.color} border-2 shadow-lg scale-110` 
                      : 'bg-muted border-muted'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                  whileHover={{ scale: 1.05 }}
                  animate={{ 
                    scale: activeStep === step.id ? 1.1 : 1,
                    opacity: activeStep === step.id ? 1 : 0.7
                  }}
                >
                  {activeStep === step.id ? step.icon : <span className="text-xl font-bold">{step.id}</span>}
                </motion.div>
                <h3 className={`mt-4 text-center font-medium text-sm ${
                  activeStep === step.id ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.5 }
            }}
            key={activeStep}
          >
            <Card className={`border-2 ${workflowSteps[activeStep - 1].color}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-full ${workflowSteps[activeStep - 1].color}`}>
                    {workflowSteps[activeStep - 1].icon}
                  </div>
                  <div>
                    <CardTitle>Étape {activeStep}: {workflowSteps[activeStep - 1].title}</CardTitle>
                    <CardDescription className="mt-1">{workflowSteps[activeStep - 1].description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{workflowSteps[activeStep - 1].details}</p>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8">
              <Button 
                onClick={handleNextStep} 
                variant="outline" 
                className="rounded-full gap-2"
                disabled={isAnimating}
              >
                {activeStep === workflowSteps.length ? "Recommencer au début" : "Étape suivante"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IAWorkflow;
