
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CaseStudyCardProps {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  gradientClass?: string;
}

const CaseStudyCard = ({ 
  title, 
  industry, 
  challenge, 
  solution, 
  results, 
  tools,
  gradientClass
}: CaseStudyCardProps) => {
  return (
    <Card className={`h-full ${gradientClass || ''}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="mb-2">{industry}</Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>Étude de cas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm mb-1">Challenge:</h4>
          <p className="text-sm text-muted-foreground">{challenge}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-sm mb-1">Solution:</h4>
          <p className="text-sm text-muted-foreground">{solution}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-sm mb-1">Résultats:</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {results.map((result, i) => (
              <li key={i} className="pl-1">{result}</li>
            ))}
          </ul>
        </div>
        
        <div className="pt-2 flex flex-wrap gap-1.5">
          {tools.map((tool, i) => (
            <Badge key={i} variant="secondary" className="font-normal text-xs">{tool}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
