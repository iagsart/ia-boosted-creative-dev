
import React from 'react';
import { LucideIcon } from "lucide-react"; 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export interface Platform {
  name: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  url?: string;
  buttonText?: string;
  gradientClass?: string;
}

interface PlatformCardProps {
  title: string;
  description: string;
  platforms: Platform[];
  linkText?: string;
  linkUrl?: string;
}

const PlatformCard = ({ title, description, platforms, linkText, linkUrl }: PlatformCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {platforms.map((platform, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`p-2 rounded-full ${platform.gradientClass || 'bg-primary/10'}`}>
              <platform.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-medium">{platform.name}</div>
              <div className="text-sm text-muted-foreground">{platform.description}</div>
            </div>
          </div>
        ))}
      </CardContent>
      {linkText && linkUrl && (
        <CardFooter>
          <Button variant="outline" asChild className="w-full">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              {linkText}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default PlatformCard;
