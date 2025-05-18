
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Shield, Zap, Eye, Lock, Scale, AlertTriangle, AlignJustify } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const ethicsPrinciples = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Centrée sur l'humain",
    description: "L'IA doit être développée pour augmenter et compléter les capacités humaines, non pour les remplacer.",
    color: "border-primary/30 bg-primary/5"
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-500" />,
    title: "Sécurité et robustesse",
    description: "Les systèmes d'IA doivent être sécurisés et résistants aux attaques et aux manipulations.",
    color: "border-blue-500/30 bg-blue-500/5"
  },
  {
    icon: <Eye className="h-6 w-6 text-green-500" />,
    title: "Transparence",
    description: "Les décisions prises par l'IA doivent être explicables et compréhensibles par les utilisateurs.",
    color: "border-green-500/30 bg-green-500/5"
  },
  {
    icon: <Lock className="h-6 w-6 text-amber-500" />,
    title: "Respect de la vie privée",
    description: "Les données personnelles doivent être protégées avec les plus hauts standards de confidentialité.",
    color: "border-amber-500/30 bg-amber-500/5"
  },
  {
    icon: <Scale className="h-6 w-6 text-red-500" />,
    title: "Équité et inclusion",
    description: "Les systèmes d'IA doivent être conçus pour être équitables et ne pas perpétuer les discriminations.",
    color: "border-red-500/30 bg-red-500/5"
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-orange-500" />,
    title: "Responsabilité",
    description: "Les concepteurs et opérateurs d'IA doivent être responsables des conséquences de leurs systèmes.",
    color: "border-orange-500/30 bg-orange-500/5"
  }
];

const IAEthics = () => {
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
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <Badge variant="outline" className="mb-3 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
              IA éthique
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Notre engagement pour une IA responsable
            </h2>
            <p className="text-xl text-muted-foreground">
              Nous développons des solutions d'IA qui respectent les plus hauts standards éthiques
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicsPrinciples.map((principle, index) => (
              <Card key={index} className={`border-2 ${principle.color} h-full`}>
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className={`p-3 rounded-full ${principle.color} w-fit mb-4`}>
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground text-sm">{principle.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="border border-primary/20 bg-primary/5">
              <CardContent className="py-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 bg-background rounded-full shrink-0">
                    <AlignJustify className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Notre charte IA responsable</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <p className="text-sm">Nous évaluons systématiquement les impacts éthiques de nos systèmes d'IA avant leur déploiement.</p>
                      </div>
                      
                      <Separator className="my-2 bg-primary/10" />
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <p className="text-sm">Nous testons nos modèles pour détecter et réduire les biais potentiels afin de garantir des résultats équitables.</p>
                      </div>
                      
                      <Separator className="my-2 bg-primary/10" />
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <p className="text-sm">Nous documentons clairement les limites et les capacités de nos systèmes d'IA pour éviter toute utilisation inappropriée.</p>
                      </div>
                      
                      <Separator className="my-2 bg-primary/10" />
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <p className="text-sm">Nous privilégions des approches d'IA explicable qui permettent de comprendre les décisions algorithmiques.</p>
                      </div>
                      
                      <Separator className="my-2 bg-primary/10" />
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <p className="text-sm">Nous mettons en œuvre des mesures robustes de protection des données et de cybersécurité dans tous nos projets.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IAEthics;
