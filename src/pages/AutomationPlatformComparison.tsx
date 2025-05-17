
import React from 'react';
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";

const AutomationPlatformComparison = () => {
  return (
    <Layout>
      <PageHeader 
        title="Comparaison des Plateformes d'Automatisation" 
        description="Analyse détaillée des principales plateformes d'automatisation pour vous aider à choisir la solution idéale pour votre entreprise"
      />
      
      <section className="py-12">
        <div className="container max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader>
                <CardTitle>n8n</CardTitle>
                <CardDescription>Automatisation open-source puissante et flexible</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Badge className="bg-blue-500">Open Source</Badge>
                  <Badge variant="outline" className="ml-2">Auto-hébergement</Badge>
                  <Badge variant="outline" className="ml-2">Fair-code</Badge>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Contrôle total des données sensibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Plus de 300+ intégrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Personnalisation illimitée avec code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Option cloud ou auto-hébergement</span>
                  </li>
                </ul>
                <div className="text-sm text-muted-foreground">
                  À partir de <span className="font-bold">0€</span> (open source) ou <span className="font-bold">20€</span>/mois (cloud)
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader>
                <CardTitle>Make (Integromat)</CardTitle>
                <CardDescription>Plateforme puissante avec interface visuelle</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Badge className="bg-green-500">Interface visuelle</Badge>
                  <Badge variant="outline" className="ml-2">Flexibilité</Badge>
                  <Badge variant="outline" className="ml-2">SaaS</Badge>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Plus de 1000+ applications connectées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Interface visuelle intuitive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fonctions avancées de traitement de données</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Plan gratuit généreux</span>
                  </li>
                </ul>
                <div className="text-sm text-muted-foreground">
                  À partir de <span className="font-bold">0€</span> (gratuit) ou <span className="font-bold">9€</span>/mois (standard)
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader>
                <CardTitle>Zapier</CardTitle>
                <CardDescription>La référence de l'automatisation SaaS</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Badge className="bg-orange-500">Facilité d'utilisation</Badge>
                  <Badge variant="outline" className="ml-2">SaaS</Badge>
                  <Badge variant="outline" className="ml-2">Grand public</Badge>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Plus de 5000+ intégrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Accessible aux non-techniciens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Communauté massive et support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Excellent pour les débutants</span>
                  </li>
                </ul>
                <div className="text-sm text-muted-foreground">
                  À partir de <span className="font-bold">0€</span> (gratuit) ou <span className="font-bold">19,99€</span>/mois (starter)
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Comparatif technique</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-muted">
                    <th className="text-left py-4 px-4">Fonctionnalité</th>
                    <th className="text-center py-4 px-4">n8n</th>
                    <th className="text-center py-4 px-4">Make (Integromat)</th>
                    <th className="text-center py-4 px-4">Zapier</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-muted">
                    <td className="py-3 px-4">Auto-hébergement</td>
                    <td className="text-center py-3 px-4 text-green-500">✓</td>
                    <td className="text-center py-3 px-4 text-red-500">✗</td>
                    <td className="text-center py-3 px-4 text-red-500">✗</td>
                  </tr>
                  <tr className="border-b border-muted bg-muted/30">
                    <td className="py-3 px-4">Nombre d'intégrations</td>
                    <td className="text-center py-3 px-4">300+</td>
                    <td className="text-center py-3 px-4">1000+</td>
                    <td className="text-center py-3 px-4">5000+</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-3 px-4">Code personnalisé</td>
                    <td className="text-center py-3 px-4 text-green-500">✓ (JavaScript)</td>
                    <td className="text-center py-3 px-4 text-green-500">✓ (Limité)</td>
                    <td className="text-center py-3 px-4 text-green-500">✓ (Python/JavaScript)</td>
                  </tr>
                  <tr className="border-b border-muted bg-muted/30">
                    <td className="py-3 px-4">Exécution en temps réel</td>
                    <td className="text-center py-3 px-4 text-green-500">✓</td>
                    <td className="text-center py-3 px-4 text-green-500">✓</td>
                    <td className="text-center py-3 px-4 text-green-500">✓</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-3 px-4">Traitement de données complexes</td>
                    <td className="text-center py-3 px-4 text-green-500">✓✓✓</td>
                    <td className="text-center py-3 px-4 text-green-500">✓✓✓</td>
                    <td className="text-center py-3 px-4 text-green-500">✓✓</td>
                  </tr>
                  <tr className="border-b border-muted bg-muted/30">
                    <td className="py-3 px-4">Traitement par lots</td>
                    <td className="text-center py-3 px-4 text-green-500">✓</td>
                    <td className="text-center py-3 px-4 text-green-500">✓✓✓</td>
                    <td className="text-center py-3 px-4 text-green-500">✓</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-3 px-4">Webhooks</td>
                    <td className="text-center py-3 px-4 text-green-500">✓✓✓</td>
                    <td className="text-center py-3 px-4 text-green-500">✓✓✓</td>
                    <td className="text-center py-3 px-4 text-green-500">✓✓</td>
                  </tr>
                  <tr className="border-b border-muted bg-muted/30">
                    <td className="py-3 px-4">Intégration avec les LLMs</td>
                    <td className="text-center py-3 px-4 text-green-500">✓✓✓</td>
                    <td className="text-center py-3 px-4 text-green-500">✓✓</td>
                    <td className="text-center py-3 px-4 text-green-500">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-2">Détail des plateformes</h2>
            <p className="text-muted-foreground mb-8">Analyse approfondie des fonctionnalités et cas d'usage de chaque plateforme</p>
            
            <Tabs defaultValue="n8n" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="n8n">n8n</TabsTrigger>
                <TabsTrigger value="make">Make</TabsTrigger>
                <TabsTrigger value="zapier">Zapier</TabsTrigger>
              </TabsList>
              
              <TabsContent value="n8n" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Présentation de n8n</h3>
                    <p className="text-muted-foreground mb-4">
                      n8n est une plateforme d'automatisation open-source qui permet aux utilisateurs de connecter 
                      différentes applications et services. Sa particularité est d'être auto-hébergeable, 
                      garantissant un contrôle total sur les données sensibles.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Avec son modèle "fair-code", n8n offre une approche éthique du développement logiciel, 
                      combinant les avantages de l'open-source avec une viabilité économique pour ses créateurs.
                    </p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h4 className="font-bold mb-3">Points forts :</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Auto-hébergeable pour la souveraineté des données</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Personnalisation avancée avec JavaScript</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Workflows complexes avec branchements conditionnels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Support natif des webhooks et API</span>
                      </li>
                    </ul>
                    
                    <h4 className="font-bold mb-3">Points faibles :</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Courbe d'apprentissage plus importante</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Moins d'intégrations que Zapier</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Communauté plus restreinte</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Aspects techniques</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-lg mb-2">Architecture</h4>
                      <p className="text-muted-foreground mb-4">
                        n8n utilise une architecture basée sur Node.js, permettant une exécution rapide et efficace des workflows.
                        Son système modulaire facilite l'ajout de nouvelles fonctionnalités et intégrations.
                      </p>
                      
                      <h4 className="font-medium text-lg mb-2">Personnalisation</h4>
                      <p className="text-muted-foreground">
                        n8n excelle dans la personnalisation avec son nœud Function qui permet d'écrire du code JavaScript 
                        pour transformer les données ou implémenter une logique métier complexe. Chaque workflow 
                        peut être adapté précisément aux besoins spécifiques.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">Sécurité</h4>
                      <p className="text-muted-foreground mb-4">
                        Grâce à l'auto-hébergement, n8n offre un niveau de sécurité élevé pour les données sensibles.
                        Les informations d'identification sont chiffrées et les connexions sécurisées.
                      </p>
                      
                      <h4 className="font-medium text-lg mb-2">Performance</h4>
                      <p className="text-muted-foreground">
                        n8n est conçu pour être léger et performant, même sur des serveurs modestes.
                        Les workflows peuvent être exécutés en parallèle, optimisant ainsi les performances
                        globales du système.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Cas d'usage idéaux</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Entreprises soucieuses des données</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Pour les organisations qui doivent garder un contrôle total sur leurs données sensibles
                          (RGPD, données médicales, informations financières) et qui ne peuvent pas utiliser de solutions SaaS.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Développeurs et équipes tech</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Idéal pour les équipes techniques qui souhaitent personnaliser leurs workflows
                          avec du code et intégrer l'automatisation dans leur infrastructure existante.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Projets avec API personnalisées</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Parfait pour les projets nécessitant l'intégration avec des API internes ou des
                          systèmes personnalisés qui ne sont pas disponibles dans les catalogues des autres plateformes.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="make" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Présentation de Make (Integromat)</h3>
                    <p className="text-muted-foreground mb-4">
                      Make, anciennement connu sous le nom d'Integromat, est une plateforme d'intégration visuelle qui se distingue 
                      par son interface intuitive et puissante. Elle permet de créer des scénarios d'automatisation complexes 
                      avec une approche visuelle unique sous forme de circuits.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Reconnue pour sa flexibilité et sa capacité à manipuler des données complexes, Make offre un équilibre 
                      idéal entre facilité d'utilisation et puissance technique, ce qui en fait un choix privilégié 
                      pour les entreprises de toutes tailles.
                    </p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h4 className="font-bold mb-3">Points forts :</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Interface visuelle exceptionnelle et intuitive</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Manipulation avancée des données et tableaux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Traitement par lots très puissant</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Excellent rapport fonctionnalités/prix</span>
                      </li>
                    </ul>
                    
                    <h4 className="font-bold mb-3">Points faibles :</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Pas d'option d'auto-hébergement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Moins d'intégrations que Zapier</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Documentation parfois incomplète</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Aspects techniques</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-lg mb-2">Architecture et flux de données</h4>
                      <p className="text-muted-foreground mb-4">
                        Make utilise une approche unique de "scénarios" visuels qui ressemblent à des circuits électroniques. 
                        Cette représentation permet une compréhension intuitive du flux de données et facilite la création 
                        de workflows complexes avec des branches conditionnelles et des itérations.
                      </p>
                      
                      <h4 className="font-medium text-lg mb-2">Manipulation de données</h4>
                      <p className="text-muted-foreground">
                        L'un des points forts de Make est sa capacité à traiter et transformer des données complexes.
                        Les fonctions intégrées permettent de manipuler des tableaux, d'agréger des informations,
                        et de restructurer des données sans avoir besoin de code personnalisé.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">Traitement par lots</h4>
                      <p className="text-muted-foreground mb-4">
                        Make excelle dans le traitement par lots (batch processing) avec ses modules d'agrégation,
                        d'itération et de fusion. Cette capacité permet de gérer efficacement de grands volumes de données
                        tout en optimisant l'utilisation des ressources et des opérations.
                      </p>
                      
                      <h4 className="font-medium text-lg mb-2">Intégration avec les services IA</h4>
                      <p className="text-muted-foreground">
                        Make propose des connecteurs natifs pour plusieurs services d'IA comme OpenAI, Claude et Google AI,
                        facilitant l'intégration de capacités d'intelligence artificielle dans les workflows d'automatisation.
                        Ces intégrations permettent d'analyser des textes, générer du contenu ou classer des documents.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Fonctionnalités avancées</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-lg mb-2">Gestion des erreurs</h4>
                      <p className="text-muted-foreground mb-4">
                        Make offre un système sophistiqué de gestion des erreurs avec des mécanismes de reprise automatique, 
                        des routes alternatives en cas d'échec, et une journalisation détaillée. Les scénarios peuvent être 
                        configurés pour réagir différemment selon le type d'erreur rencontré.
                      </p>
                      
                      <h4 className="font-medium text-lg mb-2">Fonctions de données</h4>
                      <p className="text-muted-foreground mb-4">
                        La plateforme propose plus de 300 fonctions intégrées pour manipuler les textes, nombres, dates, 
                        tableaux et autres types de données. Ces fonctions constituent une boîte à outils puissante 
                        pour transformer et enrichir les informations qui transitent dans les workflows.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">Webhooks et API</h4>
                      <p className="text-muted-foreground mb-4">
                        Avec ses modules Webhook et HTTP, Make permet de créer facilement des API personnalisées 
                        ou d'intégrer des services qui ne disposent pas de connecteurs natifs. Ces fonctionnalités 
                        étendent considérablement les possibilités d'intégration de la plateforme.
                      </p>
                      
                      <h4 className="font-medium text-lg mb-2">Outils de débogage</h4>
                      <p className="text-muted-foreground mb-4">
                        Make propose des outils de débogage visuels avancés qui permettent d'inspecter les données 
                        à chaque étape du workflow. Cette visibilité facilite l'identification et la résolution 
                        des problèmes dans les scénarios complexes.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Cas d'usage idéaux</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Traitement de données complexes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Idéal pour les entreprises qui doivent agréger, transformer ou analyser des données provenant
                          de multiples sources. Les capacités de traitement par lots de Make sont particulièrement adaptées
                          aux flux de travail impliquant des volumes importants de données.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Marketing et automatisation CRM</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Make excelle dans l'automatisation des processus marketing et CRM comme la qualification
                          de leads, les campagnes multicanales, et la synchronisation des données client entre différentes
                          plateformes comme HubSpot, Salesforce ou Mailchimp.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Workflows IA augmentés</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Parfait pour intégrer des capacités d'IA dans des processus métier, comme l'analyse de sentiment
                          des retours clients, la génération automatique de contenu, ou la classification de documents.
                          Les connecteurs natifs avec les principales API d'IA facilitent ces intégrations.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Exemples concrets d'utilisation</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Automatisation du service client avec IA</CardTitle>
                        <CardDescription>Cas réel d'une entreprise de e-commerce</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Une entreprise de e-commerce utilise Make pour automatiser le traitement initial des tickets support :
                        </p>
                        <ol className="space-y-2 list-decimal list-inside mb-4">
                          <li>Les nouveaux emails arrivant dans Zendesk sont capturés par Make</li>
                          <li>Le contenu est analysé par l'API OpenAI pour déterminer l'intention et le sentiment</li>
                          <li>Les demandes sont automatiquement catégorisées et routées vers le bon département</li>
                          <li>Pour les questions fréquentes, une réponse est générée et proposée à l'agent</li>
                          <li>Toutes les interactions sont enregistrées dans le CRM</li>
                        </ol>
                        <p className="text-muted-foreground">
                          Résultat : Réduction de 60% du temps de traitement initial des tickets et amélioration de la satisfaction client.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Traitement et enrichissement de données</CardTitle>
                        <CardDescription>Cas d'une agence marketing B2B</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Une agence marketing B2B a mis en place un système d'enrichissement de leads avec Make :
                        </p>
                        <ol className="space-y-2 list-decimal list-inside mb-4">
                          <li>Les nouveaux leads sont collectés depuis différents formulaires (site web, landing pages)</li>
                          <li>Make enrichit automatiquement les données avec des informations d'entreprise via Clearbit</li>
                          <li>Le système vérifie les adresses email avec NeverBounce</li>
                          <li>Les données sont normalisées et dédupliquées</li>
                          <li>Les leads sont scorés selon des critères prédéfinis et envoyés vers HubSpot</li>
                          <li>Des alertes Slack sont générées pour les leads à forte valeur</li>
                        </ol>
                        <p className="text-muted-foreground">
                          Résultat : Augmentation de 40% du taux de conversion des leads et réduction des erreurs de données.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="zapier" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Présentation de Zapier</h3>
                    <p className="text-muted-foreground mb-4">
                      Zapier est la plateforme d'automatisation la plus populaire au monde, connue pour sa simplicité d'utilisation 
                      et son vaste catalogue d'applications intégrées. Elle permet aux utilisateurs sans compétences techniques 
                      de connecter facilement leurs applications et d'automatiser des tâches répétitives.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Avec plus de 5000 applications connectées, Zapier offre la plus grande bibliothèque d'intégrations du marché, 
                      ce qui en fait un choix privilégié pour les petites entreprises et les professionnels qui souhaitent 
                      automatiser rapidement leurs workflows sans expertise technique.
                    </p>
                  </div>
                  
                  <div className="bg-muted/20 p-6 rounded-lg">
                    <h4 className="font-bold mb-3">Points forts :</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Plus grand catalogue d'intégrations (5000+)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Extrêmement facile à prendre en main</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Excellente documentation et support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span>Communauté massive d'utilisateurs</span>
                      </li>
                    </ul>
                    
                    <h4 className="font-bold mb-3">Points faibles :</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Moins de flexibilité pour les workflows complexes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Tarifs qui peuvent devenir élevés avec le volume</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Limitations dans le traitement de données complexes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>Pas d'option d'auto-hébergement</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Aspects techniques</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-lg mb-2">Architecture</h4>
                      <p className="text-muted-foreground mb-4">
                        Zapier utilise une architecture simple basée sur des "Zaps" - des workflows linéaires 
                        composés d'un déclencheur (trigger) suivi d'une ou plusieurs actions. Cette approche 
                        favorise la simplicité au détriment de la complexité structurelle.
                      </p>
                      
                      <h4 className="font-medium text-lg mb-2">Transformations de données</h4>
                      <p className="text-muted-foreground">
                        Les capacités de transformation de données de Zapier sont accessibles via des étapes dédiées comme 
                        Formatter ou des étapes de code (Python/JavaScript). Bien que fonctionnelles, elles sont moins 
                        puissantes que les options disponibles dans Make ou n8n pour les cas complexes.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">Multi-étapes</h4>
                      <p className="text-muted-foreground mb-4">
                        Zapier permet de créer des workflows multi-étapes avec son système d'actions en série.
                        Bien que linéaire par défaut, il est possible d'ajouter des conditions filtres entre les étapes
                        pour créer une logique conditionnelle simple.
                      </p>
                      
                      <h4 className="font-medium text-lg mb-2">Intégration d'IA</h4>
                      <p className="text-muted-foreground">
                        Zapier a récemment ajouté des fonctionnalités d'IA avec son outil "AI Actions" qui permet 
                        d'intégrer facilement OpenAI et d'autres services d'IA dans les Zaps. Cette fonctionnalité 
                        rend l'IA accessible aux utilisateurs non techniques.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Cas d'usage idéaux</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Petites entreprises et indépendants</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Parfait pour les petites structures qui ont besoin d'automatiser rapidement des tâches 
                          simples sans expertise technique. La facilité d'utilisation et le plan gratuit rendent
                          Zapier idéal pour commencer avec l'automatisation.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Équipes marketing et commerciales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Les professionnels du marketing et des ventes peuvent facilement connecter leurs outils 
                          (comme Mailchimp, HubSpot, Salesforce) pour automatiser les campagnes, synchroniser 
                          les contacts et suivre les leads sans dépendre de l'équipe IT.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Automatisation d'intégrations SaaS</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Idéal pour connecter rapidement plusieurs applications SaaS populaires que votre entreprise 
                          utilise déjà. Zapier brille particulièrement dans les scénarios où vous avez besoin de connecter
                          de nombreuses applications différentes avec des workflows simples.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-muted/20">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Comment choisir la bonne plateforme</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Évaluez vos besoins techniques</h3>
                <p className="text-muted-foreground">
                  Analysez la complexité des workflows que vous souhaitez automatiser. Pour des automatisations simples 
                  sans logique conditionnelle complexe, Zapier sera parfait. Pour des workflows plus avancés impliquant 
                  des transformations de données complexes, préférez Make ou n8n.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Considérez les compétences disponibles</h3>
                <p className="text-muted-foreground">
                  Évaluez les compétences techniques de votre équipe. Zapier est accessible aux débutants complets, 
                  Make nécessite une certaine aisance avec les concepts de données, et n8n est plus adapté aux profils 
                  techniques familiers avec le code et les API.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Préoccupations de confidentialité des données</h3>
                <p className="text-muted-foreground">
                  Si vous manipulez des données sensibles ou si vous êtes soumis à des réglementations 
                  strictes (RGPD, HIPAA, etc.), n8n avec son option d'auto-hébergement offre le meilleur 
                  contrôle sur vos données.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Vérifiez les intégrations nécessaires</h3>
                <p className="text-muted-foreground">
                  Avant de choisir, assurez-vous que les applications et services que vous souhaitez connecter 
                  sont disponibles sur la plateforme. Zapier offre le plus grand nombre d'intégrations, mais 
                  Make et n8n compensent avec des options plus flexibles pour les connections personnalisées.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Budget et évolutivité</h3>
                <p className="text-muted-foreground">
                  Évaluez votre budget et anticipez la croissance future. Make offre généralement le meilleur 
                  rapport qualité-prix pour les workflows complexes, tandis que n8n peut être plus économique 
                  à grande échelle grâce à l'auto-hébergement. Zapier devient rapidement coûteux avec le volume.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Considérez une approche hybride</h3>
                <p className="text-muted-foreground">
                  De nombreuses entreprises adoptent une stratégie hybride, utilisant Zapier pour les automatisations 
                  simples accessibles à tous les employés, tout en implémentant Make ou n8n pour les workflows plus 
                  complexes gérés par l'équipe technique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">Besoin d'aide pour votre projet d'automatisation ?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nos experts peuvent vous accompagner dans le choix de la plateforme adaptée à vos besoins et dans la mise en place de workflows intelligents avec intégration d'IA.
            </p>
            
            <Button size="lg" asChild>
              <Link to="/contact" className="bg-primary hover:bg-primary/90">
                Demander une consultation gratuite
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AutomationPlatformComparison;

