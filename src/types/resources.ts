
import { ReactNode } from "react";

export interface ResourceItem {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  category: 'template' | 'guide' | 'tutoriel' | 'outil';
  tags: string[];
  featured?: boolean;
  preview?: string;
  downloadCount?: number;
}
