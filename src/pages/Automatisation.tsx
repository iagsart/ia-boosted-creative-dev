
import React from 'react';
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, Bot, CheckCircle, ExternalLink, LucideIcon, PlayCircle, Workflow, Zap } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Link } from "react-router-dom";

interface TechCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  examples?: string[];
}

const TechCard = ({ title, description, icon: Icon, examples }: TechCardProps) => (
  <Card className="h-full">
    <CardHeader className="pb-3">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardHeader>
    {examples && examples.length > 0 && (
      <CardContent className="pt-0">
        <div className="space-y-1">
          {examples.map((example, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-muted-foreground">{example}</span>
            </div>
          ))}
        </div>
      </CardContent>
    )}
  </Card>
);

interface WorkflowExampleProps {
  title: string;
  description: string;
  imageUrl?: string;
  tools?: string[];
}

const WorkflowExample = ({ title, description, tools }: WorkflowExampleProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="border border-border rounded-lg p-5 hover:border-primary/50 hover:bg-accent/50 transition-all duration-300"
  >
    <div className="flex gap-4 items-start">
      <div className="p-3 bg-primary/10 rounded-full">
        <Workflow className="h-6 w-6 text-primary" />
      </div>
      <div className="space-y-1.5">
        <h4 className="font-medium text-lg">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
        
        {tools && tools.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tools.map((tool, i) => (
              <Badge key={i} variant="secondary" className="font-normal">{tool}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const AdvantageCard = ({ title, description, icon: Icon }: AdvantageCardProps) => (
  <Card className="h-full bg-gradient-to-br from-background to-accent/20 backdrop-blur-sm border border-accent/20">
    <CardHeader className="pb-3">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const Automatisation = () => {
  return (
    <Layout>
      <PageHeader
        title="IA & Automatisation"
        subtitle="Combinez la puissance de l'Intelligence Artificielle avec l'automatisation des flux de travail pour transformer vos processus métier."
        backgroundEffect="gradient"
      >
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button asChild size="lg">
            <Link to="/contact">
              Discuter de votre projet <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#exemples">
              Voir des exemples <PlayCircle className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </PageHeader>

      {/* Introduction section */}
      <section className="py-16 bg-accent/10">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">Décuplez la Puissance de vos Automatisations</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                L'intégration de l'Intelligence Artificielle dans les plateformes d'automatisation comme n8n, Make (anciennement Integromat) ou Zapier transforme radicalement leur potentiel. 
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Passez d'automatisations basées sur des règles simples à des workflows capables de "comprendre", d'analyser et d'agir de manière contextuelle et intelligente.
              </p>
              <div className="flex flex-wrap gap-2 mt-8">
                <Badge variant="secondary" className="text-sm py-1">n8n</Badge>
                <Badge variant="secondary" className="text-sm py-1">Make (Integromat)</Badge>
                <Badge variant="secondary" className="text-sm py-1">Zapier</Badge>
                <Badge variant="secondary" className="text-sm py-1">Microsoft Power Automate</Badge>
                <Badge variant="secondary" className="text-sm py-1">OpenAI</Badge>
                <Badge variant="secondary" className="text-sm py-1">Google AI</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl flex items-center justify-center">
                <Zap className="h-24 w-24 text-primary/70" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-background p-4 rounded-lg shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <Bot className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-medium">Des workflows intelligents</div>
                    <div className="text-sm text-muted-foreground">Automatisation + AI = Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages section */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <SectionTitle 
            title="Avantages de Combiner IA et Automatisation" 
            subtitle="Transformez radicalement vos processus métiers en exploitant le potentiel de l'IA"
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <AdvantageCard 
              title="Prise de Décision Améliorée" 
              description="L'IA analyse les données et prend des décisions contextuelles dans vos workflows (catégorisation, sentiment, priorité)."
              icon={Bot}
            />
            <AdvantageCard 
              title="Traitement Intelligent" 
              description="Extraction d'informations précieuses à partir de données non structurées (textes, images, vidéos, audio)."
              icon={Bot}
            />
            <AdvantageCard 
              title="Personnalisation à Grande Échelle" 
              description="Adaptez communications et actions automatiquement selon le profil et comportement de chaque utilisateur."
              icon={Bot}
            />
            <AdvantageCard 
              title="Efficacité Opérationnelle" 
              description="Automatisez des tâches complexes nécessitant habituellement une intervention humaine pour l'interprétation."
              icon={Zap}
            />
            <AdvantageCard 
              title="Réduction des Erreurs" 
              description="L'IA effectue des tâches répétitives avec précision, même sur de grands volumes de données."
              icon={CheckCircle}
            />
            <AdvantageCard 
              title="Innovation dans les Services" 
              description="Créez de nouvelles offres basées sur des capacités intelligentes (chatbots avancés, recommandations)."
              icon={Bot}
            />
          </div>
        </div>
      </section>

      {/* Technologies section */}
      <section className="py-16 bg-secondary/10">
        <div className="container max-w-5xl">
          <SectionTitle 
            title="Technologies d'IA pour l'Intégration" 
            subtitle="Les API et services qui transforment vos automatisations en workflows intelligents"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <TechCard 
              title="Traitement du Langage Naturel (NLP)" 
              description="Compréhension et génération de contenu textuel intelligent"
              icon={Bot}
              examples={[
                "OpenAI (GPT-4, GPT-3.5) : génération de texte, résumé, traduction",
                "Google Cloud Vertex AI : analyse de sentiment, classification",
                "Hugging Face Transformers : modèles pré-entraînés spécialisés"
              ]}
            />
            <TechCard 
              title="Vision par Ordinateur" 
              description="Analyse et compréhension d'images et de vidéos"
              icon={Bot}
              examples={[
                "Google Cloud Vision AI : reconnaissance d'objets, OCR",
                "Amazon Rekognition : détection de visages, modération de contenu",
                "Microsoft Azure Computer Vision : analyse d'images et vidéos"
              ]}
            />
            <TechCard 
              title="Traitement Audio" 
              description="Transcription, analyse et synthèse de la parole"
              icon={Bot}
              examples={[
                "Google Cloud Speech-to-Text : transcription audio précise",
                "AssemblyAI : transcription et compréhension avancées",
                "ElevenLabs : synthèse vocale ultra-réaliste et clonage de voix"
              ]}
            />
            <TechCard 
              title="Traduction Automatique" 
              description="Traduction intelligente et contextuelle entre langues"
              icon={Bot}
              examples={[
                "DeepL API : traductions de qualité professionnelle",
                "Google Cloud Translation AI : support multi-langues",
                "OpenAI : capacités de traduction multilingue intégrées"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Examples section */}
      <section id="exemples" className="py-16 scroll-mt-20">
        <div className="container max-w-5xl">
          <SectionTitle 
            title="12 Exemples de Workflows IA + Automatisation" 
            subtitle="Des cas d'usage concrets pour transformer votre entreprise"
            centered
          />
          
          <div className="grid gap-6 mt-12">
            <WorkflowExample 
              title="Support Client Intelligent" 
              description="Analyse du sentiment et catégorisation automatique des tickets. Routage intelligent vers le bon agent ou génération de réponses standards adaptées."
              tools={["OpenAI", "n8n", "Zendesk"]}
            />
            <WorkflowExample 
              title="Tri et Réponse Automatisée aux Emails" 
              description="Extraction de l'intention, des entités clés (nom, produit, problème) et création de tâches dans un CRM avec assignation aux bonnes personnes."
              tools={["Google NLP", "Make", "Gmail", "CRM"]}
            />
            <WorkflowExample 
              title="Modération de Contenu" 
              description="Analyse de textes et images pour détecter du contenu inapproprié. Mise en attente ou suppression automatique avec notification."
              tools={["Azure Content Safety", "n8n", "Forums"]}
            />
            <WorkflowExample 
              title="Traitement Automatisé de Factures" 
              description="Extraction des données (fournisseur, montant, date) depuis les PDF. Intégration dans un logiciel comptable et archivage automatique."
              tools={["Google Vision AI", "Make", "QuickBooks/Xero"]}
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-center"
            >
              <Button size="lg" variant="outline" asChild>
                <Link to="#contact">
                  Voir les 8 autres exemples de workflow
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-accent/10">
        <div className="container max-w-5xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold font-display">Prêt à automatiser intelligemment vos processus ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discutons de votre projet d'automatisation et découvrons comment l'IA peut transformer vos workflows existants.
            </p>
            <div className="pt-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Prendre contact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources section */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <SectionTitle 
            title="Ressources & Outils" 
            subtitle="Découvrez les plateformes et ressources pour réussir vos projets d'automatisation IA"
            centered
          />
          
          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Plateformes d'Automatisation</CardTitle>
                <CardDescription>Les outils les plus puissants pour créer vos workflows</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">n8n</div>
                    <div className="text-sm text-muted-foreground">Solution open-source d'automatisation avancée</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Make (Integromat)</div>
                    <div className="text-sm text-muted-foreground">Workflows visuels et flexibles</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Zapier</div>
                    <div className="text-sm text-muted-foreground">Automatisation simple et rapide à mettre en place</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Comparer les plateformes
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Services d'IA</CardTitle>
                <CardDescription>Les API d'intelligence artificielle essentielles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">OpenAI API</div>
                    <div className="text-sm text-muted-foreground">Intégration GPT-4 et DALL-E</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Google Cloud AI</div>
                    <div className="text-sm text-muted-foreground">Suite complète de services IA</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Hugging Face</div>
                    <div className="text-sm text-muted-foreground">Modèles spécifiques pour des tâches précises</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Explorer les API disponibles
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Automatisation;
