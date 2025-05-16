
import { motion } from "framer-motion";
import { Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface WorkflowExampleProps {
  title: string;
  description: string;
  tools?: string[];
  imageUrl?: string;
  detailedSteps?: string[];
  benefits?: string[];
  gradientClass?: string;
}

const WorkflowExample = ({ 
  title, 
  description, 
  tools, 
  imageUrl,
  detailedSteps,
  benefits,
  gradientClass
}: WorkflowExampleProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`border border-border rounded-lg p-5 hover:border-primary/50 transition-all duration-300 ${gradientClass || 'hover:bg-accent/50'}`}
    >
      <div className="flex gap-4 items-start">
        <div className="p-3 bg-primary/10 rounded-full">
          <Workflow className="h-6 w-6 text-primary" />
        </div>
        <div className="space-y-2.5 flex-1">
          <h4 className="font-medium text-lg">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
          
          {detailedSteps && detailedSteps.length > 0 && (
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">Comment ça fonctionne:</h5>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                {detailedSteps.map((step, i) => (
                  <li key={i} className="pl-1">{step}</li>
                ))}
              </ol>
            </div>
          )}

          {benefits && benefits.length > 0 && (
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">Avantages:</h5>
              <ul className="space-y-1">
                {benefits.map((benefit, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary text-lg leading-none">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {imageUrl && (
            <div className="mt-4 rounded-md overflow-hidden">
              <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
            </div>
          )}
          
          {tools && tools.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {tools.map((tool, i) => (
                <Badge key={i} variant="secondary" className="font-normal">{tool}</Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkflowExample;
