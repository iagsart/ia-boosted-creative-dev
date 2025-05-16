
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AutomationHeader from "@/components/automation/AutomationHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Star, StarHalf } from "lucide-react";
import { Link } from "react-router-dom";

// Data import
import { 
  platformFeatures, 
  platformComparisons,
  platformUseCases
} from "@/data/automationData";

const AutomationPlatformComparison = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["n8n", "Make", "Zapier"]);
  
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
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-lg font-medium mb-3">Points forts</h3>
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
                          <h3 className="text-lg font-medium mb-3">Intégration IA</h3>
                          <p className="text-muted-foreground">{platform.aiIntegration}</p>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="text-lg font-medium mb-3">Tarification</h3>
                        <p className="text-muted-foreground">{platform.priceRange}</p>
                      </div>
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
