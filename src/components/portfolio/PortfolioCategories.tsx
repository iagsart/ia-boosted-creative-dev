
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

  // Tailwind classes for different themes
  const getTagClasses = (isActive: boolean) => {
    const baseClasses = "px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer text-sm font-medium border";
    
    if (isActive) {
      return `${baseClasses} bg-accent text-accent-foreground border-accent shadow-sm`;
    }
    
    // Different background colors for different themes to ensure visibility
    switch (theme) {
      case 'dark':
        return `${baseClasses} bg-secondary/80 text-foreground hover:bg-secondary/90 border-border/50`;
      case 'fantasy':
        return `${baseClasses} bg-secondary/80 text-foreground hover:bg-secondary/90 border-purple-300/50`;
      case 'tech':
        return `${baseClasses} bg-secondary/80 text-foreground hover:bg-secondary/90 border-blue-300/50`;
      default: // light
        return `${baseClasses} bg-secondary/80 text-foreground hover:bg-secondary/90 border-border/50`;
    }
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
