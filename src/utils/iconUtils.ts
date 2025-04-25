
import * as LucideIcons from "lucide-react";
import { FileText } from "lucide-react";
import React from "react";

// Helper function to safely get Lucide icons by name
export const getLucideIcon = (iconName: string): React.ReactNode => {
  // First convert to unknown then to the specific type to avoid TypeScript errors
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>;
  
  // Safely access the icon
  const IconComponent = icons[iconName];
  
  // Return the icon component or a default if not found
  if (IconComponent && typeof IconComponent === 'function') {
    return <IconComponent className="h-6 w-6" />;
  }
  
  // Default to FileText icon if the named icon doesn't exist
  return <FileText className="h-6 w-6" />;
};
