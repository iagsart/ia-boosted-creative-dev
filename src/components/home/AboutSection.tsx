import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Qui suis-je ?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Passionné par la technologie et l'innovation, j'aide les entreprises et les individus à naviguer dans le monde complexe de l'IA et du numérique.
              </p>
              <p>
                Avec plus de 15 ans d'expérience dans l'industrie, j'ai développé une expertise pointue dans des domaines variés tels que l'optronique, l'électronique, le traitement du signal et le développement web.
              </p>
              <p>
                Aujourd'hui, je mets mes compétences au service de vos projets, en vous proposant des solutions sur mesure, innovantes et adaptées à vos besoins spécifiques.
              </p>
            </div>
            <Button asChild>
              <Link to="/about" className="inline-flex items-center gap-2">
                En savoir plus <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/images/geoffroy-profile.jpg"
              alt="Geoffroy Streit"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
          <img
                  src="/images/services/competences_et_valeurs.svg"
                  alt="Compétences et valeurs"
                  className="w-full h-auto rounded-lg shadow-lg"
          />
      </motion.div>
    </section>
  );
};

export default AboutSection;
