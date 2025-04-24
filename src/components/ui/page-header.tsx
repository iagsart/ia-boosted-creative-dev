
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
  backgroundEffect?: "gradient" | "dots" | "waves" | "none";
}

export function PageHeader({
  title,
  subtitle,
  centered = true,
  className,
  children,
  backgroundEffect = "gradient",
}: PageHeaderProps) {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  // Split title into words for gradient effect
  const words = title.split(' ');
  const firstHalf = words.slice(0, Math.ceil(words.length / 2)).join(' ');
  const secondHalf = words.slice(Math.ceil(words.length / 2)).join(' ');

  return (
    <section 
      className={cn(
        "py-16 md:py-24 w-full relative overflow-hidden",
        backgroundEffect === "gradient" && "bg-gradient-to-br from-background via-secondary/30 to-background",
        backgroundEffect === "dots" && "bg-secondary/20",
        backgroundEffect === "waves" && "bg-gradient-to-r from-background to-secondary/30",
        className
      )}
    >
      {backgroundEffect === "dots" && (
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(circle,_var(--tw-gradient-from)_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        </div>
      )}
      
      {backgroundEffect === "gradient" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl"></div>
        </div>
      )}
      
      <div className="container relative z-10">
        <motion.div 
          className={cn(
            "max-w-3xl space-y-6",
            centered ? "mx-auto text-center" : "mx-0 text-left"
          )}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            variants={item}
          >
            <span className="text-foreground">{firstHalf}</span>{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{secondHalf}</span>
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl" 
              variants={item}
            >
              {subtitle}
            </motion.p>
          )}
          
          {children && (
            <motion.div variants={item}>
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
