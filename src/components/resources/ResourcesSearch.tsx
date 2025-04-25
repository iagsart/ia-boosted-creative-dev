
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ResourcesSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
}

export function ResourcesSearch({ searchQuery, setSearchQuery, setSelectedCategory }: ResourcesSearchProps) {
  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Rechercher des ressources..."
            className="w-full px-4 py-2 rounded-md border border-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setSelectedCategory}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full md:w-auto">
            <TabsTrigger value="all">Tout</TabsTrigger>
            <TabsTrigger value="template">Templates</TabsTrigger>
            <TabsTrigger value="guide">Guides</TabsTrigger>
            <TabsTrigger value="tutoriel">Tutoriels</TabsTrigger>
            <TabsTrigger value="outil">Outils</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
