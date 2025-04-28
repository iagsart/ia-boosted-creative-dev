
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  onClick?: () => void;
  className?: string;
  theme?: 'light' | 'dark' | 'tech' | 'fantasy';
};

const AnimatedLogo = ({ size = 'md', showTagline = true, onClick, className, theme = 'light' }: LogoProps) => {
  const [hovered, setHovered] = useState(false);
  const [icon, setIcon] = useState<number>(0);
  
  // Change icon every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIcon((prevIcon) => (prevIcon + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getIcon = () => {
    switch (icon) {
      case 0:
        return <Sparkles className="text-accent animate-pulse" />;
      case 1:
        return <Code className="text-accent animate-pulse" />;
      case 2:
        return <Zap className="text-accent animate-pulse" />;
      default:
        return <Sparkles className="text-accent animate-pulse" />;
    }
  };

  // Font sizes based on size prop
  const fontSizes = {
    sm: {
      main: 'text-xl',
      tagline: 'text-xs',
    },
    md: {
      main: 'text-2xl',
      tagline: 'text-sm',
    },
    lg: {
      main: 'text-3xl',
      tagline: 'text-base',
    },
  };

  // Variants for letter animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const iconContainer = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        delay: 0.3,
      },
    },
  };

  // Generate sparkle effect on hover
  const renderSparkles = () => {
    if (!hovered) return null;

    return Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute pointer-events-none"
        initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
        animate={{
          opacity: [1, 0],
          scale: [0, 1],
          x: Math.random() * 60 - 30,
          y: Math.random() * 60 - 30,
        }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
      >
        <div className="h-1.5 w-1.5 rotate-45 bg-accent rounded-full" />
      </motion.div>
    ));
  };

  return (
    <motion.div
      className={cn(
        "flex items-baseline relative overflow-visible group",
        className
      )}
      initial="hidden"
      animate="visible"
      variants={container}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Main brand name */}
      <motion.span
        className={cn(
          "font-bold tracking-tight transition-all duration-300",
          fontSizes[size].main,
          {
            "cursor-pointer": !!onClick
          }
        )}
      >
        {Array.from("Hylst").map((letter, i) => (
          <motion.span
            key={i}
            variants={letterVariant}
            className={cn(
              "inline-block transition-colors duration-300",
              hovered && "text-accent"
            )}
            style={{ 
              textShadow: hovered ? '0 0 8px rgba(var(--accent)/0.3)' : 'none',
              transformOrigin: "bottom"
            }}
            whileHover={{ scale: 1.2, rotate: Math.random() * 10 - 5 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>

      {/* Logo icon */}
      <motion.div
        variants={iconContainer}
        className="inline-flex items-center justify-center mx-1 transition-transform duration-300 group-hover:scale-125"
      >
        {getIcon()}
        {renderSparkles()}
      </motion.div>

      {/* Tagline */}
      {showTagline && (
        <motion.span
          className={cn(
            "font-medium text-muted-foreground transition-all duration-300 group-hover:text-foreground",
            fontSizes[size].tagline
          )}
        >
          {Array.from("Digital Solutions").map((letter, i) => (
            <motion.span
              key={i + 5}
              variants={letterVariant}
              className={`inline-block ${letter === " " ? "mx-1" : ""}`}
              style={{ transformOrigin: "bottom" }}
              whileHover={{ scale: 1.1, color: "var(--accent)" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      )}
    </motion.div>
  );
};

export default AnimatedLogo;
