
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const BlogSearch = ({ searchQuery, setSearchQuery }: BlogSearchProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Rechercher</h3>
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          type="search"
          placeholder="Rechercher un article..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-10"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute inset-y-0 right-0"
            onClick={() => setSearchQuery("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
