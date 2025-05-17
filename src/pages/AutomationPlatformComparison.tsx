import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Check, X, ArrowRight, ExternalLink } from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';

const AutomationPlatformComparison = () => {
  return (
    <Layout>
      <div className="container py-12">
        <PageHeader 
          title="Comparaison des plateformes d'automatisation"
        />
        
        <SectionTitle 
          title="Choisir la bonne plateforme d'automatisation"
          subtitle="Comparez les fonctionnalités et les tarifs des principales plateformes d'automatisation pour trouver celle qui convient le mieux à vos besoins."
          centered
        />

        <Tabs defaultValue="n8n" className="w-full">
          <div className="flex justify-center mb-4">
            <TabsList>
              <TabsTrigger value="n8n">n8n</TabsTrigger>
              <TabsTrigger value="make">Make (ex-Integromat)</TabsTrigger>
              <TabsTrigger value="zapier">Zapier</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="n8n">
            <Card>
              <CardHeader>
                <CardTitle>n8n</CardTitle>
                <CardDescription>Plateforme d'automatisation open-source, flexible et auto-hébergeable.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <h3 className="font-bold">Avantages</h3>
                  <ul>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Open-source et auto-hébergeable</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Grande flexibilité et personnalisation</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Tarification avantageuse pour les gros volumes</li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">Inconvénients</h3>
                  <ul>
                    <li className="flex items-center"><X className="mr-2 h-4 w-4 text-red-500" />Courbe d'apprentissage plus abrupte</li>
                    <li className="flex items-center"><X className="mr-2 h-4 w-4 text-red-500" />Nécessite des compétences techniques pour l'auto-hébergement</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary">
                  <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    En savoir plus <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="make">
            <Card>
              <CardHeader>
                <CardTitle>Make (ex-Integromat)</CardTitle>
                <CardDescription>Plateforme d'automatisation visuelle, intuitive et puissante.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <h3 className="font-bold">Avantages</h3>
                  <ul>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Interface visuelle intuitive</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Nombreux connecteurs et intégrations</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Fonctionnalités avancées de manipulation de données</li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">Inconvénients</h3>
                  <ul>
                    <li className="flex items-center"><X className="mr-2 h-4 w-4 text-red-500" />Tarification basée sur le nombre d'opérations</li>
                    <li className="flex items-center"><X className="mr-2 h-4 w-4 text-red-500" />Moins de flexibilité que n8n pour les cas d'usage complexes</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary">
                  <a href="https://www.make.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    En savoir plus <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="zapier">
            <Card>
              <CardHeader>
                <CardTitle>Zapier</CardTitle>
                <CardDescription>Plateforme d'automatisation simple et rapide, idéale pour les débutants.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <h3 className="font-bold">Avantages</h3>
                  <ul>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Facilité d'utilisation et prise en main rapide</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Très grand nombre d'applications compatibles</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Interface intuitive pour les automatisations simples</li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">Inconvénients</h3>
                  <ul>
                    <li className="flex items-center"><X className="mr-2 h-4 w-4 text-red-500" />Moins de contrôle sur les flux de données</li>
                    <li className="flex items-center"><X className="mr-2 h-4 w-4 text-red-500" />Tarification peut devenir élevée pour les automatisations complexes</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary">
                  <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    En savoir plus <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Tableau comparatif</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-collapse border-border">
              <thead>
                <tr>
                  <th className="border border-border p-2">Fonctionnalité</th>
                  <th className="border border-border p-2">n8n</th>
                  <th className="border border-border p-2">Make (ex-Integromat)</th>
                  <th className="border border-border p-2">Zapier</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2">Modèle</td>
                  <td className="border border-border p-2">Open-source / Cloud</td>
                  <td className="border border-border p-2">Cloud</td>
                  <td className="border border-border p-2">Cloud</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Prix</td>
                  <td className="border border-border p-2">Basé sur l'utilisation / Gratuit en auto-hébergement</td>
                  <td className="border border-border p-2">Basé sur les opérations</td>
                  <td className="border border-border p-2">Basé sur les Zaps et les tâches</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Facilité d'utilisation</td>
                  <td className="border border-border p-2">Intermédiaire</td>
                  <td className="border border-border p-2">Facile</td>
                  <td className="border border-border p-2">Très facile</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Flexibilité</td>
                  <td className="border border-border p-2">Élevée</td>
                  <td className="border border-border p-2">Moyenne</td>
                  <td className="border border-border p-2">Faible</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Connecteurs</td>
                  <td className="border border-border p-2">Nombreux + Possibilité de créer des connecteurs</td>
                  <td className="border border-border p-2">Très nombreux</td>
                  <td className="border border-border p-2">Très nombreux</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Cas d'usage</td>
                  <td className="border border-border p-2">Automatisation complexe, intégration de systèmes</td>
                  <td className="border border-border p-2">Automatisation de processus métier</td>
                  <td className="border border-border p-2">Automatisation simple et rapide</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="text-muted-foreground">
            Le choix de la plateforme d'automatisation dépend de vos besoins spécifiques, de votre budget et de vos compétences techniques.
          </p>
          <ul className="list-disc list-inside mt-4 text-muted-foreground">
            <li><b>n8n</b> est idéal si vous recherchez une solution open-source, flexible et économique pour les gros volumes.</li>
            <li><b>Make</b> est un excellent choix si vous privilégiez une interface visuelle intuitive et des fonctionnalités avancées de manipulation de données.</li>
            <li><b>Zapier</b> est parfait si vous avez besoin d'une solution simple et rapide à mettre en place, avec un grand nombre d'applications compatibles.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AutomationPlatformComparison;
