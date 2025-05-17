
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Brain, Cpu, Bot, LineChart, Network, Database, CircuitBoard, Gauge, Code, Shield, Terminal, Rocket, Users, Microscope, Puzzle, Wand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

interface AITechCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  examples: string[];
  useCases: string[];
  maturityLevel?: number;
}

const AITechCard = ({ title, description, icon, examples, useCases, maturityLevel }: AITechCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="text-sm mt-1">{description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-1">Technologies clés</h4>
              <ul className="text-sm list-disc pl-5 space-y-1">
                {examples.map((example, idx) => (
                  <li key={idx}>{example}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1">Applications pratiques</h4>
              <ul className="text-sm list-disc pl-5 space-y-1">
                {isExpanded ? (
                  useCases.map((useCase, idx) => (
                    <li key={idx}>{useCase}</li>
                  ))
                ) : (
                  useCases.slice(0, 3).map((useCase, idx) => (
                    <li key={idx}>{useCase}</li>
                  ))
                )}
              </ul>
              {useCases.length > 3 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2 text-xs"
                >
                  {isExpanded ? "Voir moins" : "Voir plus"}
                </Button>
              )}
            </div>
            {maturityLevel !== undefined && (
              <div>
                <h4 className="font-medium text-sm mb-1">Maturité technologique</h4>
                <div className="flex items-center gap-2">
                  <Progress value={maturityLevel} className="h-2" />
                  <span className="text-xs text-muted-foreground">{maturityLevel}%</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const AIComparisonTable = () => {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary/5">
            <th className="border p-2 text-left">Type d'IA</th>
            <th className="border p-2 text-left">Forces</th>
            <th className="border p-2 text-left">Limites</th>
            <th className="border p-2 text-left">Idéal pour</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 font-medium">Machine Learning classique</td>
            <td className="border p-2">
              <ul className="list-disc pl-5 text-sm">
                <li>Explicable et interprétable</li>
                <li>Moins de données nécessaires</li>
                <li>Bon pour les tâches spécifiques</li>
              </ul>
            </td>
            <td className="border p-2">
              <ul className="list-disc pl-5 text-sm">
                <li>Performance limitée sur données complexes</li>
                <li>Nécessite feature engineering</li>
              </ul>
            </td>
            <td className="border p-2">
              <ul className="list-disc pl-5 text-sm">
                <li>Analytics prédictive</li>
                <li>Classification</li>
                <li>Secteurs réglementés</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border p-2 font-medium">Deep Learning</td>
            <td className="border p-2">
              <ul className="list-disc pl-5 text-sm">
                <li>Capture des patterns complexes</li>
                <li>Auto-feature engineering</li>
                <li>Performance supérieure sur données non structurées</li>
              </ul>
            </td>
            <td className="border p-2">
              <ul className="list-disc pl-5 text-sm">
                <li>Besoin de grandes quantités de données</li>
                <li>Ressources computationnelles importantes</li>
                <li>Boîte noire - moins explicable</li>
              </ul>
            </td>
            <td className="border p-2">
              <ul className="list-disc pl-5 text-sm">
                <li>Vision par ordinateur</li>
                <li>NLP</li>
                <li>Reconnaissance de patterns complexes</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border p-2 font-medium">LLMs</td>
            <td className="border p-2">
              <ul className="list-disc pl-5 text-sm">
                <li>Compréhension et génération de langage</li>
                <li>Polyvalence et adaptabilité</li>
                <li>Capacités de raisonnement émergentes</li>
              </ul>
            </td>
            <td className="border p-2">
              <ul className="list-disc pl-5 text-sm">
                <li>Hallucinations</li>
                <li>Coûts élevés d'infrastructure</li>
                <li>Limitations de contexte</li>
              </ul>
            </td>
            <td className="border p-2">
              <ul className="list-disc pl-5 text-sm">
                <li>Assistants conversationnels</li>
                <li>Création de contenu</li>
                <li>Extraction d'insights</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border p-2 font-medium">Systèmes hybrides</td>
            <td className="border p-2">
              <ul className="list-disc pl-5 text-sm">
                <li>Combine précision et flexibilité</li>
                <li>Plus fiable et vérifiable</li>
                <li>Performance optimale sur tâches variées</li>
              </ul>
            </td>
            <td className="border p-2">
              <ul className="list-disc pl-5 text-sm">
                <li>Complexité d'implémentation</li>
                <li>Besoin d'expertise multidisciplinaire</li>
              </ul>
            </td>
            <td className="border p-2">
              <ul className="list-disc pl-5 text-sm">
                <li>Applications d'entreprise</li>
                <li>Systèmes critiques</li>
                <li>Solutions personnalisées</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

interface TechPhaseDiagramProps {
  activePhase: string;
  setActivePhase: (phase: string) => void;
}

const TechPhaseDiagram = ({ activePhase, setActivePhase }: TechPhaseDiagramProps) => {
  const phases = [
    {
      id: "research",
      name: "Recherche fondamentale",
      description: "Phase d'exploration scientifique et développement théorique",
      technologies: ["Réseaux de neurones quantiques", "IA générale", "Interfaces cerveau-machine avancées"]
    },
    {
      id: "emerging",
      name: "Technologies émergentes",
      description: "Premières applications pratiques, mais non encore matures",
      technologies: ["Modèles multimodaux", "IA générative spécialisée", "Apprentissage par renforcement avancé"]
    },
    {
      id: "growth",
      name: "Croissance",
      description: "Adoption croissante et amélioration rapide",
      technologies: ["Diffusion models", "Agents IA autonomes", "LLMs spécialisés"]
    },
    {
      id: "mature",
      name: "Maturité",
      description: "Technologies éprouvées avec adoption généralisée",
      technologies: ["NLP classique", "ML supervisé", "Computer Vision de base"]
    }
  ];

  return (
    <div className="mt-8">
      <div className="flex justify-between mb-4">
        {phases.map((phase) => (
          <div 
            key={phase.id}
            className={`w-1/4 px-2 cursor-pointer text-center`}
            onClick={() => setActivePhase(phase.id)}
          >
            <div 
              className={`h-16 flex items-center justify-center rounded-lg transition-colors ${
                activePhase === phase.id ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <span className="font-medium text-sm">{phase.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        {phases.map((phase) => (
          phase.id === activePhase && (
            <div key={phase.id} className="space-y-3">
              <h3 className="text-xl font-bold">{phase.name}</h3>
              <p className="text-muted-foreground">{phase.description}</p>
              <div>
                <h4 className="font-medium mb-2">Technologies représentatives</h4>
                <div className="flex flex-wrap gap-2">
                  {phase.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-primary/10 px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

interface AICapabilityCardProps {
  title: string;
  description: string;
  level: number;
  examples: string[];
}

const AICapabilityCard = ({ title, description, level, examples }: AICapabilityCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm">Niveau de capacité</span>
            <span className="text-sm font-medium">{level}/5</span>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <div 
                key={star} 
                className={`h-2 flex-1 rounded-full ${
                  star <= level ? "bg-primary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Exemples de capacités</h4>
          <ul className="text-sm list-disc pl-5 space-y-1">
            {examples.map((example, idx) => (
              <li key={idx}>{example}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

const ExpertiseIA = () => {
  const [activePhase, setActivePhase] = useState("growth");
  const { toast } = useToast();
  
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  
  const capabilities = [
    {
      id: "perception",
      title: "Perception",
      description: "Capacité à interpréter des données sensorielles",
      level: 4,
      examples: [
        "Reconnaissance d'images précise",
        "Traitement audio avancé",
        "Analyse de séries temporelles",
        "Reconnaissance de patterns visuels complexes"
      ]
    },
    {
      id: "reasoning",
      title: "Raisonnement",
      description: "Capacité à déduire des conclusions logiques",
      level: 3,
      examples: [
        "Résolution de problèmes simples",
        "Enchaînement de raisonnements",
        "Logique formelle basique",
        "Raisonnement analogique limité"
      ]
    },
    {
      id: "knowledge",
      title: "Connaissances",
      description: "Accès et utilisation d'informations",
      level: 5,
      examples: [
        "Vastes connaissances générales",
        "Capacité à extraire des concepts",
        "Synthèse d'informations diverses",
        "Mémoire contextuelle"
      ]
    },
    {
      id: "planning",
      title: "Planification",
      description: "Capacité à élaborer des stratégies",
      level: 2,
      examples: [
        "Décomposition de tâches simples",
        "Planification à court terme",
        "Organisation séquentielle basique",
        "Adaptation limitée aux changements"
      ]
    },
    {
      id: "communication",
      title: "Communication",
      description: "Échange d'informations avec les humains",
      level: 4,
      examples: [
        "Dialogue naturel et nuancé",
        "Adaptation au style et ton",
        "Compréhension du contexte",
        "Génération de contenu cohérent"
      ]
    },
    {
      id: "learning",
      title: "Apprentissage",
      description: "Capacité à s'améliorer avec l'expérience",
      level: 3,
      examples: [
        "Transfer learning efficace",
        "Adaptation progressive",
        "Few-shot learning",
        "Apprentissage supervisé avancé"
      ]
    }
  ];

  const handleCardClick = (id: string) => {
    setSelectedCapability(id);
    toast({
      title: `Domaine: ${capabilities.find(c => c.id === id)?.title}`,
      description: "Vous avez sélectionné un domaine d'expertise IA. Consultez les détails affichés.",
    });
  };
  
  return (
    <Layout>
      <div className="container py-12">
        <SectionTitle 
          title="Solutions et Services IA" 
          subtitle="Découvrez notre expertise en intelligence artificielle et les technologies que nous maîtrisons pour répondre à vos besoins"
          centered
        />

        <div className="max-w-4xl mx-auto mt-8 text-center bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Notre approche de l'intelligence artificielle</h2>
          <p className="text-lg mb-6">
            Nous développons des solutions IA qui combinent innovation technologique et valeur business réelle, 
            en suivant une méthodologie éprouvée pour garantir des résultats tangibles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Analyse</h3>
              <p className="text-sm">Compréhension approfondie de vos enjeux business et objectifs</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
                <Microscope className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Conception</h3>
              <p className="text-sm">Design d'une solution IA adaptée à vos besoins spécifiques</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Développement</h3>
              <p className="text-sm">Implémentation agile avec itérations et validations continues</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-3">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Déploiement</h3>
              <p className="text-sm">Mise en production et accompagnement pour maximiser l'adoption</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="types" className="w-full mt-12">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList>
              <TabsTrigger value="types">Types d'IA</TabsTrigger>
              <TabsTrigger value="capabilities">Capacités de l'IA</TabsTrigger>
              <TabsTrigger value="comparison">Comparaison</TabsTrigger>
              <TabsTrigger value="nlp">NLP & LLMs</TabsTrigger>
              <TabsTrigger value="vision">Vision & Image</TabsTrigger>
              <TabsTrigger value="data">IA & Données</TabsTrigger>
              <TabsTrigger value="specialized">IA Spécialisée</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="types">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Comprendre les fondamentaux de l'IA</h3>
              <p className="text-muted-foreground mb-6">
                L'intelligence artificielle se divise en plusieurs catégories qui diffèrent par leur approche, 
                leur complexité et leurs capacités. Voici les principaux types d'IA et leurs caractéristiques.
              </p>
              
              <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-2xl">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-around">
                    <span className="bg-white px-4 text-sm text-gray-500">Simple</span>
                    <span className="bg-white px-4 text-sm text-gray-500">Modéré</span>
                    <span className="bg-white px-4 text-sm text-gray-500">Complexe</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AITechCard 
                title="IA Symbolique (GOFAI)"
                description="Intelligence artificielle basée sur des règles explicites et des systèmes experts"
                icon={<Brain className="h-6 w-6 text-primary" />}
                examples={[
                  "Systèmes experts",
                  "Moteurs de règles",
                  "Logique formelle",
                  "Représentation des connaissances"
                ]}
                useCases={[
                  "Systèmes de diagnostic médical",
                  "Vérification de conformité",
                  "Planification avancée",
                  "Aide à la décision structurée",
                  "Maintenance industrielle",
                  "Automatisation de processus métier"
                ]}
                maturityLevel={85}
              />
              
              <AITechCard 
                title="Machine Learning"
                description="Algorithmes qui apprennent à partir des données sans être explicitement programmés"
                icon={<Cpu className="h-6 w-6 text-primary" />}
                examples={[
                  "Apprentissage supervisé",
                  "Apprentissage non-supervisé",
                  "Apprentissage par renforcement",
                  "Deep Learning"
                ]}
                useCases={[
                  "Détection de fraude",
                  "Systèmes de recommandation",
                  "Analyse prédictive",
                  "Maintenance prédictive",
                  "Optimisation de processus",
                  "Segmentation clients",
                  "Prévision de demande"
                ]}
                maturityLevel={95}
              />
              
              <AITechCard 
                title="Deep Learning"
                description="Réseaux de neurones profonds pour modéliser des abstractions complexes dans les données"
                icon={<Network className="h-6 w-6 text-primary" />}
                examples={[
                  "Réseaux de neurones convolutifs (CNN)",
                  "Réseaux récurrents (RNN, LSTM)",
                  "Transformers",
                  "Autoencodeurs"
                ]}
                useCases={[
                  "Reconnaissance d'images",
                  "Traduction automatique",
                  "Traitement de la parole",
                  "Génération de contenu",
                  "Détection d'anomalies complexes",
                  "Analyse de sentiments",
                  "Diagnostic médical avancé"
                ]}
                maturityLevel={85}
              />
              
              <AITechCard 
                title="IA Générative"
                description="Systèmes capables de créer du nouveau contenu à partir de ce qu'ils ont appris"
                icon={<Bot className="h-6 w-6 text-primary" />}
                examples={[
                  "Modèles de langage (GPT, LLaMA)",
                  "Diffusion models (Stable Diffusion)",
                  "GANs (Generative Adversarial Networks)",
                  "Modèles génératifs multimodaux"
                ]}
                useCases={[
                  "Création de contenu textuel",
                  "Génération d'images et de vidéos",
                  "Conception assistée",
                  "Prototypage virtuel",
                  "Synthèse vocale réaliste",
                  "Édition et retouche intelligente",
                  "Simulation de scénarios"
                ]}
                maturityLevel={70}
              />
              
              <AITechCard 
                title="IA Hybride"
                description="Combinaison de plusieurs approches pour tirer le meilleur de chaque méthode"
                icon={<LineChart className="h-6 w-6 text-primary" />}
                examples={[
                  "Systèmes neuro-symboliques",
                  "LLMs augmentés par des outils",
                  "RAG (Retrieval Augmented Generation)",
                  "IA augmentée par des règles"
                ]}
                useCases={[
                  "Assistants IA avancés",
                  "Prise de décision explicable",
                  "Systèmes d'IA dotés de raisonnement",
                  "Applications critiques nécessitant contrôle et transparence",
                  "Agents intelligents personnalisés",
                  "Systèmes complexes d'automatisation"
                ]}
                maturityLevel={60}
              />
              
              <AITechCard 
                title="Agents IA"
                description="Systèmes autonomes capables d'observer, de décider et d'agir dans leur environnement"
                icon={<Bot className="h-6 w-6 text-primary" />}
                examples={[
                  "Agents autonomes",
                  "Multi-agent systems (MAS)",
                  "Agents conversationnels avancés",
                  "Agents d'automatisation"
                ]}
                useCases={[
                  "Automatisation de processus complexes",
                  "Assistants virtuels personnalisés",
                  "Simulation de comportements",
                  "Optimisation d'opérations en temps réel",
                  "Orchestration de systèmes distribués",
                  "Environnements multi-acteurs",
                  "Systèmes de négociation autonomes"
                ]}
                maturityLevel={50}
              />
            </motion.div>
            
            <div className="mt-12 p-6 bg-primary/5 rounded-lg">
              <h3 className="text-xl font-bold mb-4">L'évolution des technologies d'IA</h3>
              <TechPhaseDiagram activePhase={activePhase} setActivePhase={setActivePhase} />
            </div>
          </TabsContent>

          <TabsContent value="capabilities">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Comprendre les capacités de l'IA moderne</h3>
              <p className="text-muted-foreground mb-6">
                Les systèmes d'IA actuels présentent des forces et des limites spécifiques dans différents domaines
                cognitifs. Cette cartographie permet de mieux comprendre ce que l'IA peut réellement accomplir aujourd'hui.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <div 
                  key={capability.id} 
                  onClick={() => handleCardClick(capability.id)}
                  className={`cursor-pointer transition-transform transform ${
                    selectedCapability === capability.id ? "scale-105" : "hover:scale-102"
                  }`}
                >
                  <AICapabilityCard 
                    title={capability.title}
                    description={capability.description}
                    level={capability.level}
                    examples={capability.examples}
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-12 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Limites actuelles de l'IA</CardTitle>
                  <CardDescription>
                    Malgré des avancées impressionnantes, l'IA fait face à plusieurs défis fondamentaux
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Compréhension profonde</h4>
                      <p className="text-muted-foreground">
                        Les systèmes d'IA actuels simulent la compréhension sans véritablement "comprendre" 
                        au sens humain. Ils manquent d'une représentation conceptuelle du monde qui leur 
                        permettrait de raisonner de manière véritablement abstraite.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Transfert de connaissances</h4>
                      <p className="text-muted-foreground">
                        L'IA peine à transférer des connaissances d'un domaine à un autre de façon flexible, 
                        contrairement aux humains qui peuvent facilement appliquer des concepts familiers à 
                        de nouvelles situations.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Conscience de soi et intentionnalité</h4>
                      <p className="text-muted-foreground">
                        Les systèmes actuels n'ont pas de véritable conscience d'eux-mêmes ni d'intentions propres. 
                        Ils optimisent des fonctions objectives sans comprendre le sens de leurs actions.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Adaptation et causalité</h4>
                      <p className="text-muted-foreground">
                        La plupart des systèmes d'IA ont une compréhension limitée des relations causales et 
                        peinent à s'adapter à des changements radicaux dans leur environnement sans réentraînement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="comparison">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Comparaison des technologies d'IA</h3>
              <p className="text-muted-foreground mb-6">
                Chaque approche d'IA présente des avantages et limites spécifiques, 
                les rendant adaptées à différents contextes d'application.
              </p>
            </div>
            
            <AIComparisonTable />
            
            <div className="mt-12 p-6 bg-primary/5 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Comment choisir la bonne approche d'IA</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Critères de sélection</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Nature des données disponibles</strong> - Quantité, qualité, structure</li>
                    <li><strong>Objectif business</strong> - Prédiction, optimisation, automatisation</li>
                    <li><strong>Explicabilité requise</strong> - Réglementation, confiance utilisateur</li>
                    <li><strong>Ressources disponibles</strong> - Budget, temps, expertise interne</li>
                    <li><strong>Environnement opérationnel</strong> - Cloud, edge, embarqué</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Notre approche conseil</h4>
                  <p className="text-muted-foreground mb-4">
                    Notre expertise vous guide dans la sélection des technologies d'IA les plus adaptées
                    à votre contexte spécifique, avec une méthodologie en trois temps:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li><strong>Audit initial</strong> - Évaluation des besoins et contraintes</li>
                    <li><strong>PoC multi-approches</strong> - Test de plusieurs alternatives</li>
                    <li><strong>Implémentation progressive</strong> - Déploiement itératif et mesurable</li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nlp">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Traitement du Langage Naturel & LLMs</h3>
              <p className="text-muted-foreground mb-6">
                Les technologies de traitement du langage naturel permettent aux machines de comprendre, 
                interpréter et générer du langage humain de manière contextuelle et nuancée.
              </p>
            </div>

            <motion.div 
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AITechCard 
                title="Large Language Models"
                description="Modèles de langage de grande taille entraînés sur d'immenses corpus de texte"
                icon={<Brain className="h-6 w-6 text-primary" />}
                examples={[
                  "GPT-4, Claude, LLaMA, Mistral",
                  "BERT, T5, PaLM",
                  "Architecture Transformer",
                  "Fine-tuning et RLHF"
                ]}
                useCases={[
                  "Assistants virtuels avancés",
                  "Génération de contenu automatisée",
                  "Analyse sémantique de documents",
                  "Traduction et synthèse de texte",
                  "Réponse à des questions complexes",
                  "Automatisation de service client",
                  "Génération de code"
                ]}
                maturityLevel={80}
              />
              
              <AITechCard 
                title="Traitement de texte spécialisé"
                description="Algorithmes dédiés à des tâches linguistiques spécifiques"
                icon={<Database className="h-6 w-6 text-primary" />}
                examples={[
                  "Named Entity Recognition (NER)",
                  "Sentiment Analysis",
                  "Summarization",
                  "Question-Answering Systems"
                ]}
                useCases={[
                  "Extraction d'informations structurées",
                  "Analyse de feedback client",
                  "Automatisation de documentation",
                  "Systèmes de recherche intelligents",
                  "Classification automatique de documents",
                  "Analyse compliance et régulation",
                  "Surveillance de réputation"
                ]}
                maturityLevel={90}
              />
              
              <AITechCard 
                title="Compréhension contextuelle"
                description="Technologies pour comprendre le contexte et les nuances du langage"
                icon={<Network className="h-6 w-6 text-primary" />}
                examples={[
                  "Coreference Resolution",
                  "Discourse Analysis",
                  "Pragmatic Understanding",
                  "Contextual Embeddings"
                ]}
                useCases={[
                  "Chatbots contextuels avancés",
                  "Analyse de conversations",
                  "Extraction d'insights de documents complexes",
                  "Systèmes de support client",
                  "Analyse de satisfaction client",
                  "Détection de sarcasme et humour",
                  "Compréhension de contenu subtil"
                ]}
                maturityLevel={75}
              />
              
              <AITechCard 
                title="Technologie vocale"
                description="Conversion entre parole et texte, et synthèse vocale"
                icon={<Cpu className="h-6 w-6 text-primary" />}
                examples={[
                  "Speech-to-Text (STT)",
                  "Text-to-Speech (TTS)",
                  "Voice Cloning",
                  "Acoustic Modeling"
                ]}
                useCases={[
                  "Assistants vocaux",
                  "Transcription automatique",
                  "Accessibilité pour personnes handicapées",
                  "Production de contenu audio",
                  "Systèmes de dictée médicale",
                  "Interfaces vocales en industrie",
                  "Podcasts et audiobooks synthétisés"
                ]}
                maturityLevel={85}
              />
              
              <AITechCard 
                title="Knowledge Grounding"
                description="Ancrer les modèles de langage dans des connaissances vérifiables"
                icon={<Database className="h-6 w-6 text-primary" />}
                examples={[
                  "Retrieval-Augmented Generation (RAG)",
                  "Knowledge Graphs",
                  "Fact-checking systems",
                  "External Knowledge Integration"
                ]}
                useCases={[
                  "Assistance technique précise",
                  "Systèmes d'information médicale",
                  "Assistants de recherche juridique",
                  "Documentation technique interactive",
                  "Agents IA pour experts-métier",
                  "Systèmes de formation interne",
                  "QA pour domaines spécialisés"
                ]}
                maturityLevel={70}
              />
              
              <AITechCard 
                title="Traduction & Multilingue"
                description="Technologies pour franchir les barrières linguistiques"
                icon={<LineChart className="h-6 w-6 text-primary" />}
                examples={[
                  "Neural Machine Translation",
                  "Multilingual Models",
                  "Cross-lingual Embeddings",
                  "Low-resource Languages Systems"
                ]}
                useCases={[
                  "Traduction en temps réel",
                  "Localisation de contenu",
                  "Communication internationale",
                  "Education linguistique assistée par IA",
                  "Expansion commerciale internationale",
                  "Conformité multi-juridictions",
                  "Assistance voyageurs"
                ]}
                maturityLevel={85}
              />
            </motion.div>
            
            <div className="mt-12 p-6 bg-primary/5 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Applications business des LLMs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Améliorations opérationnelles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Automatisation du support client</strong> - Réduction de 70% du temps de réponse</li>
                      <li><strong>Génération de documentation</strong> - Création automatisée de rapports et contenus</li>
                      <li><strong>Analyse de contrats</strong> - Extraction rapide de clauses et obligations</li>
                      <li><strong>Synthèse de réunions</strong> - Création automatique de comptes-rendus</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Innovation produits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Interfaces conversationnelles</strong> - Transformation de l'expérience utilisateur</li>
                      <li><strong>Personnalisation avancée</strong> - Communication adaptative selon le profil client</li>
                      <li><strong>Co-pilotes métier</strong> - Augmentation des capacités des collaborateurs</li>
                      <li><strong>Nouveaux formats</strong> - Création de contenus innovants et interactifs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-3">Notre approche d'implémentation LLM</h4>
                <ol className="list-decimal pl-5 space-y-2">
                  <li><strong>Définition de cas d'usage</strong> - Identification des opportunités à fort impact</li>
                  <li><strong>Sélection technologique</strong> - Choix entre modèles propriétaires et open-source</li>
                  <li><strong>Enrichissement de contexte</strong> - Intégration des connaissances spécifiques à votre domaine</li>
                  <li><strong>Prototypage itératif</strong> - Développement agile avec évaluations fréquentes</li>
                  <li><strong>Sécurité et gouvernance</strong> - Mise en place de garde-fous et contrôles appropriés</li>
                  <li><strong>Déploiement progressif</strong> - Mise en production par phases avec monitoring continu</li>
                </ol>
                
                <div className="mt-4 flex justify-center">
                  <Button onClick={() => {
                    toast({
                      title: "Demande d'information",
                      description: "Contactez-nous pour en savoir plus sur notre approche d'implémentation LLM.",
                    });
                  }}>
                    Discuter de votre projet LLM
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="vision">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Vision par Ordinateur & Traitement d'Images</h3>
              <p className="text-muted-foreground mb-6">
                Les technologies de vision par ordinateur permettent aux machines d'interpréter et de comprendre 
                le contenu visuel, révolutionnant des domaines allant de la médecine à la réalité augmentée.
              </p>
            </div>

            <motion.div 
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AITechCard 
                title="Classification d'images"
                description="Identification et catégorisation d'objets ou de concepts dans les images"
                icon={<Cpu className="h-6 w-6 text-primary" />}
                examples={[
                  "Convolutional Neural Networks (CNN)",
                  "Vision Transformers (ViT)",
                  "Transfer Learning Models",
                  "Fine-grained Classification"
                ]}
                useCases={[
                  "Diagnostic médical assisté par IA",
                  "Contrôle qualité industriel",
                  "Modération de contenu visuel",
                  "Recherche d'images par contenu",
                  "Reconnaissance de produits",
                  "Identification de maladies végétales",
                  "Catalogage automatique"
                ]}
                maturityLevel={95}
              />
              
              <AITechCard 
                title="Détection & Segmentation"
                description="Localisation et délimitation précise d'objets dans les images"
                icon={<Brain className="h-6 w-6 text-primary" />}
                examples={[
                  "Object Detection (YOLO, SSD)",
                  "Instance Segmentation (Mask R-CNN)",
                  "Semantic Segmentation (U-Net)",
                  "Panoptic Segmentation"
                ]}
                useCases={[
                  "Véhicules autonomes",
                  "Surveillance intelligente",
                  "Analyse d'imagerie médicale",
                  "Réalité augmentée",
                  "Robotique industrielle",
                  "Agriculture de précision",
                  "Inspection de bâtiments"
                ]}
                maturityLevel={85}
              />
              
              <AITechCard 
                title="Générative & Synthèse"
                description="Création et modification d'images et vidéos par IA"
                icon={<Bot className="h-6 w-6 text-primary" />}
                examples={[
                  "Diffusion Models (Stable Diffusion)",
                  "GANs (StyleGAN)",
                  "Image-to-Image Translation",
                  "Neural Style Transfer"
                ]}
                useCases={[
                  "Création de contenu visuel",
                  "Retouche photo automatisée",
                  "Visualisation de produits",
                  "Effets spéciaux et post-production",
                  "Génération de maquettes design",
                  "Création d'avatars personnalisés",
                  "Virtualisation d'espaces"
                ]}
                maturityLevel={75}
              />
              
              <AITechCard 
                title="Analyse de vidéo"
                description="Traitement et compréhension de contenu vidéo"
                icon={<LineChart className="h-6 w-6 text-primary" />}
                examples={[
                  "Video Classification",
                  "Action Recognition",
                  "Tracking",
                  "Video Captioning"
                ]}
                useCases={[
                  "Analyse de comportement",
                  "Sécurité et surveillance",
                  "Sports analytics",
                  "Indexation automatique de contenu vidéo",
                  "Monétisation de contenu",
                  "Analyse de performances",
                  "Détection d'anomalies en flux"
                ]}
                maturityLevel={80}
              />
              
              <AITechCard 
                title="3D & Multi-vue"
                description="Reconstruction et analyse d'environnements en trois dimensions"
                icon={<Network className="h-6 w-6 text-primary" />}
                examples={[
                  "3D Reconstruction",
                  "Point Cloud Processing",
                  "Novel View Synthesis",
                  "Depth Estimation"
                ]}
                useCases={[
                  "Jumeau numérique",
                  "Réalité virtuelle et augmentée",
                  "Robotique",
                  "Construction et architecture",
                  "Prototypage virtuel",
                  "Médecine: imagerie 3D",
                  "Cartographie d'environnements"
                ]}
                maturityLevel={70}
              />
              
              <AITechCard 
                title="Vision multimodale"
                description="Intégration de vision et autres modalités (texte, audio)"
                icon={<Database className="h-6 w-6 text-primary" />}
                examples={[
                  "CLIP, CoCa, Flamingo",
                  "Vision-Language Models",
                  "Visual Question Answering",
                  "Image-Text Matching"
                ]}
                useCases={[
                  "Recherche visuelle avancée",
                  "Assistants IA pour déficients visuels",
                  "Catalogage automatique de médias",
                  "Systèmes de compréhension visuelle contextuelle",
                  "Analyse de marketing visuel",
                  "Génération de contenu multiformat",
                  "Interfaces homme-machine avancées"
                ]}
                maturityLevel={65}
              />
            </motion.div>
            
            <div className="mt-12 p-6 bg-primary/5 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Applications sectorielles de la vision par ordinateur</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Industrie & Manufacturing</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><strong>Contrôle qualité</strong> - Détection automatisée de défauts avec précision submillimétrique</p>
                    <p><strong>Maintenance prédictive</strong> - Identification visuelle de signes d'usure ou de dysfonctionnement</p>
                    <p><strong>Sécurité</strong> - Surveillance du respect des protocoles de sécurité</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-xs text-muted-foreground">ROI typique: 300-500% sur 18 mois</p>
                  </CardFooter>
                </Card>
                
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Commerce & Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><strong>Analytics en magasin</strong> - Analyse de parcours client et zones d'intérêt</p>
                    <p><strong>Inventaire automatisé</strong> - Suivi en temps réel des stocks en rayon</p>
                    <p><strong>Expériences immersives</strong> - Essayage virtuel et visualisation de produits</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-xs text-muted-foreground">Amélioration conversion: +15-30%</p>
                  </CardFooter>
                </Card>
                
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Santé & Médical</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><strong>Diagnostic assisté</strong> - Détection précoce de pathologies sur imagerie médicale</p>
                    <p><strong>Chirurgie assistée</strong> - Guidage et précision interventionnelle</p>
                    <p><strong>Suivi patient</strong> - Monitoring non invasif de constantes et comportements</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-xs text-muted-foreground">Précision diagnostic: jusqu'à +25%</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="data">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">IA & Sciences des Données</h3>
              <p className="text-muted-foreground mb-6">
                L'intelligence artificielle transforme l'analyse et l'exploitation des données 
                en permettant des insights plus profonds et des prédictions plus précises.
              </p>
            </div>

            <motion.div 
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AITechCard 
                title="Analyse prédictive"
                description="Modèles pour prévoir des tendances et comportements futurs"
                icon={<LineChart className="h-6 w-6 text-primary" />}
                examples={[
                  "Regression Models",
                  "Time Series Forecasting",
                  "Ensemble Methods",
                  "Neural Forecasting"
                ]}
                useCases={[
                  "Prévision des ventes",
                  "Anticipation des besoins en ressources",
                  "Prédiction de maintenance",
                  "Planification financière",
                  "Détection précoce de risques",
                  "Optimisation des stocks",
                  "Prévision de consommation énergétique"
                ]}
                maturityLevel={90}
              />
              
              <AITechCard 
                title="Clustering & Segmentation"
                description="Regroupement automatique d'éléments similaires"
                icon={<Network className="h-6 w-6 text-primary" />}
                examples={[
                  "K-Means, DBSCAN",
                  "Hierarchical Clustering",
                  "Density-Based Methods",
                  "Self-Organizing Maps"
                ]}
                useCases={[
                  "Segmentation client",
                  "Organisation de documents",
                  "Détection d'anomalies",
                  "Réduction de complexité de données",
                  "Identification de patterns de comportement",
                  "Analyse de marchés",
                  "Regroupement thématique"
                ]}
                maturityLevel={95}
              />
              
              <AITechCard 
                title="Feature Engineering & Selection"
                description="Optimisation des caractéristiques pour modèles d'IA"
                icon={<Cpu className="h-6 w-6 text-primary" />}
                examples={[
                  "Automated Feature Engineering",
                  "Dimensionality Reduction (PCA)",
                  "Feature Selection Algorithms",
                  "Embedding Methods"
                ]}
                useCases={[
                  "Prétraitement de données",
                  "Optimisation de modèles",
                  "Réduction de complexité",
                  "Amélioration des performances",
                  "Extraction de signaux pertinents",
                  "Visualisation de données complexes",
                  "Réduction de coûts computationnels"
                ]}
                maturityLevel={85}
              />
              
              <AITechCard 
                title="Big Data & IA"
                description="Traitement de données massives avec l'intelligence artificielle"
                icon={<Database className="h-6 w-6 text-primary" />}
                examples={[
                  "Distributed Machine Learning",
                  "Streaming Analytics",
                  "Data Lakes Integration",
                  "Scalable AI Architectures"
                ]}
                useCases={[
                  "Analyse de comportement utilisateur",
                  "Monitoring d'infrastructure à grande échelle",
                  "Recommandation temps réel",
                  "Traitement de logs massifs",
                  "Analyse de réseaux sociaux",
                  "Détection de fraude en temps réel",
                  "Optimisation de processus industriels"
                ]}
                maturityLevel={80}
              />
              
              <AITechCard 
                title="AutoML"
                description="Automatisation du processus de création de modèles d'IA"
                icon={<Bot className="h-6 w-6 text-primary" />}
                examples={[
                  "Neural Architecture Search",
                  "Hyperparameter Optimization",
                  "Model Selection",
                  "End-to-End AutoML Platforms"
                ]}
                useCases={[
                  "Démocratisation de l'IA",
                  "Prototypage rapide",
                  "Optimisation continue de modèles",
                  "ML-Ops automatisé",
                  "Réduction de dépendance aux data scientists",
                  "Accélération de mise sur marché",
                  "Exploration systématique d'architectures"
                ]}
                maturityLevel={75}
              />
              
              <AITechCard 
                title="Data Governance & IA éthique"
                description="Gestion responsable des données et des modèles d'IA"
                icon={<Shield className="h-6 w-6 text-primary" />}
                examples={[
                  "Fairness in ML",
                  "Explainable AI (XAI)",
                  "Privacy-Preserving ML",
                  "Model Governance Tools"
                ]}
                useCases={[
                  "Conformité réglementaire (RGPD)",
                  "Audits d'algorithmes",
                  "Transparence et explicabilité",
                  "Prise de décision éthique",
                  "Détection et réduction de biais",
                  "Protection des données sensibles",
                  "Construction de confiance utilisateur"
                ]}
                maturityLevel={70}
              />
            </motion.div>
            
            <div className="mt-12 p-6 bg-primary/5 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Méthodologie de valorisation des données par l'IA</h3>
              
              <div className="overflow-hidden bg-white rounded-lg border">
                <div className="p-4 bg-primary/10 border-b">
                  <h4 className="font-bold">Notre approche en 5 étapes</h4>
                </div>
                
                <div className="p-4">
                  <ol className="relative border-l border-gray-200">
                    <li className="mb-6 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3">
                        <span className="text-white text-xs">1</span>
                      </span>
                      <h5 className="font-semibold">Audit de maturité data</h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        Évaluation des données disponibles, de leur qualité et de leur potentiel de valorisation
                      </p>
                    </li>
                    <li className="mb-6 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3">
                        <span className="text-white text-xs">2</span>
                      </span>
                      <h5 className="font-semibold">Identification des cas d'usage à valeur</h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        Priorisation des opportunités en fonction de leur impact business et faisabilité technique
                      </p>
                    </li>
                    <li className="mb-6 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3">
                        <span className="text-white text-xs">3</span>
                      </span>
                      <h5 className="font-semibold">Conception et implémentation</h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        Développement de pipelines de données et modèles IA adaptés aux objectifs spécifiques
                      </p>
                    </li>
                    <li className="mb-6 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3">
                        <span className="text-white text-xs">4</span>
                      </span>
                      <h5 className="font-semibold">Intégration et déploiement</h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        Mise en production et connexion aux systèmes d'information existants
                      </p>
                    </li>
                    <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3">
                        <span className="text-white text-xs">5</span>
                      </span>
                      <h5 className="font-semibold">Mesure d'impact et optimisation continue</h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        Suivi des KPIs et amélioration itérative des modèles et processus
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="specialized">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Applications IA Spécialisées</h3>
              <p className="text-muted-foreground mb-6">
                L'intelligence artificielle s'adapte à des domaines spécifiques avec des approches 
                et des solutions sur mesure pour répondre à des besoins particuliers.
              </p>
            </div>

            <motion.div 
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AITechCard 
                title="IA pour la santé"
                description="Applications médicales de l'intelligence artificielle"
                icon={<Brain className="h-6 w-6 text-primary" />}
                examples={[
                  "Medical Imaging Analysis",
                  "Disease Prediction Models",
                  "Drug Discovery AI",
                  "Genomics & Personalized Medicine"
                ]}
                useCases={[
                  "Diagnostic précoce de maladies",
                  "Découverte et développement de médicaments",
                  "Analyse d'imagerie médicale",
                  "Médecine personnalisée",
                  "Optimisation de parcours de soins",
                  "Prévision d'épidémies",
                  "Assistance aux interventions chirurgicales"
                ]}
                maturityLevel={75}
              />
              
              <AITechCard 
                title="IA industrielle"
                description="Intelligence artificielle appliquée à la production et à la fabrication"
                icon={<CircuitBoard className="h-6 w-6 text-primary" />}
                examples={[
                  "Predictive Maintenance",
                  "Digital Twins",
                  "Quality Control AI",
                  "Smart Manufacturing Systems"
                ]}
                useCases={[
                  "Maintenance prédictive",
                  "Optimisation de la chaîne de production",
                  "Réduction des déchets et défauts",
                  "Automatisation industrielle avancée",
                  "Planification optimisée de production",
                  "Gestion énergétique intelligente",
                  "Orchestration de chaînes logistiques"
                ]}
                maturityLevel={80}
              />
              
              <AITechCard 
                title="IA pour la finance"
                description="Applications financières de l'intelligence artificielle"
                icon={<Network className="h-6 w-6 text-primary" />}
                examples={[
                  "Algorithmic Trading",
                  "Fraud Detection",
                  "Credit Scoring Models",
                  "Market Sentiment Analysis"
                ]}
                useCases={[
                  "Détection de fraudes en temps réel",
                  "Trading algorithmique",
                  "Analyse de risque personnalisée",
                  "Customer Intelligence",
                  "Optimisation de portefeuilles",
                  "Conformité réglementaire automatisée",
                  "Prévision de défaillances d'emprunteurs"
                ]}
                maturityLevel={90}
              />
              
              <AITechCard 
                title="AI for Creativity"
                description="IA pour la création artistique et le design"
                icon={<Bot className="h-6 w-6 text-primary" />}
                examples={[
                  "Creative Text Generation",
                  "AI Art & Image Generation",
                  "Music Composition",
                  "Design Assistance Tools"
                ]}
                useCases={[
                  "Création de contenu à grande échelle",
                  "Prototypage rapide en design",
                  "Co-création artiste-IA",
                  "Génération de variations créatives",
                  "Production musicale assistée",
                  "Développement d'univers graphiques",
                  "Personnalisation de contenu créatif"
                ]}
                maturityLevel={75}
              />
              
              <AITechCard 
                title="Edge & Embedded AI"
                description="IA fonctionnant sur des appareils à ressources limitées"
                icon={<Cpu className="h-6 w-6 text-primary" />}
                examples={[
                  "Model Compression",
                  "TinyML",
                  "Neural Processing Units (NPUs)",
                  "Federated Learning"
                ]}
                useCases={[
                  "IoT intelligent",
                  "Smartphones et wearables",
                  "Traitement local pour la vie privée",
                  "Systèmes embarqués autonomes",
                  "Véhicules connectés",
                  "Appareils médicaux intelligents",
                  "Capteurs industriels avancés"
                ]}
                maturityLevel={70}
              />
              
              <AITechCard 
                title="Spatial & GeoAI"
                description="Applications géospatiales de l'intelligence artificielle"
                icon={<Gauge className="h-6 w-6 text-primary" />}
                examples={[
                  "Satellite Imagery Analysis",
                  "Geospatial Machine Learning",
                  "Location Intelligence",
                  "GIS-AI Integration"
                ]}
                useCases={[
                  "Agriculture de précision",
                  "Gestion urbaine intelligente",
                  "Surveillance environnementale",
                  "Planification d'infrastructures",
                  "Optimisation logistique géolocalisée",
                  "Analyse d'impact environnemental",
                  "Développement territorial durable"
                ]}
                maturityLevel={65}
              />
            </motion.div>
            
            <div className="mt-12 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-center">Comment nous pouvons vous accompagner</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium">Nos services IA</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Wand className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Conseil stratégique IA</span>
                        <p className="text-sm text-muted-foreground mt-1">Définition de stratégie et feuille de route IA adaptée à votre contexte</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Puzzle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Proof of Concept</span>
                        <p className="text-sm text-muted-foreground mt-1">Développement rapide de prototypes pour valider la faisabilité et le ROI</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Développement sur mesure</span>
                        <p className="text-sm text-muted-foreground mt-1">Création de solutions IA adaptées à vos besoins spécifiques</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">Formation & Accompagnement</span>
                        <p className="text-sm text-muted-foreground mt-1">Montée en compétence de vos équipes et conduite du changement</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="font-medium mb-4">Secteurs d'intervention</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Santé</span>
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Finance</span>
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Industrie</span>
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Retail</span>
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Énergie</span>
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Services</span>
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Médias</span>
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Transport</span>
                      <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Agriculture</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button className="px-8" onClick={() => {
                      toast({
                        title: "Contact",
                        description: "Vous pouvez nous contacter pour discuter de votre projet IA.",
                      });
                    }}>
                      Parlons de votre projet
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">Premier échange sans engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Notre approche</h3>
          <p className="text-muted-foreground mb-4">
            Chez nous, nous combinons une expertise technique approfondie avec une compréhension 
            précise des enjeux business pour créer des solutions d'IA qui génèrent une valeur réelle.
          </p>
          <p className="text-muted-foreground mb-8">
            Que vous cherchiez à automatiser des processus, à extraire de la valeur de vos données, 
            ou à intégrer les dernières technologies d'IA dans votre entreprise, nous vous guidons 
            dans toutes les étapes du processus avec une approche pragmatique et éthique.
          </p>
          
          <Button 
            className="px-8" 
            size="lg" 
            onClick={() => {
              toast({
                title: "Demande de contact",
                description: "Merci de votre intérêt! Nous vous contacterons prochainement pour discuter de votre projet.",
              });
            }}
          >
            Discuter avec un expert
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ExpertiseIA;
