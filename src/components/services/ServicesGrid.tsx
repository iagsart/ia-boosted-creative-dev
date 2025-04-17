import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICE_IMAGES } from '@/data/constants';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  imageKey?: string;
}

interface ServicesGridProps {
  services: Service[];
  showTitle?: boolean; // Adding this optional prop
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services, showTitle = true }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {services.map((service, index) => {
        // Déterminer la clé d'image à utiliser
        const imageKey = service.imageKey || service.link.split('/').pop() || 'default';
        const imagePath = SERVICE_IMAGES[imageKey] || SERVICE_IMAGES.default;
        
        return (
          <motion.div 
            key={index}
            className="group bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border/30"
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={imagePath} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
              </div>
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-3 z-10">
                {service.icon}
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
              >
                En savoir plus
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ServicesGrid;
