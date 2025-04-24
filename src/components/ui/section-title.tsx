
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  centered = false, 
  className 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "space-y-2 mb-10",
      centered && "text-center mx-auto max-w-3xl",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-display font-bold">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
