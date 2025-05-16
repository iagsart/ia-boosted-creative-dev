import { Bot, CheckCircle, Zap, Workflow, FileText, Network, Database, BarChart, FileCode, Link as LinkIcon, BookOpen, Table, Book } from "lucide-react";
import { TechCardProps } from "@/components/automation/TechCard";
import { AdvantageCardProps } from "@/components/automation/AdvantageCard";
import { WorkflowExampleProps } from "@/components/automation/WorkflowExample";
import { Platform } from "@/components/automation/PlatformCard";

export const advantages: AdvantageCardProps[] = [
  {
    title: "Prise de Décision Améliorée",
    description: "L'IA analyse les données et prend des décisions contextuelles dans vos workflows (catégorisation, sentiment, priorité).",
    icon: Bot,
    gradientClass: "bg-gradient-to-br from-background to-[#e7f0fd]/30 border border-[#accbee]/20"
  },
  {
    title: "Traitement Intelligent",
    description: "Extraction d'informations précieuses à partir de données non structurées (textes, images, vidéos, audio).",
    icon: Bot,
    gradientClass: "bg-gradient-to-br from-background to-[#fef9d7]/30 border border-[#d299c2]/20"
  },
  {
    title: "Personnalisation à Grande Échelle",
    description: "Adaptez communications et actions automatiquement selon le profil et comportement de chaque utilisateur.",
    icon: Bot,
    gradientClass: "bg-gradient-to-br from-background to-[#eacda3]/30 border border-[#e6b980]/20"
  },
  {
    title: "Efficacité Opérationnelle",
    description: "Automatisez des tâches complexes nécessitant habituellement une intervention humaine pour l'interprétation.",
    icon: Zap,
    gradientClass: "bg-gradient-to-br from-background to-[#ffdde1]/30 border border-[#ee9ca7]/20"
  },
  {
    title: "Réduction des Erreurs",
    description: "L'IA effectue des tâches répétitives avec précision, même sur de grands volumes de données.",
    icon: CheckCircle,
    gradientClass: "bg-gradient-to-br from-background to-[#F2FCE2]/30 border border-[#c1c161]/20"
  },
  {
    title: "Innovation dans les Services",
    description: "Créez de nouvelles offres basées sur des capacités intelligentes (chatbots avancés, recommandations).",
    icon: Bot,
    gradientClass: "bg-gradient-to-br from-background to-[#E5DEFF]/30 border border-[#9b87f5]/20"
  }
];

export const technologies: TechCardProps[] = [
  {
    title: "Traitement du Langage Naturel (NLP)",
    description: "Compréhension et génération de contenu textuel intelligent",
    icon: FileText,
    gradientClass: "bg-gradient-to-br from-background to-[#E5DEFF]/20 border border-[#9b87f5]/20",
    examples: [
      "OpenAI (GPT-4, GPT-3.5) : génération de texte, résumé, traduction",
      "Google Cloud Vertex AI : analyse de sentiment, classification",
      "Hugging Face Transformers : modèles pré-entraînés spécialisés",
      "Claude 2 et Claude 3 (Anthropic) : pour du contenu plus éthique et précis"
    ]
  },
  {
    title: "Vision par Ordinateur",
    description: "Analyse et compréhension d'images et de vidéos",
    icon: Bot,
    gradientClass: "bg-gradient-to-br from-background to-[#D3E4FD]/20 border border-[#0EA5E9]/20",
    examples: [
      "Google Cloud Vision AI : reconnaissance d'objets, OCR",
      "Amazon Rekognition : détection de visages, modération de contenu",
      "Microsoft Azure Computer Vision : analyse d'images et vidéos",
      "CLIP (OpenAI) : recherche d'images par description textuelle"
    ]
  },
  {
    title: "Traitement Audio",
    description: "Transcription, analyse et synthèse de la parole",
    icon: Bot,
    gradientClass: "bg-gradient-to-br from-background to-[#FDE1D3]/20 border border-[#F97316]/20",
    examples: [
      "Google Cloud Speech-to-Text : transcription audio précise",
      "AssemblyAI : transcription et compréhension avancées",
      "ElevenLabs : synthèse vocale ultra-réaliste et clonage de voix",
      "OpenAI Whisper : transcription multilingue open-source"
    ]
  },
  {
    title: "Traduction Automatique",
    description: "Traduction intelligente et contextuelle entre langues",
    icon: Bot,
    gradientClass: "bg-gradient-to-br from-background to-[#FFDEE2]/20 border border-[#D946EF]/20",
    examples: [
      "DeepL API : traductions de qualité professionnelle",
      "Google Cloud Translation AI : support multi-langues",
      "OpenAI : capacités de traduction multilingue intégrées",
      "ModernMT : traduction adaptative pour contextes spécifiques"
    ]
  },
  {
    title: "Analyse de données",
    description: "Extraction d'insights à partir de grandes quantités de données",
    icon: BarChart,
    gradientClass: "bg-gradient-to-br from-background to-[#FEF7CD]/20 border border-[#F2FCE2]/20",
    examples: [
      "Python avec scikit-learn et intégration API",
      "Google Cloud AutoML : création de modèles personnalisés",
      "Amazon SageMaker : modèles d'analyse prédictive",
      "MindsDB : prédictions ML directement depuis une base de données"
    ]
  },
  {
    title: "Automatisation de documents",
    description: "Gestion intelligente de documents et contrats",
    icon: FileCode,
    gradientClass: "bg-gradient-to-br from-background to-[#F1F0FB]/20 border border-[#8B5CF6]/20",
    examples: [
      "DocuSign Gen avec IA pour génération automatique",
      "Nanonets : extraction intelligente de données des documents",
      "Hyperscience : automatisation du traitement documentaire",
      "Kofax : transformation numérique des workflows documentaires"
    ]
  },
  {
    title: "RAG & Bases de connaissances",
    description: "Automatisations basées sur vos données et documents spécialisés",
    icon: Book,
    gradientClass: "bg-gradient-to-br from-background to-[#E0FFEB]/20 border border-[#22C55E]/20",
    examples: [
      "NotebookLM (Google) : IA conversationnelle sur vos documents",
      "LangChain RAG : construction de workflows de questions-réponses",
      "Pinecone / Weaviate : bases de données vectorielles pour IA",
      "LlamaIndex : indexation et recherche contextuelle sur documents"
    ]
  }
];

export const workflows: WorkflowExampleProps[] = [
  {
    title: "Support Client Intelligent",
    description: "Analyse automatique des tickets entrants pour une réponse plus rapide et adaptée.",
    detailedSteps: [
      "Un nouveau ticket arrive dans Zendesk, Freshdesk ou une autre plateforme de support.",
      "Make ou n8n récupère le contenu du ticket et l'envoie à l'API OpenAI.",
      "L'IA analyse le sentiment, détecte la catégorie et l'urgence du problème.",
      "Selon l'analyse, le workflow route automatiquement le ticket vers l'agent approprié.",
      "Pour les problèmes courants, l'IA génère une réponse personnalisée que l'agent peut valider avant envoi."
    ],
    benefits: [
      "Temps de réponse réduit de plus de 60%",
      "Meilleure satisfaction client grâce à un routage précis",
      "Agents concentrés sur les problèmes complexes et à forte valeur ajoutée"
    ],
    tools: ["OpenAI", "n8n", "Zendesk", "Slack"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#D3E4FD]/20"
  },
  {
    title: "Tri et Réponse Automatisée aux Emails",
    description: "Analyse intelligente des emails pour extraction d'information et actions automatisées.",
    detailedSteps: [
      "Les emails arrivent dans une boîte partagée (ex: contact@, support@).",
      "Make capture chaque nouvel email et transmet son contenu à Google NLP API.",
      "L'IA identifie l'intention, extrait les entités importantes (noms, produits, problèmes).",
      "Selon l'analyse, le workflow crée des tâches dans votre CRM, assigne l'email à la personne appropriée.",
      "Pour les demandes simples, génère et envoie automatiquement une réponse personnalisée."
    ],
    benefits: [
      "Réduction de 75% du temps de traitement des emails standards",
      "Élimination des emails perdus ou oubliés",
      "Historique client centralisé et enrichi automatiquement dans le CRM"
    ],
    tools: ["Google NLP", "Make", "Gmail", "HubSpot/Salesforce"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#FDE1D3]/20"
  },
  {
    title: "Modération de Contenu",
    description: "Filtrage automatique du contenu inapproprié sur vos plateformes communautaires.",
    detailedSteps: [
      "Un utilisateur publie un commentaire ou une image sur votre forum/réseau social.",
      "n8n envoie immédiatement ce contenu à l'API Azure Content Safety ou OpenAI Moderation.",
      "L'IA analyse le texte et l'image pour détecter tout contenu inapproprié (vulgarité, violence, etc).",
      "Si du contenu problématique est détecté, le workflow le place automatiquement en attente de modération.",
      "Un rapport est généré et envoyé à l'équipe de modération via Slack ou par email."
    ],
    benefits: [
      "Protection de votre communauté contre le contenu toxique en temps réel",
      "Réduction du stress pour l'équipe de modération humaine",
      "Amélioration de l'expérience utilisateur sur vos plateformes"
    ],
    tools: ["Azure Content Safety", "n8n", "Discord", "Slack"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#FFDEE2]/20"
  },
  {
    title: "Traitement Automatisé de Factures",
    description: "Extraction intelligente des informations depuis les factures au format PDF.",
    detailedSteps: [
      "Une facture au format PDF est reçue par email ou déposée dans un dossier cloud.",
      "Make ou n8n envoie cette facture à une API de Vision par Ordinateur (Google Vision AI).",
      "L'IA extrait les informations clés: fournisseur, montant, date, articles, numéro de facture, etc.",
      "Ces données sont automatiquement intégrées dans votre logiciel de comptabilité.",
      "La facture originale est archivée avec les métadonnées extraites pour faciliter les recherches futures."
    ],
    benefits: [
      "Économie de 3-5 heures par semaine pour un comptable",
      "Précision accrue et réduction des erreurs de saisie",
      "Traçabilité complète et recherche facilitée des factures"
    ],
    tools: ["Google Vision AI", "Make", "QuickBooks/Xero", "Google Drive"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#FEF7CD]/20"
  },
  {
    title: "Génération de Descriptions de Produits",
    description: "Création automatique de textes marketing persuasifs pour vos produits e-commerce.",
    detailedSteps: [
      "Une nouvelle référence produit est ajoutée à votre Google Sheet avec ses caractéristiques techniques.",
      "n8n détecte l'ajout et envoie ces caractéristiques à l'API d'OpenAI (GPT-4).",
      "L'IA génère une description marketing persuasive et SEO-friendly du produit.",
      "Le workflow publie automatiquement cette description sur votre plateforme e-commerce.",
      "Option: génération de versions alternatives pour tests A/B."
    ],
    benefits: [
      "Descriptions cohérentes et persuasives pour tous vos produits",
      "Gain de temps considérable pour votre équipe marketing",
      "Optimisation SEO automatique augmentant la visibilité"
    ],
    tools: ["OpenAI", "n8n", "Google Sheets", "Shopify/WooCommerce"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#E5DEFF]/20"
  },
  {
    title: "Qualification Automatisée de Leads",
    description: "Analyse et scoring des prospects pour concentrer vos efforts commerciaux.",
    detailedSteps: [
      "Un prospect remplit un formulaire sur votre site web ou interagit avec votre contenu.",
      "Make ou n8n capture ces données et les enrichit via des API comme Clearbit ou Hunter.",
      "L'IA analyse le profil (taille entreprise, secteur, comportement) et attribue un score de qualification.",
      "Le workflow met à jour votre CRM et déclenche des actions spécifiques selon le score.",
      "Pour les leads à haut potentiel, une alerte est envoyée à l'équipe commerciale pour suivi rapide."
    ],
    benefits: [
      "Concentration des efforts commerciaux sur les leads les plus prometteurs",
      "Augmentation du taux de conversion lead-client de 23% en moyenne",
      "Réduction du temps entre la capture du lead et le premier contact"
    ],
    tools: ["OpenAI", "Make", "Clearbit", "HubSpot"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#F1F0FB]/20"
  },
  {
    title: "Veille Concurrentielle et Analyse de Sentiment",
    description: "Surveillance automatisée de l'actualité et des mentions de vos concurrents.",
    detailedSteps: [
      "n8n surveille régulièrement les sources d'actualités, forums et réseaux sociaux via des API.",
      "Le workflow capture toutes les mentions de vos concurrents ou mots-clés stratégiques.",
      "L'IA (Hugging Face ou Google NLP) analyse le sentiment de ces mentions.",
      "Le système catégorise les informations et calcule leur importance stratégique.",
      "Un rapport quotidien est généré et envoyé à votre équipe avec les insights critiques."
    ],
    benefits: [
      "Détection précoce des mouvements stratégiques concurrents",
      "Compréhension fine de la perception publique des concurrents",
      "Identification des opportunités de marché négligées"
    ],
    tools: ["Hugging Face", "n8n", "NewsAPI", "Slack"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#E7F0FD]/20"
  },
  {
    title: "Personnalisation d'Emailings Marketing",
    description: "Adaptation intelligente du contenu marketing selon le profil de chaque destinataire.",
    detailedSteps: [
      "Avant le lancement d'une campagne email, le système extrait les données client du CRM.",
      "L'IA (OpenAI) reçoit ces données et le template de base de l'emailing.",
      "Pour chaque destinataire, l'IA adapte des sections spécifiques en fonction de son historique et ses intérêts.",
      "Make ou n8n envoie ensuite chaque email personnalisé via la plateforme d'emailing.",
      "Les interactions sont suivies et analysées pour optimiser les futures personnalisations."
    ],
    benefits: [
      "Augmentation des taux d'ouverture de 35% en moyenne",
      "Hausse du taux de conversion de 27%",
      "Réduction des désabonnements grâce à un contenu plus pertinent"
    ],
    tools: ["OpenAI", "Make", "Mailchimp/Sendinblue", "HubSpot"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#D299C2]/20"
  },
  {
    title: "Création de Contenu pour les Réseaux Sociaux",
    description: "Génération automatique de posts adaptés à chaque plateforme sociale.",
    detailedSteps: [
      "Un nouvel article est publié sur votre blog ou vous fournissez un thème/URL source.",
      "n8n récupère le contenu et l'envoie à l'API OpenAI.",
      "L'IA génère des versions adaptées pour Twitter, LinkedIn, Facebook et Instagram.",
      "Chaque version respecte les contraintes de la plateforme (longueur, ton, hashtags).",
      "Les posts sont programmés automatiquement via Buffer, Hootsuite ou direct APIs."
    ],
    benefits: [
      "Présence cohérente sur tous les réseaux sociaux sans effort manuel",
      "Contenu optimisé pour chaque plateforme augmentant l'engagement",
      "Gain de temps considérable pour votre équipe marketing"
    ],
    tools: ["OpenAI", "n8n", "Buffer/Hootsuite", "WordPress"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#FCE2E0]/20"
  },
  {
    title: "Analyse de CV et Présélection de Candidats",
    description: "Filtrage intelligent des candidatures pour identifier les meilleurs profils.",
    detailedSteps: [
      "Les CV sont reçus par email ou via votre plateforme de recrutement.",
      "n8n ou Make les transmet à une IA spécialisée dans l'analyse de documents.",
      "L'IA extrait les compétences, l'expérience, la formation et les mots-clés pertinents.",
      "Un score d'adéquation est calculé en fonction de votre fiche de poste.",
      "Les candidats sont classés et ceux correspondant le mieux aux critères sont signalés aux recruteurs."
    ],
    benefits: [
      "Réduction de 80% du temps de présélection des CV",
      "Évaluation objective basée sur des critères précis",
      "Détection de profils atypiques mais prometteurs"
    ],
    tools: ["Google Document AI", "Make", "ATS (Lever/Workable)", "Slack"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#EEF1F5]/20"
  },
  {
    title: "Traduction et Localisation de Contenu",
    description: "Adaptation intelligente de votre contenu pour des audiences internationales.",
    detailedSteps: [
      "Un nouveau contenu est publié dans votre langue principale.",
      "Make détecte l'ajout et envoie le texte à DeepL API ou Google Translation.",
      "L'IA traduit le contenu dans les langues cibles tout en préservant le ton et le contexte.",
      "Le résultat est ensuite envoyé à GPT-4 pour révision et adaptation culturelle.",
      "Le contenu localisé est publié automatiquement sur vos plateformes internationales."
    ],
    benefits: [
      "Expansion internationale accélérée de votre contenu marketing",
      "Qualité de traduction supérieure aux solutions automatiques standard",
      "Adaptation culturelle fine augmentant l'engagement des audiences locales"
    ],
    tools: ["DeepL", "OpenAI", "n8n", "WordPress/Contentful"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#C1C161]/20"
  },
  {
    title: "Génération de Rapports Automatisés",
    description: "Création de rapports d'analyse intelligents à partir de données brutes.",
    detailedSteps: [
      "n8n collecte régulièrement les données de vos différentes sources (Google Analytics, CRM, etc).",
      "Les données sont nettoyées, structurées et agrégées.",
      "L'API OpenAI analyse ces données pour identifier les tendances, anomalies et insights clés.",
      "L'IA génère un rapport textuel commenté avec visualisations et recommandations.",
      "Le rapport est automatiquement envoyé aux parties prenantes par email ou via Slack."
    ],
    benefits: [
      "Insights actionnables extraits automatiquement des données brutes",
      "Gain de temps considérable pour la préparation de rapports périodiques",
      "Détection précoce des tendances et problèmes potentiels"
    ],
    tools: ["OpenAI", "n8n", "Google Analytics", "Power BI/Tableau"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#ACCBEE]/20"
  },
  {
    title: "Automatisation d'assistance technique avec NotebookLM",
    description: "Création d'un système d'assistance technique intelligent basé sur votre documentation interne.",
    detailedSteps: [
      "Importez votre documentation technique, procédures et historiques de résolution dans NotebookLM.",
      "Configurez l'IA pour comprendre la structure et le contexte spécifique de vos documents.",
      "Connectez NotebookLM à votre système de tickets via Make ou n8n.",
      "Lorsqu'un ticket technique arrive, l'automatisation extrait le problème et l'envoie à NotebookLM.",
      "NotebookLM génère une réponse pertinente basée uniquement sur vos documents internes.",
      "La réponse est proposée au technicien qui peut la valider avant envoi ou l'utiliser comme base de travail."
    ],
    benefits: [
      "Résolutions 3x plus rapides des problèmes techniques courants",
      "Réponses cohérentes basées uniquement sur votre documentation officielle",
      "Formation accélérée des nouveaux techniciens",
      "Capitalisation continue sur l'expertise interne"
    ],
    tools: ["NotebookLM", "n8n/Make", "Zendesk/Freshdesk", "Google Drive"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#E0FFEB]/20"
  },
  {
    title: "Formation personnalisée avec base de connaissances RAG",
    description: "Système de formation automatisé qui s'adapte au profil et aux questions spécifiques de l'apprenant.",
    detailedSteps: [
      "Importez vos supports de formation, procédures et manuels dans une base de données vectorielle (Pinecone).",
      "Configurez un système RAG (Retrieval Augmented Generation) avec LangChain ou LlamaIndex.",
      "Un formulaire web capture les besoins et le niveau de l'apprenant.",
      "n8n transmet ces informations au système RAG qui génère un parcours personnalisé.",
      "À chaque étape, l'apprenant peut poser des questions spécifiques, le système RAG récupère les informations pertinentes dans votre base de connaissances.",
      "Les progrès sont suivis automatiquement et de nouvelles ressources sont suggérées en fonction des performances."
    ],
    benefits: [
      "Formation 40% plus efficace grâce à la personnalisation",
      "Réduction de 60% du temps d'onboarding des nouveaux employés",
      "Documentation toujours à jour et interrogeable en langage naturel",
      "Analyse des questions fréquentes pour améliorer la documentation"
    ],
    tools: ["LangChain", "Pinecone", "n8n", "OpenAI", "Google Forms"],
    gradientClass: "hover:bg-gradient-to-br hover:from-transparent hover:to-[#D3E4FD]/20"
  }
];

export const automationPlatforms: Platform[] = [
  {
    name: "n8n",
    description: "Solution open-source d'automatisation avancée",
    icon: Workflow,
    features: [
      "100% open-source et auto-hébergeable",
      "Interface visuelle intuitive",
      "Support d'API personnalisées via code",
      "Exécution locale ou cloud"
    ],
    gradientClass: "bg-gradient-to-br from-[#E5DEFF]/30 to-[#9b87f5]/20"
  },
  {
    name: "Make (Integromat)",
    description: "Workflows visuels et flexibles",
    icon: Network,
    features: [
      "Interface visuelle puissante",
      "Grande bibliothèque de connecteurs",
      "Débogage avancé et journalisation",
      "Plans gratuits généreux"
    ],
    gradientClass: "bg-gradient-to-br from-[#D3E4FD]/30 to-[#0EA5E9]/20"
  },
  {
    name: "Zapier",
    description: "Automatisation simple et rapide à mettre en place",
    icon: LinkIcon,
    features: [
      "Prise en main très facile",
      "+4000 applications supportées",
      "Templates prédéfinis nombreux",
      "Support multi-étapes"
    ],
    gradientClass: "bg-gradient-to-br from-[#FDE1D3]/30 to-[#F97316]/20"
  },
  {
    name: "Pipedream",
    description: "Plateforme d'intégration d'API avec code personnalisé",
    icon: FileCode,
    features: [
      "Combinaison no-code et code",
      "Support JavaScript/Python natif",
      "Workflows orientés développeurs",
      "Plans gratuits généreux"
    ],
    gradientClass: "bg-gradient-to-br from-[#F1F0FB]/30 to-[#8B5CF6]/20"
  }
];

export const aiPlatforms: Platform[] = [
  {
    name: "OpenAI API",
    description: "Intégration GPT-4 et DALL-E",
    icon: Bot,
    features: [
      "Modèles de langage état de l'art",
      "Génération d'images DALL-E",
      "API simple avec nombreux exemples",
      "Fine-tuning disponible"
    ],
    gradientClass: "bg-gradient-to-br from-[#E5DEFF]/30 to-[#9b87f5]/20"
  },
  {
    name: "Google Cloud AI",
    description: "Suite complète de services IA",
    icon: Bot,
    features: [
      "Vision, Speech, NLP, Translation",
      "AutoML pour modèles personnalisés",
      "Intégration facile avec GCP",
      "Vertex AI pour solutions complexes"
    ],
    gradientClass: "bg-gradient-to-br from-[#FEF7CD]/30 to-[#F2FCE2]/20"
  },
  {
    name: "Hugging Face",
    description: "Modèles spécifiques pour des tâches précises",
    icon: Bot,
    features: [
      "Milliers de modèles open-source",
      "Interface API unifiée",
      "Spécialisation par tâches NLP",
      "Communauté active de chercheurs"
    ],
    gradientClass: "bg-gradient-to-br from-[#D3E4FD]/30 to-[#0EA5E9]/20"
  },
  {
    name: "Claude API (Anthropic)",
    description: "IA conversationnelle éthique et précise",
    icon: Bot,
    features: [
      "Focus sur sécurité et précision",
      "Réponses nuancées et détaillées",
      "Biais réduits et fact-checking",
      "API simple d'utilisation"
    ],
    gradientClass: "bg-gradient-to-br from-[#FFDEE2]/30 to-[#D946EF]/20"
  },
  {
    name: "NotebookLM (Google)",
    description: "IA conversationnelle sur vos documents",
    icon: BookOpen,
    features: [
      "RAG sur vos documents privés",
      "Citations et sources vérifiables",
      "Questions-réponses contextuelles",
      "Organisation en notebooks thématiques"
    ],
    gradientClass: "bg-gradient-to-br from-[#E0FFEB]/30 to-[#22C55E]/20",
    url: "https://notebooklm.google/"
  },
  {
    name: "LangChain",
    description: "Framework pour applications IA contextuelles",
    icon: Database,
    features: [
      "Construction de workflows RAG",
      "Chaînage de prompts et d'agents",
      "Intégration multi-LLM",
      "Open-source et extensible"
    ],
    gradientClass: "bg-gradient-to-br from-[#F1F0FB]/30 to-[#8B5CF6]/20",
    url: "https://www.langchain.com/"
  }
];

export const caseStudies = [
  {
    title: "Transformation du support client d'une fintech",
    industry: "Finance",
    challenge: "Une startup fintech recevait plus de 500 tickets quotidiens, avec des temps de réponse dépassant 24h et une équipe support débordée.",
    solution: "Implémentation d'un workflow n8n + OpenAI analysant automatiquement les tickets, les catégorisant par priorité/type et suggérant des réponses.",
    results: [
      "Réduction de 70% du temps de traitement moyen des tickets",
      "Satisfaction client améliorée de 35%",
      "Économie de 120 000€/an sur les coûts d'exploitation"
    ],
    tools: ["n8n", "OpenAI", "Zendesk", "Slack"],
    gradientClass: "bg-gradient-to-br from-[#F6F6F7]/30 to-[#E5DEFF]/20"
  },
  {
    title: "Automatisation du traitement de factures",
    industry: "Commerce",
    challenge: "Un distributeur traitait manuellement 2500+ factures/mois, avec erreurs fréquentes et retards de paiement.",
    solution: "Workflow Make + Google Document AI pour extraction automatique des données et intégration comptable.",
    results: [
      "Traitement automatique de 92% des factures sans intervention humaine",
      "Réduction des erreurs de saisie de 95%",
      "Économie de 3,5 jours/personne par mois"
    ],
    tools: ["Make", "Google Document AI", "QuickBooks", "Google Drive"],
    gradientClass: "bg-gradient-to-br from-[#F6F6F7]/30 to-[#FEF7CD]/20"
  }
];

export const aiStats = [
  { value: "85%", label: "des entreprises estiment que l'automatisation IA augmente leur productivité" },
  { value: "67%", label: "d'augmentation moyenne du ROI après implémentation d'automatisations intelligentes" },
  { value: "93%", label: "des dirigeants considèrent l'automatisation comme prioritaire pour leur transformation digitale" }
];

// Nouvelles données pour la page de comparaison des plateformes
export const platformFeatures = [
  {
    name: "Interface visuelle",
    description: "Facilité de création de workflows sans code",
    platforms: {
      "n8n": 4,
      "Make": 5,
      "Zapier": 5,
      "Pipedream": 3,
      "Tray.io": 4,
      "Microsoft Power Automate": 4,
      "Workato": 4
    }
  },
  {
    name: "Flexibilité technique",
    description: "Possibilité d'ajouter du code personnalisé",
    platforms: {
      "n8n": 5,
      "Make": 4,
      "Zapier": 3,
      "Pipedream": 5,
      "Tray.io": 4,
      "Microsoft Power Automate": 3,
      "Workato": 4
    }
  },
  {
    name: "Nombre d'intégrations",
    description: "Quantité d'applications et services supportés",
    platforms: {
      "n8n": 4,
      "Make": 4,
      "Zapier": 5,
      "Pipedream": 3,
      "Tray.io": 4,
      "Microsoft Power Automate": 4,
      "Workato": 4
    }
  },
  {
    name: "Auto-hébergement",
    description: "Capacité à déployer sur votre infrastructure",
    platforms: {
      "n8n": 5,
      "Make": 1,
      "Zapier": 1,
      "Pipedream": 2,
      "Tray.io": 1,
      "Microsoft Power Automate": 3,
      "Workato": 2
    }
  },
  {
    name: "Prix",
    description: "Rapport qualité/prix des offres",
    platforms: {
      "n8n": 4,
      "Make": 4,
      "Zapier": 3,
      "Pipedream": 4,
      "Tray.io": 2,
      "Microsoft Power Automate": 3,
      "Workato": 2
    }
  },
  {
    name: "Performances",
    description: "Vitesse d'exécution et traitement de gros volumes",
    platforms: {
      "n8n": 4,
      "Make": 5,
      "Zapier": 3,
      "Pipedream": 4,
      "Tray.io": 5,
      "Microsoft Power Automate": 3,
      "Workato": 5
    }
  },
  {
    name: "Intégration IA",
    description: "Facilité d'intégration avec des services d'IA",
    platforms: {
      "n8n": 5,
      "Make": 4,
      "Zapier": 3,
      "Pipedream": 5,
      "Tray.io": 4,
      "Microsoft Power Automate": 3,
      "Workato": 4
    }
  },
  {
    name: "Débogage",
    description: "Outils de test et de débogage",
    platforms: {
      "n8n": 4,
      "Make": 5,
      "Zapier": 3,
      "Pipedream": 4,
      "Tray.io": 4,
      "Microsoft Power Automate": 3,
      "Workato": 4
    }
  }
];

export const platformComparisons = [
  {
    name: "n8n",
    logo: "/placeholder.svg",
    description: "Solution open-source et auto-hébergeable offrant une grande flexibilité technique.",
    pricingModel: "Freemium + Cloud ou Self-hosted",
    priceRange: "0€ - 20€/utilisateur/mois",
    strongPoints: [
      "100% open-source",
      "Possibilité d'auto-hébergement",
      "Excellent support du code personnalisé",
      "Interface visuelle intuitive",
      "Communauté active"
    ],
    weakPoints: [
      "Moins d'intégrations que Zapier",
      "Configuration serveur nécessaire pour l'auto-hébergement",
      "Documentation parfois incomplète"
    ],
    bestFor: ["Startups techniques", "Développeurs", "Entreprises soucieuses de la confidentialité des données"],
    aiIntegration: "Excellente, avec support natif pour OpenAI, HuggingFace et autres API d'IA."
  },
  {
    name: "Make (Integromat)",
    logo: "/placeholder.svg",
    description: "Plateforme visuelle puissante avec une excellente interface de conception de workflows.",
    pricingModel: "Freemium + Plans payants",
    priceRange: "0€ - 29€+/mois",
    strongPoints: [
      "Interface visuelle exceptionnelle",
      "Excellentes performances",
      "Outils de débogage avancés",
      "Gestion fine des données",
      "Plan gratuit généreux"
    ],
    weakPoints: [
      "Pas d'option d'auto-hébergement",
      "Courbe d'apprentissage moyenne"
    ],
    bestFor: ["PME", "Marketeurs", "Professionnels non-techniques avec besoins avancés"],
    aiIntegration: "Très bonne, via modules dédiés aux principales API d'IA."
  },
  {
    name: "Zapier",
    logo: "/placeholder.svg",
    description: "Solution la plus connue avec le plus grand nombre d'intégrations prédéfinies.",
    pricingModel: "Freemium + Plans payants",
    priceRange: "0€ - 73,50€+/mois",
    strongPoints: [
      "Plus de 5000 applications connectées",
      "Très simple à prendre en main",
      "Nombreux templates préexistants",
      "Support réactif",
      "Communauté importante"
    ],
    weakPoints: [
      "Options de personnalisation limitées",
      "Prix élevé pour les fonctionnalités avancées",
      "Performances moyennes sur workflows complexes"
    ],
    bestFor: ["Petites entreprises", "Non-techniciens", "Besoins d'intégrations simples"],
    aiIntegration: "Bonne, principalement via intégrations préexistantes des services d'IA populaires."
  },
  {
    name: "Pipedream",
    logo: "/placeholder.svg",
    description: "Plateforme orientée développeurs offrant une grande flexibilité de code.",
    pricingModel: "Freemium + Plans payants",
    priceRange: "0€ - 29€+/mois",
    strongPoints: [
      "Support natif de JavaScript/Node.js",
      "Excellent pour les développeurs",
      "API-first",
      "Plan gratuit généreux",
      "Exécution rapide"
    ],
    weakPoints: [
      "Interface moins intuitive pour les non-développeurs",
      "Moins d'intégrations prédéfinies que les leaders",
      "Communauté plus restreinte"
    ],
    bestFor: ["Développeurs", "Équipes techniques", "Startups SaaS"],
    aiIntegration: "Excellente, avec possibilité d'intégrer facilement n'importe quelle API d'IA via du code."
  },
  {
    name: "Microsoft Power Automate",
    logo: "/placeholder.svg",
    description: "Solution d'automatisation intégrée à l'écosystème Microsoft 365.",
    pricingModel: "Inclus avec M365 + Plans premium",
    priceRange: "Inclus avec M365 - 15€+/utilisateur/mois",
    strongPoints: [
      "Intégration parfaite avec produits Microsoft",
      "Bonne gouvernance d'entreprise",
      "RPA (Robotic Process Automation) inclus",
      "Sécurité de niveau entreprise"
    ],
    weakPoints: [
      "Interface parfois complexe",
      "Performances variables",
      "Limitations hors écosystème Microsoft",
      "Prix élevé pour fonctionnalités avancées"
    ],
    bestFor: ["Entreprises utilisant Microsoft 365", "Grandes organisations", "Équipes RH et Finance"],
    aiIntegration: "Bonne, particulièrement avec les services IA de Microsoft Azure."
  },
  {
    name: "Tray.io",
    logo: "/placeholder.svg",
    description: "Plateforme d'automatisation enterprise avec fonctionnalités avancées.",
    pricingModel: "Plans enterprise",
    priceRange: "Tarification entreprise (sur devis)",
    strongPoints: [
      "Performance exceptionnelle",
      "Adaptée aux grands volumes",
      "Fonctionnalités enterprise",
      "Sécurité avancée",
      "Support dédié"
    ],
    weakPoints: [
      "Prix élevé",
      "Ciblé entreprise uniquement",
      "Complexité initiale importante"
    ],
    bestFor: ["Grandes entreprises", "Utilisateurs avec volumes importants", "Besoins de sécurité avancés"],
    aiIntegration: "Très bonne, avec support pour services d'IA enterprise et connecteurs personnalisés."
  },
  {
    name: "Workato",
    logo: "/placeholder.svg",
    description: "Solution d'intégration d'entreprise avec automatisations avancées.",
    pricingModel: "Plans enterprise",
    priceRange: "Tarification entreprise (sur devis)",
    strongPoints: [
      "Fonctionnalités enterprise",
      "Très bonnes performances",
      "Support de l'automatisation métier complexe",
      "Gouvernance et sécurité avancées"
    ],
    weakPoints: [
      "Prix très élevé",
      "Courbe d'apprentissage importante",
      "Plus adapté aux grandes organisations"
    ],
    bestFor: ["Grandes entreprises", "Équipes IT", "Besoins d'intégration multi-systèmes complexes"],
    aiIntegration: "Excellente, avec orchestration de workflows IA pour cas d'usage enterprise."
  }
];

export const platformUseCases = {
  beginners: {
    title: "Pour débutants",
    description: "Vous débutez avec l'automatisation et recherchez des solutions simples à prendre en main.",
    recommended: ["Zapier", "Make"],
    explanation: "Zapier et Make offrent les interfaces les plus intuitives avec de nombreux templates et guides. Zapier est légèrement plus simple pour les vrais débutants, tandis que Make offre plus de flexibilité une fois les bases maîtrisées."
  },
  soho: {
    title: "TPE/PME",
    description: "Vous recherchez un bon rapport qualité/prix et des fonctionnalités adaptées aux petites structures.",
    recommended: ["Make", "n8n", "Zapier"],
    explanation: "Make offre le meilleur rapport qualité/prix pour les PME avec un plan gratuit généreux et une montée en puissance flexible. n8n est excellent si vous avez quelques compétences techniques ou un prestataire pour l'installation."
  },
  enterprise: {
    title: "Grandes entreprises",
    description: "Vous avez besoin de fonctionnalités enterprise: gouvernance, conformité, volumes importants.",
    recommended: ["Workato", "Tray.io", "Microsoft Power Automate"],
    explanation: "Ces plateformes offrent les fonctionnalités de gouvernance, sécurité et scaling nécessaires aux grandes organisations, avec Workato et Tray.io plus orientés performances, et Microsoft Power Automate idéal dans un environnement Microsoft."
  },
  developers: {
    title: "Équipes techniques",
    description: "Vous avez des compétences techniques et recherchez une solution flexible et programmable.",
    recommended: ["n8n", "Pipedream"],
    explanation: "n8n et Pipedream sont conçus avec les développeurs à l'esprit, permettant d'insérer du code personnalisé facilement. n8n offre l'avantage supplémentaire d'être open-source et auto-hébergeable."
  },
  aiIntegration: {
    title: "Intégration IA avancée",
    description: "Votre priorité est l'intégration facile et puissante avec des modèles d'IA.",
    recommended: ["n8n", "Pipedream", "Make"],
    explanation: "Ces plateformes excellent dans l'intégration avec les API d'IA modernes. n8n et Pipedream permettent le plus de contrôle et de personnalisation, tandis que Make offre un bon équilibre entre facilité d'utilisation et puissance."
  },
  dataPrivacy: {
    title: "Confidentialité des données",
    description: "Vos données sont sensibles et vous préférez une solution que vous contrôlez.",
    recommended: ["n8n"],
    explanation: "n8n est la seule solution principale qui peut être entièrement auto-hébergée sur votre infrastructure, vous donnant un contrôle total sur vos données et workflows."
  }
};
