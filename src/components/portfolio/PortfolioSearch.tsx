
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PortfolioSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const PortfolioSearch: React.FC<PortfolioSearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="max-w-md mx-auto mb-12 relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
        <Input
          type="text"
          placeholder="Rechercher un projet, une technologie..."
          className="pl-10 pr-4 py-2 w-full bg-background/70 backdrop-blur-sm border border-accent/20 focus:border-accent/40 rounded-full transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 rounded-full"
            onClick={() => setSearchQuery("")}
          >
            ×
          </Button>
        )}
      </div>
    </div>
  );
};

export default PortfolioSearch;
