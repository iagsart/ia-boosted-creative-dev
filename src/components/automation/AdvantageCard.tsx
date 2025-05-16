
import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export interface AdvantageCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradientClass?: string;
}

const AdvantageCard = ({ title, description, icon: Icon, gradientClass }: AdvantageCardProps) => (
  <Card className={`h-full transition-all duration-300 hover:shadow-lg ${gradientClass || 'bg-gradient-to-br from-background to-accent/20 backdrop-blur-sm border border-accent/20'}`}>
    <CardHeader className="pb-3">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default AdvantageCard;
