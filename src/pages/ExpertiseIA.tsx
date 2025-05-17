
import React from "react";
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cpu, Bot, LineChart, Network, Database, CircuitBoard, Gauge } from "lucide-react";
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
}

const AITechCard = ({ title, description, icon, examples, useCases }: AITechCardProps) => {
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
                {useCases.map((useCase, idx) => (
                  <li key={idx}>{useCase}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ExpertiseIA = () => {
  return (
    <Layout>
      <div className="container py-12">
        <SectionTitle 
          title="Notre expertise en Intelligence Artificielle" 
          subtitle="Découvrez les différentes technologies d'IA et leurs applications dans le monde professionnel"
          centered
        />

        <Tabs defaultValue="types" className="w-full mt-8">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="types">Types d'IA</TabsTrigger>
              <TabsTrigger value="nlp">NLP & LLMs</TabsTrigger>
              <TabsTrigger value="vision">Vision & Image</TabsTrigger>
              <TabsTrigger value="data">IA & Données</TabsTrigger>
              <TabsTrigger value="specialized">IA Spécialisée</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="types">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Comprendre les fondamentaux de l'IA</h3>
              <p className="text-muted-foreground">
                L'intelligence artificielle se divise en plusieurs catégories qui diffèrent par leur approche, 
                leur complexité et leurs capacités. Voici les principaux types d'IA et leurs caractéristiques.
              </p>
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
                  "Aide à la décision structurée"
                ]}
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
                  "Maintenance prédictive"
                ]}
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
                  "Génération de contenu"
                ]}
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
                  "Prototypage virtuel"
                ]}
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
                  "Applications critiques nécessitant contrôle et transparence"
                ]}
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
                  "Optimisation d'opérations en temps réel"
                ]}
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="nlp">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Traitement du Langage Naturel & LLMs</h3>
              <p className="text-muted-foreground">
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
                  "Traduction et synthèse de texte"
                ]}
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
                  "Systèmes de recherche intelligents"
                ]}
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
                  "Systèmes de support client"
                ]}
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
                  "Production de contenu audio"
                ]}
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
                  "Documentation technique interactive"
                ]}
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
                  "Education linguistique assistée par IA"
                ]}
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="vision">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Vision par Ordinateur & Traitement d'Images</h3>
              <p className="text-muted-foreground">
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
                  "Recherche d'images par contenu"
                ]}
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
                  "Réalité augmentée"
                ]}
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
                  "Effets spéciaux et post-production"
                ]}
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
                  "Indexation automatique de contenu vidéo"
                ]}
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
                  "Construction et architecture"
                ]}
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
                  "Systèmes de compréhension visuelle contextuelle"
                ]}
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="data">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">IA & Sciences des Données</h3>
              <p className="text-muted-foreground">
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
                  "Planification financière"
                ]}
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
                  "Réduction de complexité de données"
                ]}
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
                  "Amélioration des performances"
                ]}
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
                  "Traitement de logs massifs"
                ]}
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
                  "ML-Ops automatisé"
                ]}
              />
              
              <AITechCard 
                title="Data Governance & IA éthique"
                description="Gestion responsable des données et des modèles d'IA"
                icon={<Brain className="h-6 w-6 text-primary" />}
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
                  "Prise de décision éthique"
                ]}
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="specialized">
            <div className="max-w-3xl mx-auto mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Applications IA Spécialisées</h3>
              <p className="text-muted-foreground">
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
                  "Médecine personnalisée"
                ]}
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
                  "Automatisation industrielle avancée"
                ]}
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
                  "Customer Intelligence"
                ]}
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
                  "Génération de variations créatives"
                ]}
              />
              
              <AITechCard 
                title="Edge & Embedded AI"
                description="IA fonctionnant sur des appareils à ressources limitées"
                icon={<Database className="h-6 w-6 text-primary" />}
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
                  "Systèmes embarqués autonomes"
                ]}
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
                  "Planification d'infrastructures"
                ]}
              />
            </motion.div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Notre approche</h3>
          <p className="text-muted-foreground mb-4">
            Chez nous, nous combinons une expertise technique approfondie avec une compréhension 
            précise des enjeux business pour créer des solutions d'IA qui génèrent une valeur réelle.
          </p>
          <p className="text-muted-foreground">
            Que vous cherchiez à automatiser des processus, à extraire de la valeur de vos données, 
            ou à intégrer les dernières technologies d'IA dans votre entreprise, nous vous guidons 
            dans toutes les étapes du processus avec une approche pragmatique et éthique.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ExpertiseIA;
