
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from 'react-router-dom';
import { useTheme } from '@/context/theme-provider';

interface ProjectCardProps {
  project: {
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
  };
  index: number;
  isFeatured?: boolean;
}

const getCategoryIcon = (category: string) => {
  switch(category) {
    case "Web":
      return <span className="mr-1">🌐</span>;
    case "PC":
      return <span className="mr-1">💻</span>;
    case "ATARI":
      return <span className="mr-1">🎮</span>;
    default:
      return <span className="mr-1">💡</span>;
  }
};

const PortfolioProjectCard: React.FC<ProjectCardProps> = ({ project, index, isFeatured = false }) => {
  const { theme } = useTheme();
  
  // Featured project card is larger and more prominent
  if (isFeatured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.3 }
        }}
        className={`group relative overflow-hidden rounded-xl border ${
          theme === 'dark' 
            ? 'border-accent/20 bg-card/90' 
            : theme === 'fantasy' 
              ? 'border-purple-300/30 bg-card/95 shadow-purple-200/20' 
              : 'border-accent/10 bg-card/95 shadow-blue-100/30'
        } shadow-xl h-full flex flex-col`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute top-4 left-4 z-20 flex gap-2 flex-wrap">
            <Badge className="bg-accent text-white hover:bg-accent/90 shadow-md">
              {project.category}
            </Badge>
          </div>
          <div className="absolute top-4 right-4 z-20">
            <Badge className="bg-accent/80 text-white hover:bg-accent/90 shadow-md flex items-center">
              {getCategoryIcon(project.subcategory)}
              {project.subcategory}
            </Badge>
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="outline" className="bg-background/50 backdrop-blur-sm">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex justify-between items-center text-sm text-muted-foreground mt-4">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>
          
          <motion.div 
            className="mt-6 pt-4 border-t border-border"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to={project.link}
              className="inline-flex items-center text-accent hover:text-accent/80 font-medium group/link"
            >
              Explorer ce projet
              <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
        
        {/* Interactive hover effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`absolute inset-0 ${
            theme === 'fantasy' 
              ? 'bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10' 
              : theme === 'tech' 
                ? 'bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-500/10' 
                : 'bg-gradient-to-tr from-accent/10 via-transparent to-accent/5'
          }`}></div>
        </motion.div>
      </motion.div>
    );
  }
  
  // Regular project card
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className={`group bg-card rounded-lg overflow-hidden border ${
        theme === 'dark' 
          ? 'border-border/70 hover:border-accent/30' 
          : theme === 'fantasy' 
            ? 'border-purple-200/50 hover:border-purple-300/70' 
            : 'border-border/50 hover:border-accent/20'
      } shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col`}
    >
      <div className="relative aspect-video overflow-hidden">
        <motion.img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-accent/90 hover:bg-accent shadow-sm">{project.category}</Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge className="bg-accent/80 hover:bg-accent flex items-center shadow-sm">
            {getCategoryIcon(project.subcategory)}
            {project.subcategory}
          </Badge>
        </div>
        
        {/* Hover effect overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        ></motion.div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <Badge key={idx} variant="outline" className="bg-secondary/50 text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="bg-secondary/50 text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>{project.client}</span>
          <span>{project.year}</span>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <Link 
            to={project.link} 
            className="inline-flex items-center text-accent hover:text-accent/80 gap-1 font-medium group/link"
          >
            Voir le projet
            <ExternalLink size={14} className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioProjectCard;
