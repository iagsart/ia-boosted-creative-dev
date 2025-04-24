
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

  // Tailwind classes for different themes - enhanced for better visibility
  const getTagClasses = (isActive: boolean) => {
    const baseClasses = "px-3 py-2 rounded-full transition-all duration-300 cursor-pointer text-sm font-medium border shadow-sm hover:shadow-md";
    
    if (isActive) {
      // Active states with stronger contrast
      switch (theme) {
        case 'dark':
          return `${baseClasses} bg-accent text-white border-accent shadow-accent/30`;
        case 'fantasy': 
          return `${baseClasses} bg-accent text-white border-accent shadow-purple-400/30`;
        case 'tech':
          return `${baseClasses} bg-accent text-white border-accent shadow-blue-400/30`;
        default: // light
          return `${baseClasses} bg-accent text-white border-accent shadow-accent/20`;
      }
    }
    
    // Inactive states with better visibility
    switch (theme) {
      case 'dark':
        return `${baseClasses} bg-secondary/90 text-foreground hover:bg-secondary border-border hover:border-accent/30`;
      case 'fantasy':
        return `${baseClasses} bg-purple-100/90 text-purple-900 hover:bg-purple-200/90 border-purple-300/50 hover:border-purple-400/70`;
      case 'tech':
        return `${baseClasses} bg-blue-50/90 text-blue-900 hover:bg-blue-100/90 border-blue-200/50 hover:border-blue-300/70`;
      default: // light
        return `${baseClasses} bg-secondary/90 text-foreground hover:bg-secondary/100 border-border/50 hover:border-accent/20`;
    }
  };

  return (
    <div className="my-6">
      <motion.div 
        className="flex flex-wrap gap-2 justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          variants={item}
          className={getTagClasses(activeCategory === 'Tous')}
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
            className={getTagClasses(activeCategory === category)}
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
