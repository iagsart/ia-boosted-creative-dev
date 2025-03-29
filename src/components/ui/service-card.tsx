
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

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
    <div className={cn(
      "group relative bg-card rounded-lg border p-6 shadow-sm card-hover",
      className
    )}>
      <div className="mb-4 text-accent">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-accent hover:underline gap-1"
      >
        En savoir plus 
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
