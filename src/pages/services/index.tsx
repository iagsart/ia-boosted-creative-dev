
import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import ServicesGrid from "@/components/services/ServicesGrid";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesIndex = () => {
  return (
    <Layout>
      <section className="relative py-16 md:py-24">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background -z-10"></div>
        
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-gradient">Mes Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Je propose une gamme de services centrés sur l'humain, où la technologie est un outil au service de vos projets et de votre créativité.
            </p>
          </motion.div>
          
          <ServicesGrid showTitle={false} />
          
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link to="/contact" className="group">
                Discuter de votre projet
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesIndex;
