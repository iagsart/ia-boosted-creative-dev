
import React from 'react';
import Layout from "@/components/layout/Layout";
import IAHeroSection from '@/components/expertise-ia/IAHeroSection';
import IACapabilities from '@/components/expertise-ia/IACapabilities';
import IAWorkflow from '@/components/expertise-ia/IAWorkflow';
import IAInteractiveDemo from '@/components/expertise-ia/IAInteractiveDemo';
import IAEthics from '@/components/expertise-ia/IAEthics';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ExpertiseIA = () => {
  return (
    <Layout>
      <IAHeroSection />
      
      <IACapabilities />
      
      <IAWorkflow />
      
      <IAInteractiveDemo />
      
      <IAEthics />
      
      {/* Call to Action */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Prêt à explorer le potentiel de l'IA pour votre organisation ?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et découvrir comment nos solutions d'intelligence artificielle peuvent répondre à vos défis spécifiques.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600">
                <Link to="/contact">Contactez-nous</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                <Link to="/services">
                  Explorer nos autres services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 text-background opacity-20">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>
    </Layout>
  );
};

export default ExpertiseIA;
