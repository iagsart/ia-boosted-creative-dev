
import { ResourceItem } from "@/types/resources";

export const resources: ResourceItem[] = [
  {
    title: "Guide d'IA Éthique",
    description: "Un guide complet sur les bonnes pratiques en matière d'IA éthique et responsable.",
    icon: "Book",
    link: "/blog/ia-ethique",
    category: 'guide',
    tags: ['IA', 'Éthique', 'Bonnes pratiques'],
    featured: true,
    preview: "/images/ai-ethics-guide.svg",
    downloadCount: 1248
  },
  {
    title: "Guide Python Data Science",
    description: "Introduction complète à l'analyse de données avec Python et ses bibliothèques essentielles.",
    icon: "FileCode",
    link: "/blog/python-data-analysis",
    category: 'guide',
    tags: ['Python', 'Data Science', 'Pandas', 'NumPy'],
    preview: "/images/python-data-science-guide.svg",
    downloadCount: 985
  },
  {
    title: "Introduction au Machine Learning",
    description: "Comprendre les concepts fondamentaux du machine learning et ses applications.",
    icon: "Sparkles",
    link: "/blog/introduction-ai",
    category: 'guide',
    tags: ['Machine Learning', 'IA', 'Algorithmes'],
    preview: "/images/machine-learning-intro.svg",
    downloadCount: 765
  },
  {
    title: "Guide des Alternatives Open Source",
    description: "Découvrez les meilleures alternatives open source aux logiciels propriétaires populaires.",
    icon: "FileText",
    link: "/blog/opensource-alternatives",
    category: 'guide',
    tags: ['Open Source', 'Logiciels', 'Alternatives'],
    preview: "/images/opensource-alternatives-guide.svg",
    downloadCount: 632
  },
  {
    title: "L'art du Prompt Engineering",
    description: "Maîtrisez la création de prompts efficaces pour les modèles d'IA générative.",
    icon: "PenTool",
    link: "/blog/prompt-engineering",
    category: 'guide',
    tags: ['Prompts', 'IA Générative', 'ChatGPT'],
    featured: true,
    preview: "/images/prompt-engineering-art.svg",
    downloadCount: 1576
  },
  
  // Templates
  {
    title: "Template React/TypeScript",
    description: "Un modèle de projet React avec TypeScript, préconfiguré avec les meilleures pratiques.",
    icon: "Code",
    link: "/blog/react-typescript-template",
    category: 'template',
    tags: ['React', 'TypeScript', 'Frontend'],
    featured: true,
    preview: "/images/template-react-typescript.svg",
    downloadCount: 2145
  },
  {
    title: "Template Portfolio",
    description: "Un template moderne et responsive pour créer votre portfolio professionnel.",
    icon: "Layout",
    link: "https://github.com/yourusername/portfolio-template",
    category: 'template',
    tags: ['Portfolio', 'CSS', 'Responsive'],
    preview: "/images/template-portfolio.svg",
    downloadCount: 1821
  },
  {
    title: "Dashboard Admin React",
    description: "Template d'administration complet avec tableaux de bord, graphiques et gestion d'utilisateurs.",
    icon: "LineChart",
    link: "https://github.com/yourusername/admin-dashboard",
    category: 'template',
    tags: ['Dashboard', 'Admin', 'React', 'Charts'],
    preview: "/images/dashboard-admin-react.svg",
    downloadCount: 1536
  },
  {
    title: "Application Mobile React Native",
    description: "Structure de base pour une application mobile multi-plateforme avec React Native.",
    icon: "Smartphone",
    link: "https://github.com/yourusername/react-native-starter",
    category: 'template',
    tags: ['React Native', 'Mobile', 'iOS', 'Android'],
    preview: "/images/react-native-app-template.svg",
    downloadCount: 1289
  },
  {
    title: "API Backend Node.js",
    description: "Structure complète pour une API RESTful avec Express.js, MongoDB et authentification JWT.",
    icon: "Terminal",
    link: "https://github.com/yourusername/nodejs-api-template",
    category: 'template',
    tags: ['Node.js', 'API', 'Express', 'MongoDB'],
    preview: "/images/nodejs-api-template.svg",
    downloadCount: 1745
  },
  {
    title: "Landing Page Marketing",
    description: "Template de page d'accueil optimisé pour la conversion avec sections modulaires.",
    icon: "Layers",
    link: "/blog/landing-page-marketing",
    category: 'template',
    tags: ['Marketing', 'Landing Page', 'Conversion'],
    featured: true,
    preview: "/images/landing-page-marketing.svg",
    downloadCount: 2356
  },
  {
    title: "Template E-commerce",
    description: "Structure complète pour une boutique en ligne avec panier, paiement et gestion de produits.",
    icon: "ShoppingCart",
    link: "https://github.com/yourusername/ecommerce-template",
    category: 'template',
    tags: ['E-commerce', 'Boutique', 'Paiement'],
    preview: "/images/ecommerce-template.svg",
    downloadCount: 1953
  },
  
  // Tutoriels
  {
    title: "Tutoriel Création API GraphQL",
    description: "Apprenez à créer une API GraphQL complète avec Node.js et Apollo Server.",
    icon: "Braces",
    link: "https://graphql.org/learn/",
    category: 'tutoriel',
    tags: ['GraphQL', 'API', 'Node.js', 'Apollo'],
    downloadCount: 843
  },
  {
    title: "Tutoriel Déploiement CI/CD",
    description: "Guide étape par étape pour mettre en place un pipeline CI/CD avec GitHub Actions.",
    icon: "GitBranch",
    link: "/blog/cicd-deployment",
    category: 'tutoriel',
    tags: ['CI/CD', 'DevOps', 'GitHub Actions'],
    featured: true,
    preview: "/images/cicd-deployment.svg",
    downloadCount: 765
  },
  {
    title: "Tutoriel UI Design Figma",
    description: "Créez une interface utilisateur moderne et responsive avec Figma.",
    icon: "Palette",
    link: "https://www.figma.com/community/file/1044318474393017528/ui-design-tutorial",
    category: 'tutoriel',
    tags: ['UI Design', 'Figma', 'UX'],
    downloadCount: 987
  },
  
  // Outils
  {
    title: "Générateur de Palettes de Couleurs",
    description: "Créez des palettes de couleurs harmonieuses pour vos projets web et design.",
    icon: "Palette",
    link: "https://coolors.co",
    category: 'outil',
    tags: ['Couleurs', 'Design', 'Web'],
    preview: "/images/services/services_creatifs.svg",
    downloadCount: 1254
  },
  {
    title: "Calculateur de Performance Web",
    description: "Analysez et optimisez les performances de votre site web.",
    icon: "LineChart",
    link: "/blog/performance-web",
    category: 'outil',
    tags: ['Performance', 'Web', 'Optimisation'],
    featured: true,
    preview: "/images/expertise-dev.jpg",
    downloadCount: 876
  },
  {
    title: "Générateur de Politique de Confidentialité",
    description: "Créez une politique de confidentialité conforme au RGPD pour votre site web.",
    icon: "Shield",
    link: "https://www.privacypolicygenerator.info/",
    category: 'outil',
    tags: ['RGPD', 'Légal', 'Confidentialité'],
    preview: "/images/service-conseil-strategique.jpg",
    downloadCount: 1432
  },
  {
    title: "Explorateur de Schémas SQL",
    description: "Visualisez et concevez des schémas de base de données SQL.",
    icon: "Database",
    link: "https://dbdiagram.io/",
    category: 'outil',
    tags: ['SQL', 'Database', 'Schéma'],
    preview: "/images/service-data.jpg",
    downloadCount: 789
  }
];
