
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

export interface TechCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  examples?: string[];
  gradientClass?: string;
}

const TechCard = ({ title, description, icon: Icon, examples, gradientClass }: TechCardProps) => {
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${gradientClass || ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      {examples && examples.length > 0 && (
        <CardContent className="pt-0">
          <div className="space-y-1.5">
            {examples.map((example, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{example}</span>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default TechCard;
