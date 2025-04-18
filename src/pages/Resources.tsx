
import { PageHeader } from "@/components/ui/page-header";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, FileText, Book, Download, Layout as LayoutIcon, Code, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceItem {
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
  category: 'template' | 'guide';
}

const resources: ResourceItem[] = [
  {
    title: "Guide d'IA Éthique",
    description: "Un guide complet sur les bonnes pratiques en matière d'IA éthique et responsable.",
    icon: <Book className="h-6 w-6" />,
    link: "/blog/ai-ethics",
    category: 'guide'
  },
  {
    title: "Template React/TypeScript",
    description: "Un modèle de projet React avec TypeScript, préconfigué avec les meilleures pratiques.",
    icon: <Code className="h-6 w-6" />,
    link: "https://github.com/yourusername/react-typescript-template",
    category: 'template'
  },
  {
    title: "Guide Python Data Science",
    description: "Introduction complète à l'analyse de données avec Python et ses bibliothèques essentielles.",
    icon: <FileCode className="h-6 w-6" />,
    link: "/blog/python-data-analysis",
    category: 'guide'
  },
  {
    title: "Template Portfolio",
    description: "Un template moderne et responsive pour créer votre portfolio professionnel.",
    icon: <LayoutIcon className="h-6 w-6" />,
    link: "https://github.com/yourusername/portfolio-template",
    category: 'template'
  }
];

const Resources = () => {
  return (
    <Layout>
      <PageHeader
        title="Ressources Gratuites"
        subtitle="Une collection de templates, guides et ressources pour vous aider dans vos projets"
        centered
      />
      
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Templates Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-2xl font-bold">Templates</h2>
            </div>
            <div className="space-y-4">
              {resources
                .filter(resource => resource.category === 'template')
                .map((resource, index) => (
                  <Card key={index} className="group transition-all hover:shadow-md">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                          {resource.icon}
                        </div>
                        <div>
                          <CardTitle>{resource.title}</CardTitle>
                          <CardDescription>{resource.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardFooter>
                      <Button asChild variant="ghost" className="ml-auto group">
                        <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Télécharger
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>

          {/* Guides Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Book className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-2xl font-bold">Guides</h2>
            </div>
            <div className="space-y-4">
              {resources
                .filter(resource => resource.category === 'guide')
                .map((resource, index) => (
                  <Card key={index} className="group transition-all hover:shadow-md">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                          {resource.icon}
                        </div>
                        <div>
                          <CardTitle>{resource.title}</CardTitle>
                          <CardDescription>{resource.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardFooter>
                      <Button asChild variant="ghost" className="ml-auto group">
                        <Link to={resource.link} className="flex items-center gap-2">
                          Lire le guide
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
