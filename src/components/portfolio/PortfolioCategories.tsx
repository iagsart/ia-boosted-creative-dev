
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/theme-provider';

interface PortfolioCategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const PortfolioCategories = ({ categories, activeCategory, onCategoryChange }: PortfolioCategoriesProps) => {
  const { theme } = useTheme();
  
  // Animation pour les catégories
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="my-6">
      <motion.div 
        className="flex flex-wrap gap-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          variants={item}
          className={`portfolio-tag ${activeCategory === 'Tous' ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => onCategoryChange('Tous')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tous
        </motion.button>
        
        {categories.map((category) => (
          <motion.button
            key={category}
            variants={item}
            className={`portfolio-tag ${activeCategory === category ? 'bg-accent text-accent-foreground' : ''}`}
            onClick={() => onCategoryChange(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioCategories;
