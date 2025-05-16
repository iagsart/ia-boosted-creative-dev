
import { Bot, CheckCircle, Zap, Workflow, FileText, Network, Database, BarChart, FileCode, Link as LinkIcon } from "lucide-react";
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
