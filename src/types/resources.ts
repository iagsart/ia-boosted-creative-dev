
export interface ResourceItem {
  title: string;
  description: string;
  icon: string;  // Changed from ReactNode to string
  link: string;
  category: 'template' | 'guide' | 'tutoriel' | 'outil';
  tags: string[];
  featured?: boolean;
  preview?: string;
  downloadCount?: number;
}
