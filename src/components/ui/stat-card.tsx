
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)" }}
      className={cn(
        "bg-background rounded-lg shadow-sm border p-6 text-center transition-all duration-300",
        className
      )}
    >
      <motion.h3 
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-display font-bold mb-1"
      >
        {value}
      </motion.h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}
