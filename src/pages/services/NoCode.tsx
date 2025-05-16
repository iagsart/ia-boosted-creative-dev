
import React from 'react';
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  Smartphone,
  Briefcase,
  Clock,
  DollarSign,
  Users,
  ArrowRightCircle,
  BarChart2,
  Zap,
  Code,
  Building,
  Handshake,
  Laptop,
  Lightbulb,
  FileText,
  Layers,
  ExternalLink,
  RefreshCcw,
  CheckCircle,
  AlertCircle,
  Settings,
  TrendingUp,
  PlusCircle,
  BarChart,
  Share2,
  Award
} from "lucide-react";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Custom Database icon component since it's not available in lucide-react
const Database = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const NoCode = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Plateforme No-Code
  const noCodingPlatforms = [
    {
      name: "Bubble.io",
      description: "Créez des applications web complexes sans écrire de code. Interface visuelle puissante et flexible.",
      icon: <Code className="h-6 w-6 text-[#6366F1]" />,
      useCases: ["Applications métier", "SaaS", "Portails clients"],
      color: "bg-gradient-to-br from-[#6366F1]/20 to-[#4338CA]/20"
    },
    {
      name: "Webflow",
      description: "Créez des sites web professionnels avec un CMS puissant. Design et animations de qualité.",
      icon: <Layers className="h-6 w-6 text-[#38BDF8]" />,
      useCases: ["Sites vitrines", "Portfolios", "Blog d'entreprise"],
      color: "bg-gradient-to-br from-[#38BDF8]/20 to-[#0284C7]/20"
    },
    {
      name: "Glide",
      description: "Transforme des feuilles de calcul en applications mobiles ou web en quelques minutes.",
      icon: <Smartphone className="h-6 w-6 text-[#D6BCFA]" />,
      useCases: ["Applications internes", "Catalogues produits", "Outils de terrain"],
      color: "bg-gradient-to-br from-[#D6BCFA]/20 to-[#9b87f5]/20"
    },
    {
      name: "Airtable",
      description: "Plus qu'une base de données, une plateforme pour construire des applications et workflows.",
      icon: <Database className="h-6 w-6 text-[#34D399]" />,
      useCases: ["CRM", "Gestion de projet", "Inventaire"],
      color: "bg-gradient-to-br from-[#34D399]/20 to-[#059669]/20"
    },
    {
      name: "AppSheet",
      description: "Créez des applications à partir de sources de données comme Google Sheets ou Excel.",
      icon: <FileText className="h-6 w-6 text-[#FB923C]" />,
      useCases: ["Applications mobiles", "Formulaires", "Suivi de données"],
      color: "bg-gradient-to-br from-[#FB923C]/20 to-[#EA580C]/20"
    },
    {
      name: "Stacker",
      description: "Créez des portails clients et des outils internes basés sur vos données existantes.",
      icon: <Building className="h-6 w-6 text-[#F472B6]" />,
      useCases: ["Portails clients", "Tableaux de bord", "Outils internes"],
      color: "bg-gradient-to-br from-[#F472B6]/20 to-[#DB2777]/20"
    }
  ];

  // Avantages du No-Code
  const advantages = [
    {
      title: "Rapidité de développement",
      description: "Réduisez le temps de développement de plusieurs mois à quelques semaines, voire quelques jours.",
      icon: <Clock />,
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Réduction des coûts",
      description: "Économisez sur les coûts de développement et de maintenance des solutions logicielles.",
      icon: <DollarSign />,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Accessibilité",
      description: "Permettez à des non-développeurs de créer leurs propres outils et applications.",
      icon: <Users />,
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Agilité",
      description: "Adaptez rapidement vos applications aux besoins changeants du marché ou de l'entreprise.",
      icon: <Zap />,
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "Productivité accrue",
      description: "Automatisez les tâches répétitives et concentrez-vous sur les aspects à forte valeur ajoutée.",
      icon: <BarChart2 />,
      color: "from-purple-500/20 to-fuchsia-500/20"
    },
    {
      title: "Collaboration améliorée",
      description: "Facilitez la compréhension et la collaboration entre les équipes techniques et métiers.",
      icon: <Handshake />,
      color: "from-cyan-500/20 to-sky-500/20"
    }
  ];

  // Nouveaux avantages stratégiques
  const strategicAdvantages = [
    {
      title: "Transformation digitale accélérée",
      description: "Permettez à votre organisation d'adopter rapidement des solutions numériques sans les délais traditionnels du développement sur mesure.",
      icon: <PlusCircle />
    },
    {
      title: "Réduction de la dette technique",
      description: "Les plateformes No-Code sont constamment mises à jour par leurs éditeurs, éliminant une grande partie de la maintenance technique.",
      icon: <RefreshCcw />
    },
    {
      title: "Démocratisation de l'IT",
      description: "Permettez aux experts métier de créer leurs propres solutions sans dépendre entièrement des équipes techniques.",
      icon: <Share2 />
    },
    {
      title: "Expérimentation sans risque",
      description: "Testez rapidement de nouvelles idées avec un investissement minimal avant de décider d'une implémentation à plus grande échelle.",
      icon: <Lightbulb />
    }
  ];

  // Projets réels (exemples concrets)
  const realProjects = [
    {
      title: "Application de suivi commercial",
      description: "Une entreprise de conseil a remplacé son système basé sur Excel par une application no-code en seulement 3 semaines. Résultat : 75% de temps gagné sur la saisie des données et un meilleur suivi des opportunités.",
      platform: "Bubble.io",
      industry: "Conseil",
      before: "Feuilles Excel partagées par email",
      after: "Application web avec tableaux de bord en temps réel",
      roi: "Retour sur investissement en moins de 2 mois",
      icon: <TrendingUp className="h-10 w-10 text-primary" />
    },
    {
      title: "Portail clients pour architecte",
      description: "Un cabinet d'architectes a créé un portail où les clients peuvent suivre l'avancement de leurs projets, consulter les plans et communiquer avec l'équipe, le tout sans une seule ligne de code.",
      platform: "Webflow + Airtable",
      industry: "Architecture",
      before: "Communication par email et partage de fichiers manuel",
      after: "Portail centralisé avec accès sécurisé et notifications automatiques",
      roi: "Réduction de 60% des emails et appels de suivi",
      icon: <Building className="h-10 w-10 text-primary" />
    },
    {
      title: "App mobile pour techniciens terrain",
      description: "Une PME de maintenance industrielle a développé une app mobile permettant à ses techniciens de consulter les fiches d'intervention, documenter leur travail avec photos, et faire signer les clients directement sur l'appareil.",
      platform: "Glide + Google Sheets",
      industry: "Maintenance industrielle",
      before: "Fiches papier et doubles saisies au bureau",
      after: "Saisie unique sur mobile et synchronisation automatique",
      roi: "Gain de 2h par jour et par technicien",
      icon: <Smartphone className="h-10 w-10 text-primary" />
    }
  ];
  
  // Nouveau cas d'étude détaillé
  const detailedCaseStudy = {
    company: "MediConsult",
    sector: "Santé",
    challenge: "Cabinet médical de 15 praticiens souhaitant digitaliser sa gestion des rendez-vous et le suivi des patients.",
    solution: "Application Bubble.io intégrée à leur système de facturation existant",
    timeframe: "6 semaines de conception à déploiement",
    features: [
      "Prise de rendez-vous en ligne pour les patients",
      "Rappels automatiques par SMS et email",
      "Formulaires pré-consultation personnalisables",
      "Dashboards d'activité pour les praticiens",
      "Gestion des documents médicaux"
    ],
    results: [
      "Réduction de 45% des rendez-vous manqués",
      "Économie d'un ETP de secrétariat médical",
      "Augmentation de 15% de la satisfaction patient",
      "Intégration fluide avec les outils existants"
    ]
  };

  // Cas d'usage par secteur
  const useCases = [
    {
      sector: "PME",
      title: "Digitalisation et automatisation",
      description: "Transformez vos processus papier en workflows numériques. Créez des outils internes sans dépendre d'une équipe technique complète.",
      examples: [
        "Application de suivi des interventions terrain",
        "CRM sur mesure adapté à votre activité",
        "Portail client avec gestion de projets"
      ],
      icon: <Building className="h-8 w-8" />,
      stats: [
        { value: "70%", label: "des PMEs utilisent encore des processus manuels" },
        { value: "90%", label: "de réduction du temps de traitement avec des outils digitaux" }
      ]
    },
    {
      sector: "Grandes entreprises",
      title: "Innovation et efficacité opérationnelle",
      description: "Réduisez le shadow IT et donnez aux départements les moyens de créer leurs propres outils, tout en gardant le contrôle sur la sécurité et la gouvernance.",
      examples: [
        "Tableaux de bord pour le suivi des KPIs",
        "Applications pour optimiser la logistique",
        "Portails de collaboration inter-départements"
      ],
      icon: <Briefcase className="h-8 w-8" />,
      stats: [
        { value: "65%", label: "des grands groupes explorent le no-code pour l'innovation interne" },
        { value: "4x", label: "plus rapide pour déployer des applications départementales" }
      ]
    },
    {
      sector: "Startups",
      title: "MVP et itération rapide",
      description: "Lancez votre produit plus rapidement sur le marché et itérez en fonction des retours utilisateurs sans investissement massif en développement.",
      examples: [
        "Première version fonctionnelle de votre plateforme",
        "Tests A/B de différentes fonctionnalités",
        "Validation de votre concept avant investissement lourd"
      ],
      icon: <Lightbulb className="h-8 w-8" />,
      stats: [
        { value: "80%", label: "d'économie sur le développement initial" },
        { value: "3x", label: "plus de fonctionnalités testées dans le même délai" }
      ]
    },
    {
      sector: "Freelances",
      title: "Élargissement des services",
      description: "Proposez à vos clients des solutions complètes sans avoir à maîtriser toutes les technologies de développement.",
      examples: [
        "Création de sites web dynamiques",
        "Applications métier pour vos clients",
        "Dashboards et outils de reporting"
      ],
      icon: <Laptop className="h-8 w-8" />,
      stats: [
        { value: "50%", label: "d'augmentation du panier moyen" },
        { value: "2x", label: "plus de projets réalisables en parallèle" }
      ]
    }
  ];

  // FAQ sur No-Code
  const faqs = [
    {
      question: "Le no-code peut-il remplacer le développement traditionnel ?",
      answer: "Le no-code ne remplace pas entièrement le développement traditionnel, mais le complète. Il est particulièrement efficace pour des applications internes, des MVP et des cas d'usage bien définis. Pour des applications très complexes, hautement personnalisées ou nécessitant des performances extrêmes, le développement traditionnel reste souvent nécessaire."
    },
    {
      question: "Est-ce que les applications no-code sont évolutives ?",
      answer: "Les plateformes no-code modernes offrent une bonne évolutivité pour la plupart des cas d'usage courants. Elles peuvent généralement gérer des milliers d'utilisateurs et de grandes quantités de données. Cependant, pour les applications à très grande échelle (millions d'utilisateurs), des limitations peuvent apparaître. La bonne nouvelle est qu'il existe souvent des chemins de migration vers des solutions plus robustes si nécessaire."
    },
    {
      question: "Comment garantir la sécurité des applications no-code ?",
      answer: "Les plateformes no-code de qualité intègrent des mesures de sécurité solides comme l'authentification, la gestion des rôles, le chiffrement des données et les connexions sécurisées. Il est toutefois important de configurer correctement ces fonctionnalités et de suivre les bonnes pratiques en matière de gestion des accès et des données sensibles, tout comme pour des applications traditionnelles."
    },
    {
      question: "Suis-je limité par les fonctionnalités de la plateforme ?",
      answer: "Les plateformes no-code modernes offrent une grande flexibilité et de nombreuses possibilités d'intégration. La plupart permettent d'étendre les fonctionnalités via des API, des webhooks, et même l'insertion de code personnalisé dans certaines parties de l'application. Ces approches hybrides 'low-code' permettent de combiner la rapidité du no-code avec la flexibilité du code quand c'est nécessaire."
    },
    {
      question: "Quel est le risque de dépendance à la plateforme ?",
      answer: "C'est une préoccupation légitime. Pour limiter ce risque, privilégiez les plateformes qui permettent l'exportation des données dans des formats standards, qui utilisent des technologies web standards (plutôt que des formats propriétaires), et qui ont une communauté active et une stabilité financière. Il est également judicieux d'avoir un plan de sortie documenté dès le début du projet."
    },
    {
      question: "Comment choisir la bonne plateforme no-code pour mon projet ?",
      answer: "Le choix dépend de plusieurs facteurs : type d'application (web, mobile, portail), fonctionnalités requises, compétences de l'équipe, budget, et exigences d'intégration. Nous recommandons d'évaluer plusieurs plateformes en fonction de ces critères et de réaliser un petit prototype sur 2-3 plateformes prometteuses avant de faire votre choix final."
    },
    {
      question: "Combien coûte réellement une solution no-code ?",
      answer: "Le coût comprend l'abonnement à la plateforme (généralement entre 20€ et 500€/mois selon la taille et les fonctionnalités), les coûts de conception et configuration (temps interne ou prestation externe), et parfois des coûts additionnels pour des plugins ou intégrations. Cependant, comparé au développement traditionnel, l'investissement initial reste généralement bien inférieur et le ROI est plus rapide."
    }
  ];

  // Comparaison Code vs No-Code/Low-Code
  const comparison = [
    {
      category: "Temps de développement",
      traditional: "Plusieurs mois",
      nocode: "Quelques semaines",
      winner: "nocode"
    },
    {
      category: "Coût initial",
      traditional: "Élevé (équipe de développeurs)",
      nocode: "Modéré à faible (abonnement plateforme)",
      winner: "nocode"
    },
    {
      category: "Flexibilité technique",
      traditional: "Très élevée (tout est possible)",
      nocode: "Modérée (limitée par la plateforme)",
      winner: "traditional"
    },
    {
      category: "Maintenance",
      traditional: "Complexe (nécessite des développeurs)",
      nocode: "Simple (modifications visuelles)",
      winner: "nocode"
    },
    {
      category: "Évolutivité",
      traditional: "Excellente",
      nocode: "Bonne à moyenne",
      winner: "traditional"
    },
    {
      category: "Accessibilité",
      traditional: "Réservée aux développeurs",
      nocode: "Accessible aux non-techniciens",
      winner: "nocode"
    },
    {
      category: "Personnalisation",
      traditional: "Illimitée",
      nocode: "Limitée par la plateforme",
      winner: "traditional"
    }
  ];

  // Schéma de projet typique
  const projectSteps = [
    {
      step: 1,
      title: "Analyse des besoins",
      description: "Nous identifions ensemble vos objectifs, contraintes et exigences spécifiques."
    },
    {
      step: 2,
      title: "Choix de la plateforme",
      description: "Nous sélectionnons la solution No-Code/Low-Code la plus adaptée à votre projet."
    },
    {
      step: 3,
      title: "Prototype rapide",
      description: "Nous développons un premier prototype fonctionnel en quelques jours pour validation."
    },
    {
      step: 4,
      title: "Itération et affinage",
      description: "Nous affinons la solution en fonction de vos retours et ajoutons les fonctionnalités."
    },
    {
      step: 5,
      title: "Formation",
      description: "Nous vous formons à l'utilisation et à la maintenance de votre application."
    },
    {
      step: 6,
      title: "Déploiement et support",
      description: "Nous déployons la solution et assurons un support technique continu."
    }
  ];

  // Citations inspirantes pour le No-Code
  const quotes = [
    {
      text: "Le No-Code est à l'informatique ce que la démocratisation de l'écriture a été à la connaissance : une révolution qui donne le pouvoir au plus grand nombre.",
      author: "Emmanuel Straschnov",
      role: "Co-fondateur de Bubble.io"
    },
    {
      text: "La valeur n'est pas dans le code lui-même, mais dans les solutions que nous créons et les problèmes que nous résolvons.",
      author: "Wade Foster",
      role: "CEO de Zapier"
    },
    {
      text: "Le No-Code ne consiste pas à éliminer les développeurs, mais à permettre à davantage de personnes de créer et d'innover numériquement.",
      author: "David Adkin",
      role: "Expert en transformation digitale"
    }
  ];

  // Statistics for infographic section
  const noCodeStats = [
    { value: "84%", label: "des entreprises utilisent ou prévoient d'utiliser des outils no-code/low-code" },
    { value: "65%", label: "de tous les développements d'applications seront low-code d'ici 2024" },
    { value: "41%", label: "des entreprises ont au moins 5 applications développées avec des outils no-code" },
    { value: "3x", label: "plus rapide pour lancer des applications par rapport au développement traditionnel" }
  ];

  return (
    <Layout>
      {/* Hero Section with improved styling */}
      <section className="py-16 lg:py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-4"
              >
                <div className="bg-primary/20 text-primary rounded-full px-3 py-1.5 text-sm font-medium inline-flex items-center gap-1.5">
                  <Award className="h-4 w-4" />
                  <span>Guide complet</span>
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
              >
                No-Code & Low-Code
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-[600px] leading-relaxed"
              >
                Comprendre comment ces technologies révolutionnent la création d'applications et démocratisent l'accès au développement logiciel
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="rounded-full px-6 gap-2">
                  <a href="#real-examples">
                    <CheckCircle className="h-4 w-4" />
                    <span>Exemples concrets</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full px-6">
                  <a href="#comparison">Code vs No-Code</a>
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1"
            >
              <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-1 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2340"
                  alt="Développement No-Code / Low-Code"
                  className="rounded-xl w-full object-cover h-[350px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl flex items-end justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-white font-bold text-2xl mb-2">L'avenir du développement</h3>
                    <p className="text-white/90">La démocratisation des technologies numériques</p>
                  </div>
                </div>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-4 -right-4 bg-background rounded-xl border shadow-lg p-4 hidden md:flex items-center gap-3">
                <Zap className="text-primary h-5 w-5" />
                <p className="font-medium">10× plus rapide que le code traditionnel</p>
              </div>
            </motion.div>
          </div>
          
          {/* Key statistics banner */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {noCodeStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-background/70 backdrop-blur border rounded-xl p-6 flex flex-col items-center text-center"
              >
                <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Qu'est-ce que le No-Code / Low-Code ?</h2>
            
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="lead text-xl text-muted-foreground text-center mb-8">
                Une approche révolutionnaire qui permet de créer des applications fonctionnelles sans écrire de code, ou avec un minimum de programmation.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 my-12">
                <div className="flex-1 border rounded-xl p-8 bg-gradient-to-br from-primary/5 to-background shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                    <Code className="h-6 w-6" /> No-Code
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Développement d'applications <strong>sans aucune programmation</strong>, uniquement via des interfaces visuelles par glisser-déposer et des configurations.
                  </p>
                  <div className="mt-6">
                    <Badge variant="outline" className="mr-2 mb-2 bg-primary/5">Pour non-techniciens</Badge>
                    <Badge variant="outline" className="mr-2 mb-2 bg-primary/5">Interfaces visuelles</Badge>
                    <Badge variant="outline" className="mr-2 mb-2 bg-primary/5">Applications simples à moyennes</Badge>
                  </div>
                </div>
                
                <div className="flex-1 border rounded-xl p-8 bg-gradient-to-br from-primary/5 to-background shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                    <Code className="h-6 w-6" /> Low-Code
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Développement qui combine des interfaces visuelles avec la <strong>possibilité d'ajouter du code personnalisé</strong> pour des fonctionnalités avancées.
                  </p>
                  <div className="mt-6">
                    <Badge variant="outline" className="mr-2 mb-2 bg-primary/5">Pour développeurs et techniciens</Badge>
                    <Badge variant="outline" className="mr-2 mb-2 bg-primary/5">Hybride visuel/code</Badge>
                    <Badge variant="outline" className="mr-2 mb-2 bg-primary/5">Applications complexes</Badge>
                  </div>
                </div>
              </div>
              
              <Alert className="mb-8 bg-primary/5 border-primary/20">
                <AlertDescription className="text-base">
                  Ces technologies ne remplacent pas totalement le développement traditionnel, mais offrent des alternatives rapides et accessibles pour de nombreux cas d'usage.
                </AlertDescription>
              </Alert>
              
              <p className="text-center text-muted-foreground">
                À l'ère où la transformation numérique est cruciale pour toute organisation, ces approches permettent de créer rapidement des applications fonctionnelles sans avoir à recruter une équipe complète de développeurs ou à investir dans des projets informatiques longs et coûteux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation inspirante */}
      <section className="py-12 bg-primary/5 overflow-hidden relative">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="mb-6 text-5xl text-primary/30">"</div>
              <p className="text-2xl md:text-3xl font-serif italic mb-8 text-muted-foreground">
                {quotes[0].text}
              </p>
              <div>
                <p className="font-semibold">{quotes[0].author}</p>
                <p className="text-sm text-muted-foreground">{quotes[0].role}</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-5">
          <Code className="h-64 w-64 text-primary" />
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-5">
          <Layers className="h-64 w-64 text-primary" />
        </div>
      </section>

      {/* Avantages No-Code / Low-Code */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Pourquoi s'intéresser au No-Code / Low-Code ?
            </h2>
            <p className="text-muted-foreground text-lg">
              Ces approches offrent des bénéfices tangibles pour les organisations de toutes tailles
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {advantages.map((advantage, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-background rounded-xl border p-6 shadow-sm flex flex-col h-full hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-5`}>
                  {React.cloneElement(advantage.icon, { className: "h-7 w-7 text-primary" })}
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground flex-grow">{advantage.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Strategic advantages */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Avantages stratégiques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strategicAdvantages.map((advantage, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-primary/10 rounded-full p-3 mt-1">
                    {React.cloneElement(advantage.icon, { className: "h-5 w-5 text-primary" })}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{advantage.title}</h4>
                    <p className="text-muted-foreground text-sm">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Étude de cas détaillée */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="outline" className="mb-4">ÉTUDE DE CAS</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Transformation digitale dans le secteur médical
              </h2>
              <p className="text-muted-foreground text-lg">
                Comment un cabinet médical a révolutionné sa gestion grâce au No-Code
              </p>
            </div>
            
            <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-br from-background to-muted/30">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 bg-primary/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Building className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{detailedCaseStudy.company}</h3>
                      <p className="text-muted-foreground">Secteur: {detailedCaseStudy.sector}</p>
                      <div className="mt-4 p-3 bg-background/50 rounded-lg">
                        <p className="text-sm font-medium">Délai de réalisation:</p>
                        <p className="text-lg font-bold text-primary">{detailedCaseStudy.timeframe}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3 p-8">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-amber-500" /> Problématique
                        </h4>
                        <p className="text-muted-foreground">{detailedCaseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-primary" /> Solution
                        </h4>
                        <p className="text-muted-foreground mb-4">{detailedCaseStudy.solution}</p>
                        
                        <div className="pl-4 border-l-2 border-primary/20 mt-4">
                          <p className="font-medium mb-2">Fonctionnalités clés:</p>
                          <ul className="space-y-2">
                            {detailedCaseStudy.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <BarChart className="h-5 w-5 text-emerald-500" /> Résultats
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                          {detailedCaseStudy.results.map((result, index) => (
                            <div key={index} className="bg-background p-3 rounded-lg border text-center">
                              <p className="text-sm text-muted-foreground">{result}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exemples du monde réel */}
      <section id="real-examples" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Exemples concrets et résultats
            </h2>
            <p className="text-muted-foreground text-lg">
              Découvrez comment des organisations ont transformé leurs processus grâce au No-Code / Low-Code
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {realProjects.map((project, index) => (
              <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow border-primary/5">
                <CardHeader className="pb-4">
                  <div className="mb-5 p-3 bg-primary/10 rounded-full w-fit">{project.icon}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary" className="bg-muted/50">{project.industry}</Badge>
                    <Badge variant="outline">{project.platform}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="space-y-4 mt-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-500/10 p-2 rounded-full">
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                      </div>
                      <div>
                        <p className="font-medium">Avant:</p>
                        <p className="text-sm text-muted-foreground">{project.before}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-500/10 p-2 rounded-full">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                      </div>
                      <div>
                        <p className="font-medium">Après:</p>
                        <p className="text-sm text-muted-foreground">{project.after}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Badge variant="default" className="w-full justify-center py-2 font-medium">
                    {project.roi}
                  </Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plateformes No-Code / Low-Code */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Les plateformes No-Code populaires
            </h2>
            <p className="text-muted-foreground text-lg">
              Explorer les outils qui permettent de créer des applications sans code
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {noCodingPlatforms.map((platform, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`rounded-xl p-8 border shadow-sm h-full ${platform.color} hover:shadow-md transition-all`}
              >
                <div className="p-3 bg-background/70 rounded-full w-fit mb-6">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{platform.name}</h3>
                <p className="text-muted-foreground mb-6">{platform.description}</p>
                <div className="mt-auto">
                  <p className="font-medium text-sm mb-3">Cas d'usage:</p>
                  <div className="flex flex-wrap gap-2">
                    {platform.useCases.map((useCase, i) => (
                      <span key={i} className="bg-background/80 text-xs rounded-full px-3 py-1.5 border border-background/70">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" className="group rounded-full px-6">
              <a href="https://nocodelist.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Explorer plus de plateformes
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cas d'usage par secteur */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Applications par secteur d'activité
            </h2>
            <p className="text-muted-foreground text-lg">
              Comment différentes organisations tirent parti du No-Code / Low-Code
            </p>
          </div>

          <Tabs defaultValue={useCases[0].sector} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8 p-1 bg-muted/50">
              {useCases.map((useCase, index) => (
                <TabsTrigger key={index} value={useCase.sector} className="text-center py-3">
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-background/50 p-2 rounded-full">
                      {useCase.icon}
                    </div>
                    <span>{useCase.sector}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {useCases.map((useCase, index) => (
              <TabsContent key={index} value={useCase.sector} className="pt-4">
                <Card className="border-none shadow-md overflow-hidden bg-gradient-to-br from-background to-muted/20">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-3 text-primary">{useCase.title}</h3>
                        <p className="text-muted-foreground mb-8">{useCase.description}</p>
                        
                        <div className="mb-8">
                          <h4 className="font-semibold mb-4">Applications populaires:</h4>
                          <ul className="space-y-4">
                            {useCase.examples.map((example, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                                  <ArrowRightCircle className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-muted-foreground">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-5">
                          {useCase.stats.map((stat, i) => (
                            <div key={i} className="bg-primary/5 rounded-lg p-4 flex-1 min-w-[180px]">
                              <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                              <p className="text-xs text-muted-foreground">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-muted/20 p-0">
                        <img 
                          src={index % 2 === 0 ? 
                            "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=2340" : 
                            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2340"}
                          alt={`${useCase.sector} solutions`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Comparaison Code vs No-Code */}
      <section id="comparison" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Comparaison : Code traditionnel vs No-Code
            </h2>
            <p className="text-muted-foreground text-lg">
              Chaque approche a ses avantages et ses limites
            </p>
          </div>

          <div className="overflow-x-auto bg-background rounded-xl shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="py-4 px-6 text-left font-medium">Critère</th>
                  <th className="py-4 px-6 text-left font-medium">Développement traditionnel</th>
                  <th className="py-4 px-6 text-left font-medium">No-Code / Low-Code</th>
                  <th className="py-4 px-6 text-center font-medium">Avantage</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-muted/10" : ""}>
                    <td className="py-4 px-6 font-medium">{item.category}</td>
                    <td className="py-4 px-6 text-muted-foreground">{item.traditional}</td>
                    <td className="py-4 px-6 text-muted-foreground">{item.nocode}</td>
                    <td className="py-4 px-6 text-center">
                      <Badge variant={item.winner === "nocode" ? "default" : "outline"}>
                        {item.winner === "nocode" ? "No-Code" : "Traditionnel"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Quelle approche choisir ?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border rounded-xl p-8 bg-background shadow-sm hover:shadow-md transition-all">
                <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
                  <div className="bg-muted p-2 rounded-full">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  Privilégier le Code Traditionnel quand :
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <ArrowRightCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Vous avez besoin d'une personnalisation extrême</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <ArrowRightCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Les performances sont critiques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <ArrowRightCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Vous prévoyez des millions d'utilisateurs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <ArrowRightCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Vous avez des besoins d'intégration très spécifiques</span>
                  </li>
                </ul>
              </div>
              <div className="border rounded-xl p-8 bg-background shadow-sm hover:shadow-md transition-all">
                <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
                  <div className="bg-muted p-2 rounded-full">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  Privilégier le No-Code / Low-Code quand :
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <ArrowRightCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Vous avez besoin d'un développement rapide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <ArrowRightCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Votre budget est limité</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <ArrowRightCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Vous souhaitez itérer et tester rapidement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                      <ArrowRightCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Vous n'avez pas accès à des développeurs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Étapes de projet */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Comment se déroule un projet No-Code / Low-Code ?
            </h2>
            <p className="text-muted-foreground text-lg">
              Notre méthodologie pour des projets efficaces et réussis
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Connector line */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 bottom-0 w-1 bg-primary/20 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectSteps.map((step, index) => (
                <div key={index} className="bg-background rounded-xl border shadow-sm p-8 flex flex-col items-center text-center relative z-10 hover:shadow-md hover:border-primary/20 transition-all">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-6 border-4 border-background">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Questions fréquentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Les réponses aux questions que vous vous posez sur le No-Code / Low-Code
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="border rounded-xl p-6 bg-background/50 shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="text-sm">{index + 1}</span>
                    </div>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-muted-foreground pl-10">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Prêt à explorer les possibilités du No-Code / Low-Code ?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Discutons de votre projet et voyons comment ces technologies peuvent vous aider à atteindre vos objectifs plus rapidement et à moindre coût.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/contact">Contactez-nous</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                <Link to="/services">Découvrir nos autres services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 text-background opacity-20">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>
    </Layout>
  );
};

export default NoCode;
