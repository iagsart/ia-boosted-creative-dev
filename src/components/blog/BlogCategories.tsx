
import React from 'react';
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

interface BlogCategoriesProps {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export const BlogCategories = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory 
}: BlogCategoriesProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Catégories</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(null)}
          className="flex items-center rounded-full"
        >
          <Tag className="mr-1 h-3 w-3" />
          Tous
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="flex items-center rounded-full"
          >
            <Tag className="mr-1 h-3 w-3" />
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};
