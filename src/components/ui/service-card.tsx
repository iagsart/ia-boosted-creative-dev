
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  link, 
  className 
}: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={cn(
        "group relative bg-card rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      <motion.div 
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="mb-4 text-accent p-2 bg-accent/10 inline-block rounded-lg"
      >
        {icon}
      </motion.div>
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-accent hover:underline gap-1 font-medium"
      >
        En savoir plus 
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
