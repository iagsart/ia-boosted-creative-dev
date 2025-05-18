
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, Zap, BarChart, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const IAHeroSection = () => {
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const handleShowDemo = () => {
    toast({
      title: "Démo en cours de développement",
      description: "Notre démonstration interactive sera disponible prochainement. Contactez-nous pour plus d'informations.",
      variant: "default",
    });
  };

  return (
    <section className="py-16 lg:py-24 overflow-hidden relative bg-gradient-to-b from-primary/5 via-background to-background">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0)_50%)]" />
      </motion.div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div 
            className="flex-1 space-y-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 px-3 py-1.5 text-sm font-medium inline-flex items-center gap-1.5">
                <Zap className="h-4 w-4" />
                <span>Innovation IA</span>
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-blue-500"
            >
              Solutions et Services IA
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-xl text-muted-foreground max-w-[600px] leading-relaxed"
            >
              Notre expertise en intelligence artificielle au service de votre transformation numérique
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-6 gap-2 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600">
                <Link to="/contact">
                  <span>Discuter de votre projet</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-6" onClick={handleShowDemo}>
                Voir une démo interactive
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Solutions personnalisées</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">IA éthique et responsable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Accompagnement sur mesure</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-2xl p-1 shadow-lg">
              <img 
                src="/images/expertise-ia.jpg"
                alt="Intelligence Artificielle"
                className="rounded-xl w-full object-cover h-[350px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl flex items-end p-8">
                <div>
                  <h3 className="text-white font-bold text-2xl mb-2">L'avenir est IA</h3>
                  <p className="text-white/90 max-w-[80%]">Découvrez comment l'intelligence artificielle peut transformer votre entreprise</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-background rounded-xl border shadow-lg p-4 hidden md:flex items-center gap-3">
              <Brain className="text-primary h-5 w-5" />
              <p className="font-medium">IA adaptative et évolutive</p>
            </div>
            
            <div className="absolute top-4 -left-8 bg-background rounded-full border shadow-lg p-3 hidden lg:flex items-center justify-center animate-bounce">
              <Bot className="text-blue-500 h-7 w-7" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IAHeroSection;
