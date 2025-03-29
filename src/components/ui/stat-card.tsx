
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn(
      "bg-background rounded-lg shadow-sm border p-6 text-center transition-all duration-300 hover:shadow-md",
      className
    )}>
      <h3 className="text-2xl font-display font-bold mb-1">{value}</h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
