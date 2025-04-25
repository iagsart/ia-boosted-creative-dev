
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { ResourceItem } from "@/types/resources";

interface FeaturedResourcesProps {
  resources: ResourceItem[];
}

export function FeaturedResources({ resources }: FeaturedResourcesProps) {
  const formatDownloadCount = (count?: number) => {
    if (!count) return "";
    return count > 999 ? `${(count / 1000).toFixed(1)}k` : count.toString();
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Ressources en Vedette</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={`featured-${index}`} className="overflow-hidden hover:shadow-lg transition-all duration-300">
            {resource.preview && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={resource.preview} 
                  alt={resource.title} 
                  className="w-full h-full object-contain transition-transform hover:scale-105 duration-500"
                />
              </div>
            )}
            <CardHeader className={!resource.preview ? "pt-6" : ""}>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                  {resource.icon}
                </div>
                <span className="text-sm font-medium text-muted-foreground capitalize">{resource.category}</span>
              </div>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {resource.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Download className="h-4 w-4" />
                {formatDownloadCount(resource.downloadCount)}
              </div>
              <Button asChild variant="default" size="sm" className="group">
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  {resource.category === 'template' ? 'Télécharger' : 'Consulter'}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
