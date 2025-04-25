import { useState } from "react";
import { PageHeader } from "@/components/ui/page-header";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, FileText } from "lucide-react";
import { ResourceItem } from "@/types/resources";
import { FeaturedResources } from "@/components/resources/FeaturedResources";
import { ResourcesSearch } from "@/components/resources/ResourcesSearch";
import { ResourcesList } from "@/components/resources/ResourcesList";
import FaqSection from "@/components/faq/FaqSection";
import Chatbot from "@/components/chat/Chatbot";
import { resources } from "@/data/resources";

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Filtrer les ressources en fonction de la catégorie et de la recherche
  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  // Extraire les ressources mises en avant
  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <Layout>
      <PageHeader
        title="Ressources Gratuites"
        subtitle="Une collection de templates, guides, tutoriels et outils pour vous aider dans vos projets"
        centered
      />
      
      <div className="container py-12">
        <FeaturedResources resources={featuredResources} />
        <ResourcesSearch 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSelectedCategory={setSelectedCategory}
        />
        <ResourcesList resources={filteredResources} />
        
        {/* Section d'aide pour choisir */}
        <section className="bg-accent/5 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Besoin d'aide pour choisir ?</h2>
              <p className="text-muted-foreground mb-6">
                Nous savons qu'il peut être difficile de trouver la bonne ressource parmi tant d'options. 
                Notre assistant IA peut vous aider à trouver exactement ce dont vous avez besoin en 
                fonction de votre projet et de vos objectifs.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Obtenir des recommandations personnalisées</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Recommandations de ressources</DialogTitle>
                    <DialogDescription>
                      Décrivez votre projet et vos besoins pour obtenir des recommandations personnalisées.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <textarea 
                      className="w-full h-32 p-3 rounded-md border border-input resize-none"
                      placeholder="Exemple : Je débute un projet de site e-commerce avec React et j'ai besoin d'un template bien structuré et facile à personnaliser..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <Button>Obtenir des recommandations</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="/images/aide-apprentissage.jpg" 
                alt="Assistance et apprentissage" 
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Section Comment contribuer */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Comment contribuer</h2>
          <Card>
            <CardHeader>
              <CardTitle>Partagez vos propres ressources</CardTitle>
              <CardDescription>
                Notre collection s'enrichit grâce à la communauté. Vous avez créé un template, un guide ou un outil que vous souhaitez partager ?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <img 
                    src="/images/expertise-creativite.jpg" 
                    alt="Contribuer à la communauté" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="md:w-2/3">
                  <Collapsible className="w-full">
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-secondary p-4 font-medium">
                      <span>Comment soumettre une ressource</span>
                      <ArrowRight className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 pt-2 text-sm">
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Créez un dépôt GitHub pour votre ressource</li>
                        <li>Assurez-vous d'inclure une documentation claire</li>
                        <li>Envoyez-nous le lien via le formulaire de contact</li>
                        <li>Notre équipe examinera votre soumission</li>
                        <li>Une fois approuvée, votre ressource sera ajoutée à notre collection</li>
                      </ol>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/contact">
                <Button variant="outline" className="flex gap-2">
                  <FileText className="h-4 w-4" />
                  Contacter l'équipe
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </section>
      </div>

      <FaqSection />
      <Chatbot />
    </Layout>
  );
};

export default Resources;
