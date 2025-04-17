
import React from 'react';
import { motion } from 'framer-motion';
import PortfolioProjectCard from './PortfolioProjectCard';

interface Project {
  title: string;
  category: string;
  subcategory: string;
  description: string;
  image: string;
  technologies: string[];
  client: string;
  year: string;
  link: string;
  featured?: boolean;
}

interface PortfolioGridProps {
  projects: Project[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <PortfolioProjectCard 
            key={project.title} 
            project={project} 
            index={index} 
            isFeatured={project.featured}
          />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground text-lg">Aucun projet ne correspond à votre recherche.</p>
        </div>
      )}
    </motion.div>
  );
};

export default PortfolioGrid;
