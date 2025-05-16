
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AutomationHeader from "@/components/automation/AutomationHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Star, StarHalf, Table, FileText, Users, BarChart4, Layers, Zap, Code } from "lucide-react";
import { Link } from "react-router-dom";

// Data import
import { 
  platformFeatures, 
  platformComparisons,
  platformUseCases
} from "@/data/automationData";

const AutomationPlatformComparison = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["n8n", "Make", "Zapier"]);
  const [activeTab, setActiveTab] = useState<string>("features");
  
  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
      }
    } else {
      if (selectedPlatforms.length < 4) {
        setSelectedPlatforms([...selectedPlatforms, platform]);
      }
    }
  };

  // Helper for rendering rating stars (1-5)
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-primary text-primary" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-primary/70 text-primary" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-muted-foreground/30" />);
    }
    
    return <div className="flex items-center">{stars}</div>;
  };

  return (
    <Layout>
      <AutomationHeader 
        title="Comparatif des Plateformes d'Automatisation"
        subtitle="Trouvez la solution d'automatisation parfaite pour vos besoins spécifiques en IA et intégration de systèmes"
        showButtons={false}
      />
      
      {/* Introduction */}
      <section className="py-12 bg-accent/10">
        <div className="container max-w-5xl">
          <div className="bg-background border border-border p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-medium mb-4">Comment choisir votre plateforme d'automatisation ?</h2>
            <p className="text-muted-foreground mb-4">
              Le choix d'une plateforme d'automatisation est une décision stratégique qui dépend de nombreux facteurs : vos besoins techniques, 
              votre budget, les systèmes que vous souhaitez connecter, et vos objectifs à long terme. 
              Ce comparatif vous aide à trouver la solution idéale en fonction de vos critères spécifiques.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild variant="outline" size="sm">
                <Link to="/automatisation" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Retour à l'automatisation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Platform Selection */}
      <section className="py-12">
        <div className="container max-w-5xl">
          <SectionTitle
            title="Plateformes à comparer"
            subtitle="Sélectionnez jusqu'à 4 plateformes pour les comparer"
            centered
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
            {platformComparisons.map((platform) => (
              <button
                key={platform.name}
                onClick={() => togglePlatform(platform.name)}
                className={`p-4 rounded-lg border transition-all ${
                  selectedPlatforms.includes(platform.name)
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background hover:bg-accent/5'
                }`}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                    {platform.name.slice(0, 1)}
                  </div>
                  <div className="font-medium">{platform.name}</div>
                  <div className="text-xs text-muted-foreground truncate max-w-full">
                    {platform.priceRange}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-5xl">
          <SectionTitle
            title="Comparaison des fonctionnalités"
            subtitle="Évaluation comparative des principales caractéristiques"
            centered
          />
          
          <div className="overflow-x-auto mt-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-background">
                  <th className="p-3 text-left border-b min-w-[200px]">Fonctionnalité</th>
                  {selectedPlatforms.map(platform => (
                    <th key={platform} className="p-3 text-center border-b min-w-[120px]">{platform}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {platformFeatures.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-accent/5'}>
                    <td className="p-3 border-b">
                      <div className="font-medium">{feature.name}</div>
                      <div className="text-xs text-muted-foreground">{feature.description}</div>
                    </td>
                    {selectedPlatforms.map(platform => (
                      <td key={`${platform}-${feature.name}`} className="p-3 text-center border-b">
                        {renderRating(feature.platforms[platform as keyof typeof feature.platforms] || 0)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Platform Details */}
      <section className="py-12">
        <div className="container max-w-5xl">
          <SectionTitle
            title="Détail des plateformes"
            subtitle="Forces, faiblesses et cas d'usage idéaux pour chaque solution"
            centered
          />
          
          <Tabs defaultValue={selectedPlatforms[0]} className="mt-8">
            <TabsList className="flex flex-wrap mb-6">
              {selectedPlatforms.map(platform => (
                <TabsTrigger key={platform} value={platform}>{platform}</TabsTrigger>
              ))}
            </TabsList>
            
            {selectedPlatforms.map(platformName => {
              const platform = platformComparisons.find(p => p.name === platformName);
              if (!platform) return null;
              
              return (
                <TabsContent key={platform.name} value={platform.name} className="space-y-8">
                  <Card>
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl">{platform.name}</CardTitle>
                          <CardDescription className="text-base mt-2">
                            {platform.description}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="text-sm">
                          {platform.pricingModel}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* Navigation interne pour le détail de la plateforme */}
                      <Tabs defaultValue="overview" className="mb-6">
                        <TabsList className="mb-4">
                          <TabsTrigger value="overview" className="flex gap-2 items-center">
                            <FileText className="h-4 w-4" /> Vue d'ensemble
                          </TabsTrigger>
                          <TabsTrigger value="technical" className="flex gap-2 items-center">
                            <Code className="h-4 w-4" /> Technique
                          </TabsTrigger>
                          <TabsTrigger value="usecases" className="flex gap-2 items-center">
                            <Users className="h-4 w-4" /> Cas d'usage
                          </TabsTrigger>
                          <TabsTrigger value="pricing" className="flex gap-2 items-center">
                            <BarChart4 className="h-4 w-4" /> Tarifs
                          </TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="overview">
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                                <Check className="h-5 w-5 text-primary" /> Points forts
                              </h3>
                              <ul className="space-y-2">
                                {platform.strongPoints.map((point, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-medium mb-3">Limitations</h3>
                              <ul className="space-y-2">
                                {platform.weakPoints.map((point, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-muted-foreground shrink-0">•</span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-8">
                            <h3 className="text-lg font-medium mb-3">Intégration IA</h3>
                            <div className="bg-accent/10 p-4 rounded-lg">
                              <p className="text-muted-foreground">{platform.aiIntegration}</p>
                              {platform.name === "n8n" && (
                                <div className="mt-4">
                                  <h4 className="font-medium mb-2">Nœuds IA disponibles :</h4>
                                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    <Badge variant="secondary">OpenAI</Badge>
                                    <Badge variant="secondary">Anthropic Claude</Badge>
                                    <Badge variant="secondary">Hugging Face</Badge>
                                    <Badge variant="secondary">Stability AI</Badge>
                                    <Badge variant="secondary">Google AI</Badge>
                                    <Badge variant="secondary">Custom AI</Badge>
                                  </div>
                                </div>
                              )}
                              {platform.name === "Make" && (
                                <div className="mt-4">
                                  <h4 className="font-medium mb-2">Modules IA disponibles :</h4>
                                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    <Badge variant="secondary">OpenAI</Badge>
                                    <Badge variant="secondary">GPT-4</Badge>
                                    <Badge variant="secondary">DALL-E</Badge>
                                    <Badge variant="secondary">Midjourney</Badge>
                                    <Badge variant="secondary">Azure AI</Badge>
                                    <Badge variant="secondary">Moteurs IA personnalisés</Badge>
                                  </div>
                                </div>
                              )}
                              {platform.name === "Zapier" && (
                                <div className="mt-4">
                                  <h4 className="font-medium mb-2">Fonctionnalités IA disponibles :</h4>
                                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    <Badge variant="secondary">OpenAI</Badge>
                                    <Badge variant="secondary">AI Writer</Badge>
                                    <Badge variant="secondary">AI Summarizer</Badge>
                                    <Badge variant="secondary">AI Translator</Badge>
                                    <Badge variant="secondary">Image Generator</Badge>
                                    <Badge variant="secondary">ChatGPT Zaps</Badge>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="mt-8 grid md:grid-cols-2 gap-8">
                            <div>
                              <h3 className="text-lg font-medium mb-3">Idéal pour</h3>
                              <div className="flex flex-wrap gap-2">
                                {platform.bestFor.map((use, i) => (
                                  <Badge key={i} variant="secondary">{use}</Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-medium mb-3">Points différenciateurs</h3>
                              <ul className="space-y-2">
                                {platform.name === "n8n" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                      <span>Auto-hébergement complet pour la souveraineté des données</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                      <span>Flexibilité de développement avec du code JavaScript</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                      <span>Version communautaire gratuite et open-source</span>
                                    </li>
                                  </>
                                )}
                                {platform.name === "Make" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                      <span>Interface visuelle la plus intuitive et flexible</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                      <span>Manipulations de données avancées sans code</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                      <span>Excellent rapport fonctionnalités/prix</span>
                                    </li>
                                  </>
                                )}
                                {platform.name === "Zapier" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                      <span>Catalogue d'intégrations le plus vaste (5000+)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                      <span>Simplicité ultime pour les non-techniciens</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                      <span>Assistance clientèle premium</span>
                                    </li>
                                  </>
                                )}
                              </ul>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="technical">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-medium mb-3 flex gap-2">
                                <Layers className="h-5 w-5 text-primary" />
                                Architecture technique
                              </h3>
                              
                              {platform.name === "n8n" && (
                                <>
                                  <p className="mb-4">n8n est construit sur une architecture Node.js avec une approche modulaire permettant une grande extensibilité :</p>
                                  <ul className="list-disc pl-5 space-y-2 mb-4">
                                    <li>Backend en TypeScript/Node.js</li>
                                    <li>Frontend en Vue.js avec une interface de workflow basée sur une canvas</li>
                                    <li>Architecture de plugins facilement extensible</li>
                                    <li>Support natif pour les webhooks, les files d'attente et l'exécution asynchrone</li>
                                    <li>Options d'exécution multiples : serveur dédié, conteneur Docker, cluster Kubernetes</li>
                                  </ul>
                                  <div className="bg-accent/10 p-4 rounded-lg mt-4">
                                    <h4 className="font-medium mb-2">Architecture de sécurité :</h4>
                                    <p>n8n propose un système de gestion des informations d'identification chiffré pour stocker en toute sécurité les clés API et autres secrets. En mode auto-hébergé, vous contrôlez entièrement le stockage et la transmission des données, ce qui en fait un excellent choix pour les organisations avec des exigences élevées en matière de confidentialité.</p>
                                  </div>
                                </>
                              )}
                              
                              {platform.name === "Make" && (
                                <>
                                  <p className="mb-4">Make (anciennement Integromat) utilise une architecture cloud propriétaire avec un système extrêmement robuste de manipulation de données :</p>
                                  <ul className="list-disc pl-5 space-y-2 mb-4">
                                    <li>Infrastructure cloud distribuée pour une haute disponibilité</li>
                                    <li>Moteur de traitement de données propriétaire</li>
                                    <li>Interface visuelle avancée avec capacité de suivi en temps réel</li>
                                    <li>Système de traitement par lot optimisé pour la performance</li>
                                    <li>Architecture d'API RESTful pour les intégrations personnalisées</li>
                                  </ul>
                                  <div className="bg-accent/10 p-4 rounded-lg mt-4">
                                    <h4 className="font-medium mb-2">Fonctionnalités techniques avancées :</h4>
                                    <p>Make se distingue par son système visuel de transformation de données qui permet des manipulations complexes sans code. Son architecture inclut un système de mémoire intermédiaire sophistiqué qui facilite le transfert efficace de données entre les étapes du scénario.</p>
                                  </div>
                                </>
                              )}
                              
                              {platform.name === "Zapier" && (
                                <>
                                  <p className="mb-4">Zapier est construit sur une architecture cloud multi-tenant avec une forte emphase sur la simplicité et la fiabilité :</p>
                                  <ul className="list-disc pl-5 space-y-2 mb-4">
                                    <li>Infrastructure cloud AWS hautement évolutive</li>
                                    <li>Architecture orientée service (SOA)</li>
                                    <li>API REST pour le développement d'intégrations</li>
                                    <li>Interface simplifiée à faible courbe d'apprentissage</li>
                                    <li>Système de déclencheurs et d'actions standardisé</li>
                                  </ul>
                                  <div className="bg-accent/10 p-4 rounded-lg mt-4">
                                    <h4 className="font-medium mb-2">Plateforme de développement :</h4>
                                    <p>Zapier offre une plateforme de développement qui permet aux développeurs de créer des intégrations d'applications personnalisées via leur Developer Platform. Cette approche standardisée facilite l'ajout de nouvelles applications à l'écosystème Zapier et explique en partie pourquoi ils disposent du catalogue d'intégrations le plus vaste.</p>
                                  </div>
                                </>
                              )}
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-medium mb-3 flex gap-2">
                                <Zap className="h-5 w-5 text-primary" />
                                Capacités de développement
                              </h3>
                              
                              <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                  <thead>
                                    <tr className="bg-background">
                                      <th className="p-3 text-left border-b">Fonctionnalité</th>
                                      <th className="p-3 text-center border-b">Disponibilité</th>
                                      <th className="p-3 text-left border-b">Détails</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {platform.name === "n8n" && (
                                      <>
                                        <tr className="bg-background">
                                          <td className="p-3 border-b font-medium">Code personnalisé</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">JavaScript/TypeScript natif avec Node.js</td>
                                        </tr>
                                        <tr className="bg-accent/5">
                                          <td className="p-3 border-b font-medium">API REST</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">API complète pour la gestion des workflows et exécutions</td>
                                        </tr>
                                        <tr className="bg-background">
                                          <td className="p-3 border-b font-medium">Webhook</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">Webhooks entrants et sortants avancés avec authentification</td>
                                        </tr>
                                        <tr className="bg-accent/5">
                                          <td className="p-3 border-b font-medium">Création de nœuds personnalisés</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">SDK complet pour développer des nœuds personnalisés</td>
                                        </tr>
                                        <tr className="bg-background">
                                          <td className="p-3 border-b font-medium">Accès aux bases de données</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">Nœuds natifs pour SQL, NoSQL et exécution de requêtes</td>
                                        </tr>
                                      </>
                                    )}
                                    {platform.name === "Make" && (
                                      <>
                                        <tr className="bg-background">
                                          <td className="p-3 border-b font-medium">Code personnalisé</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">Module JavaScript avec environnement contrôlé</td>
                                        </tr>
                                        <tr className="bg-accent/5">
                                          <td className="p-3 border-b font-medium">API REST</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">API pour la gestion des scénarios et création de webhooks</td>
                                        </tr>
                                        <tr className="bg-background">
                                          <td className="p-3 border-b font-medium">Webhook</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">Webhooks personnalisables avec paramètres dynamiques</td>
                                        </tr>
                                        <tr className="bg-accent/5">
                                          <td className="p-3 border-b font-medium">Création de modules personnalisés</td>
                                          <td className="p-3 text-center border-b text-amber-500">Limité</td>
                                          <td className="p-3 border-b">Modules HTTP et API uniquement, pas de modules natifs</td>
                                        </tr>
                                        <tr className="bg-background">
                                          <td className="p-3 border-b font-medium">Accès aux bases de données</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">Connecteurs natifs et requêtes SQL/NoSQL</td>
                                        </tr>
                                      </>
                                    )}
                                    {platform.name === "Zapier" && (
                                      <>
                                        <tr className="bg-background">
                                          <td className="p-3 border-b font-medium">Code personnalisé</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">Python et JavaScript dans l'étape Code</td>
                                        </tr>
                                        <tr className="bg-accent/5">
                                          <td className="p-3 border-b font-medium">API REST</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">API pour la gestion des zaps (plans payants)</td>
                                        </tr>
                                        <tr className="bg-background">
                                          <td className="p-3 border-b font-medium">Webhook</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">Webhooks simples sans authentification avancée</td>
                                        </tr>
                                        <tr className="bg-accent/5">
                                          <td className="p-3 border-b font-medium">Création d'intégrations personnalisées</td>
                                          <td className="p-3 text-center border-b text-green-500">Oui</td>
                                          <td className="p-3 border-b">Via Zapier Platform ou CLI pour développeurs</td>
                                        </tr>
                                        <tr className="bg-background">
                                          <td className="p-3 border-b font-medium">Accès aux bases de données</td>
                                          <td className="p-3 text-center border-b text-amber-500">Limité</td>
                                          <td className="p-3 border-b">Via intégrations tierces ou personnalisées</td>
                                        </tr>
                                      </>
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="usecases">
                          <div className="grid gap-6">
                            <div>
                              <h3 className="text-lg font-medium mb-4 flex gap-2">
                                <Users className="h-5 w-5 text-primary" /> 
                                Cas d'usage privilégiés
                              </h3>
                              
                              <div className="grid md:grid-cols-2 gap-6">
                                {platform.name === "n8n" && (
                                  <>
                                    <Card>
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Automatisation IA avec données sensibles</CardTitle>
                                      </CardHeader>
                                      <CardContent className="text-sm text-muted-foreground">
                                        <p className="mb-2">Parfait pour les entreprises soumises au RGPD ou avec des exigences strictes de confidentialité qui veulent combiner IA et automatisation.</p>
                                        <Badge variant="outline" className="mt-2">Auto-hébergement</Badge>
                                      </CardContent>
                                    </Card>
                                    
                                    <Card>
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Développement d'API complexes</CardTitle>
                                      </CardHeader>
                                      <CardContent className="text-sm text-muted-foreground">
                                        <p className="mb-2">Création de middlewares intelligents et orchestration d'API avec traitement IA sans code supplémentaire.</p>
                                        <Badge variant="outline" className="mt-2">Low-code</Badge>
                                      </CardContent>
                                    </Card>
                                    
                                    <Card>
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">ETL et traitement de données</CardTitle>
                                      </CardHeader>
                                      <CardContent className="text-sm text-muted-foreground">
                                        <p className="mb-2">Intégration, transformation et chargement de données avec capacités d'analyse IA intégrées.</p>
                                        <Badge variant="outline" className="mt-2">Data Engineering</Badge>
                                      </CardContent>
                                    </Card>
                                    
                                    <Card>
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Intégration systèmes legacy</CardTitle>
                                      </CardHeader>
                                      <CardContent className="text-sm text-muted-foreground">
                                        <p className="mb-2">Connexion de systèmes anciens sans API modernes via des adaptateurs personnalisés.</p>
                                        <Badge variant="outline" className="mt-2">Personnalisation</Badge>
                                      </CardContent>
                                    </Card>
                                  </>
                                )}
                                
                                {platform.name === "Make" && (
                                  <>
                                    <Card>
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Automatisation marketing multicanal</CardTitle>
                                      </CardHeader>
                                      <CardContent className="text-sm text-muted-foreground">
                                        <p className="mb-2">Orchestration de campagnes cross-canal avec personnalisation IA et segmentation avancée.</p>
                                        <Badge variant="outline" className="mt-2">Marketing</Badge>
                                      </CardContent>
                                    </Card>
                                    
                                    <Card>
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Traitement documentaire intelligent</CardTitle>
                                      </CardHeader>
                                      <CardContent className="text-sm text-muted-foreground">
                                        <p className="mb-2">Extraction de données de documents via OCR et IA pour automatiser le traitement administratif.</p>
                                        <Badge variant="outline" className="mt-2">Document Processing</Badge>
                                      </CardContent>
                                    </Card>
                                    
                                    <Card>
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Workflows e-commerce avancés</CardTitle>
                                      </CardHeader>
                                      <CardContent className="text-sm text-muted-foreground">
                                        <p className="mb-2">Automatisation de boutiques en ligne avec recommandations produits IA et gestion intelligente des stocks.</p>
                                        <Badge variant="outline" className="mt-2">E-commerce</Badge>
                                      </CardContent>
                                    </Card>
                                    
                                    <Card>
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Création de contenu automatisée</CardTitle>
                                      </CardHeader>
                                      <CardContent className="text-sm text-muted-foreground">
                                        <p className="mb-2">Génération et distribution de contenu IA via multiple plateformes avec personnalisation contextuelle.</p>
                                        <Badge variant="outline" className="mt-2">Content Marketing</Badge>
                                      </CardContent>
                                    </Card>
                                  </>
                                )}
                                
                                {platform.name === "Zapier" && (
                                  <>
                                    <Card>
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Automatisation bureautique simple</CardTitle>
                                      </CardHeader>
                                      <CardContent className="text-sm text-muted-foreground">
                                        <p className="mb-2">Idéal pour les tâches administratives quotidiennes des équipes non-techniques avec intégrations SaaS.</p>
                                        <Badge variant="outline" className="mt-2">Productivité</Badge>
                                      </CardContent>
                                    </Card>
                                    
                                    <Card>
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Automatisation CRM</CardTitle>
                                      </CardHeader>
                                      <CardContent className="text-sm text-muted-foreground">
                                        <p className="mb-2">Synchronisation de données clients entre systèmes et automatisation du suivi des prospects.</p>
                                        <Badge variant="outline" className="mt-2">Sales</Badge>
                                      </CardContent>
                                    </Card>
                                    
                                    <Card>
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Intégration d'outils SaaS</CardTitle>
                                      </CardHeader>
                                      <CardContent className="text-sm text-muted-foreground">
                                        <p className="mb-2">Connexion rapide entre applications cloud populaires sans développement.</p>
                                        <Badge variant="outline" className="mt-2">SaaS</Badge>
                                      </CardContent>
                                    </Card>
                                    
                                    <Card>
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">Support client automatisé</CardTitle>
                                      </CardHeader>
                                      <CardContent className="text-sm text-muted-foreground">
                                        <p className="mb-2">Automatisation des tickets support et notification des équipes avec IA pour catégorisation.</p>
                                        <Badge variant="outline" className="mt-2">Support Client</Badge>
                                      </CardContent>
                                    </Card>
                                  </>
                                )}
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <h3 className="text-lg font-medium mb-4">Exemples de projets réels</h3>
                              
                              {platform.name === "n8n" && (
                                <div className="bg-accent/10 p-4 rounded-lg">
                                  <h4 className="font-medium mb-2">Cas d'usage : RAG sur documentation interne</h4>
                                  <p className="mb-4">Une entreprise de services financiers utilise n8n pour créer un système RAG (Retrieval Augmented Generation) qui connecte leur documentation interne à OpenAI. Le workflow extrait automatiquement les informations des documents internes, les transforme en embeddings vectoriels, et utilise ces données pour enrichir les prompts envoyés à l'API OpenAI.</p>
                                  <p>L'avantage principal est la souveraineté des données sensibles qui restent sur leur infrastructure propre, tout en bénéficiant de l'IA générative.</p>
                                </div>
                              )}
                              
                              {platform.name === "Make" && (
                                <div className="bg-accent/10 p-4 rounded-lg">
                                  <h4 className="font-medium mb-2">Cas d'usage : Marketing multicanal avec personnalisation IA</h4>
                                  <p className="mb-4">Une agence marketing utilise Make pour orchestrer des campagnes personnalisées en temps réel. Le workflow capture les interactions client sur le site web, analyse le comportement via un modèle IA, crée des segments dynamiques, puis déclenche des communications personnalisées via email, SMS et notifications push.</p>
                                  <p>Make a été choisi pour sa capacité à traiter des données complexes et à orchestrer plusieurs canaux sans code spécifique.</p>
                                </div>
                              )}
                              
                              {platform.name === "Zapier" && (
                                <div className="bg-accent/10 p-4 rounded-lg">
                                  <h4 className="font-medium mb-2">Cas d'usage : Automatisation du support client</h4>
                                  <p className="mb-4">Une startup e-commerce utilise Zapier pour automatiser son workflow de support client. Quand un ticket arrive dans Zendesk, Zapier l'analyse avec ChatGPT pour détecter le sentiment client et la catégorie du problème, puis le route automatiquement vers le bon département tout en envoyant une réponse préliminaire personnalisée.</p>
                                  <p>L'équipe non-technique a pu implémenter cette solution en quelques heures sans assistance développeur.</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="pricing">
                          <div className="space-y-6">
                            <h3 className="text-lg font-medium mb-3">Structure tarifaire</h3>
                            
                            {platform.name === "n8n" && (
                              <>
                                <p className="mb-4">{platform.priceRange}</p>
                                
                                <div className="grid md:grid-cols-3 gap-4">
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Community</CardTitle>
                                      <CardDescription className="text-xl font-bold">Gratuit</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                      <ul className="space-y-1">
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Auto-hébergement</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Fonctionnalités essentielles</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Open-source</span>
                                        </li>
                                      </ul>
                                    </CardContent>
                                  </Card>
                                  
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Teams</CardTitle>
                                      <CardDescription className="text-xl font-bold">89€ /mois</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                      <ul className="space-y-1">
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Cloud ou auto-hébergé</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Utilisateurs illimités</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>20k exécutions/mois</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Collaboration et versioning</span>
                                        </li>
                                      </ul>
                                    </CardContent>
                                  </Card>
                                  
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Enterprise</CardTitle>
                                      <CardDescription className="text-xl font-bold">Sur devis</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                      <ul className="space-y-1">
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Déploiement personnalisé</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Exécutions illimitées</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Support dédié</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>SLA personnalisé</span>
                                        </li>
                                      </ul>
                                    </CardContent>
                                  </Card>
                                </div>
                                
                                <div className="bg-accent/10 p-4 rounded-lg mt-6">
                                  <h4 className="font-medium mb-2">Modèle de tarification:</h4>
                                  <p>Le prix de n8n est basé principalement sur le volume d'exécutions mensuelles, avec des fonctionnalités additionnelles comme la gestion des équipes et la collaboration. Pour l'auto-hébergement, les coûts d'infrastructure sont à votre charge.</p>
                                </div>
                              </>
                            )}
                            
                            {platform.name === "Make" && (
                              <>
                                <p className="mb-4">{platform.priceRange}</p>
                                
                                <div className="grid md:grid-cols-4 gap-4">
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Free</CardTitle>
                                      <CardDescription className="text-xl font-bold">Gratuit</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                      <ul className="space-y-1">
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>1000 opérations/mois</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>2 scénarios actifs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Stockage 100 MB</span>
                                        </li>
                                      </ul>
                                    </CardContent>
                                  </Card>
                                  
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Core</CardTitle>
                                      <CardDescription className="text-xl font-bold">9$ /mois</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                      <ul className="space-y-1">
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>10 000 opérations/mois</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>3 scénarios actifs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>1 GB stockage</span>
                                        </li>
                                      </ul>
                                    </CardContent>
                                  </Card>
                                  
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Pro</CardTitle>
                                      <CardDescription className="text-xl font-bold">16$ /mois</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                      <ul className="space-y-1">
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>10 000 opérations/mois</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>10 scénarios actifs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>5 GB stockage</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Files et mises en file d'attente</span>
                                        </li>
                                      </ul>
                                    </CardContent>
                                  </Card>
                                  
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Teams</CardTitle>
                                      <CardDescription className="text-xl font-bold">29$ /mois</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                      <ul className="space-y-1">
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>25 000 opérations/mois</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>25 scénarios actifs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>15 GB stockage</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Connexion d'équipe</span>
                                        </li>
                                      </ul>
                                    </CardContent>
                                  </Card>
                                </div>
                                
                                <div className="bg-accent/10 p-4 rounded-lg mt-6">
                                  <h4 className="font-medium mb-2">Coûts additionnels:</h4>
                                  <p>Make propose des packs additionnels pour augmenter le nombre d'opérations (à partir de 9$/10 000 opérations) ou le nombre de scénarios actifs. Des plans Enterprise sont disponibles sur devis pour les besoins plus importants avec un support dédié.</p>
                                </div>
                              </>
                            )}
                            
                            {platform.name === "Zapier" && (
                              <>
                                <p className="mb-4">{platform.priceRange}</p>
                                
                                <div className="grid md:grid-cols-4 gap-4">
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Free</CardTitle>
                                      <CardDescription className="text-xl font-bold">Gratuit</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                      <ul className="space-y-1">
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>100 tâches/mois</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>5 Zaps actifs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Mise à jour toutes les 15 min</span>
                                        </li>
                                      </ul>
                                    </CardContent>
                                  </Card>
                                  
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Starter</CardTitle>
                                      <CardDescription className="text-xl font-bold">19.99$ /mois</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                      <ul className="space-y-1">
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>750 tâches/mois</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>20 Zaps actifs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Mise à jour toutes les 2 min</span>
                                        </li>
                                      </ul>
                                    </CardContent>
                                  </Card>
                                  
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Professional</CardTitle>
                                      <CardDescription className="text-xl font-bold">49$ /mois</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                      <ul className="space-y-1">
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>2 000 tâches/mois</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Zaps illimités</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Mise à jour toutes les 1 min</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Zaps multi-étapes</span>
                                        </li>
                                      </ul>
                                    </CardContent>
                                  </Card>
                                  
                                  <Card>
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-lg">Team</CardTitle>
                                      <CardDescription className="text-xl font-bold">69$ /mois</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                      <ul className="space-y-1">
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>50 000 tâches/mois</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Zaps illimités</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Dossiers partagés</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                                          <span>Gestion d'équipe</span>
                                        </li>
                                      </ul>
                                    </CardContent>
                                  </Card>
                                </div>
                                
                                <div className="bg-accent/10 p-4 rounded-lg mt-6">
                                  <h4 className="font-medium mb-2">Note sur la tarification:</h4>
                                  <p>Une "tâche" dans Zapier représente chaque action effectuée dans un Zap. Les plans plus élevés offrent également des fonctionnalités comme les mises à jour plus fréquentes, des fonctionnalités premium comme les filtres conditionnels avancés et l'accès à des applications premium.</p>
                                </div>
                              </>
                            )}
                            
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-12 bg-accent/10">
        <div className="container max-w-5xl">
          <SectionTitle
            title="Recommandations par cas d'usage"
            subtitle="Trouvez la plateforme idéale pour vos besoins spécifiques"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {Object.keys(platformUseCases).map((key) => {
              const useCase = platformUseCases[key as keyof typeof platformUseCases];
              return (
                <Card key={key} className="h-full">
                  <CardHeader>
                    <CardTitle>{useCase.title}</CardTitle>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Plateformes recommandées :</h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.recommended.map((platform, i) => (
                          <Badge key={i} variant="secondary" className="bg-primary/10">{platform}</Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{useCase.explanation}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Decision Guide */}
      <section className="py-12">
        <div className="container max-w-5xl">
          <SectionTitle
            title="Guide de décision"
            subtitle="Comment choisir la plateforme d'automatisation idéale"
            centered
          />
          
          <div className="mt-8 bg-background p-6 border border-border rounded-lg">
            <h3 className="text-xl font-medium mb-4">Critères essentiels à considérer</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">1. Compétences techniques</h4>
                <p className="text-muted-foreground">
                  Évaluez honnêtement le niveau technique de votre équipe. Si vous avez peu de compétences techniques, 
                  privilégiez Zapier ou Make. Si vous avez des développeurs, n8n ou Pipedream offriront plus de flexibilité.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">2. Budget</h4>
                <p className="text-muted-foreground">
                  Les solutions varient considérablement en prix. n8n permet l'auto-hébergement gratuit (hors coûts serveur), 
                  Make et Zapier ont des plans gratuits limités, tandis que Workato et Tray.io sont des solutions enterprise premium.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">3. Volume d'automatisations</h4>
                <p className="text-muted-foreground">
                  Pour des volumes importants (millions d'opérations), les solutions enterprise comme Workato ou Tray.io seront plus adaptées. 
                  Pour des volumes modérés, Make offre généralement le meilleur rapport performance/prix.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">4. Confidentialité des données</h4>
                <p className="text-muted-foreground">
                  Si la souveraineté des données est critique (ex: données sensibles, contraintes réglementaires), 
                  n8n est pratiquement la seule option viable grâce à l'auto-hébergement complet.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">5. Écosystème existant</h4>
                <p className="text-muted-foreground">
                  Si votre entreprise utilise massivement Microsoft 365, Power Automate peut offrir une intégration supérieure. 
                  Analysez vos systèmes actuels et vérifiez les intégrations disponibles pour chaque plateforme.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-4">Notre recommandation</h3>
              <p className="text-muted-foreground mb-4">
                Pour la plupart des cas d'usage combinant IA et automatisation, nous recommandons souvent de commencer avec 
                <strong> Make (Integromat)</strong> pour les équipes non-techniques ou <strong>n8n</strong> pour les équipes avec 
                des compétences techniques. Make offre un excellent équilibre entre facilité d'utilisation et puissance, 
                tandis que n8n propose la plus grande flexibilité technique et le contrôle des données.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link to="/contact">Discuter de votre projet d'automatisation</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Expert Resources */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-5xl">
          <SectionTitle
            title="Ressources et formation"
            subtitle="Pour approfondir vos connaissances sur ces plateformes"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="text-lg font-medium mb-3">Tutoriels vidéo</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Nous proposons des tutoriels détaillés pour chaque plateforme, du niveau débutant à avancé.
              </p>
              <Button variant="secondary" className="w-full" asChild>
                <Link to="/resources">Accéder aux tutoriels</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="text-lg font-medium mb-3">Formation personnalisée</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sessions de formation adaptées à vos besoins spécifiques et à votre plateforme choisie.
              </p>
              <Button variant="secondary" className="w-full" asChild>
                <Link to="/contact">Demander un devis</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <h3 className="text-lg font-medium mb-3">Audit de workflow</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Analyse de vos besoins et recommandation personnalisée de la plateforme idéale.
              </p>
              <Button variant="secondary" className="w-full" asChild>
                <Link to="/contact">Prendre rendez-vous</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AutomationPlatformComparison;

