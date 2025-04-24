import { Code, Brain, Palette, Lightbulb, Music, Database, BarChart3, Laptop, Cpu } from "lucide-react";

export const navLinks = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "À Propos",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services/ai",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const siteConfig = {
  name: "Next Level IA",
  url: "https://nextlevelia.fr",
  ogImage: "https://nextlevelia.fr/og.jpg",
  description:
    "Boostez votre présence en ligne grâce à des solutions innovantes en IA et en développement web. Conseils personnalisés et expertise technique pour des résultats exceptionnels.",
  keywords: ["IA", "Développement Web", "Conseil", "Freelance", "Innovation"],
  authors: [{ name: "Cédric B.", url: "https://nextlevelia.fr" }],
  creator: "Cédric B.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  twitter: "https://twitter.com/cdricB",
  links: {
    twitter: "https://twitter.com/cdricB",
    github: "https://github.com/cdricB",
  },
};

export const skillsData = [
  "Intelligence Artificielle",
  "Prompt Engineering",
  "Design UI/UX",
  "Développement Front-end",
  "Développement Back-end",
  "Bases de Données",
  "Cloud Computing",
  "Automatisation",
  "Analyse de Données",
  "Marketing Digital",
  "Gestion de Projet",
];

export const experiencesData = [
  {
    title: "Freelance - Consultant IA & Développement Web",
    location: "Paris, FR",
    description:
      "Accompagnement de clients dans l'intégration de solutions d'IA et le développement de sites web performants. Optimisation de l'expérience utilisateur et automatisation des processus.",
    icon: Code,
    date: "2023 - Présent",
  },
  {
    title: "Ingénieur Optronique",
    location: "Safran, FR",
    description:
      "Conception et développement de systèmes optroniques complexes pour l'industrie aérospatiale. Expertise en traitement du signal, vision artificielle et systèmes embarqués.",
    icon: Lightbulb,
    date: "2010 - 2023",
  },
  {
    title: "Ingénieur R&D",
    location: "Thales, FR",
    description:
      "Recherche et développement de nouvelles technologies pour les systèmes de communication. Spécialisation en traitement du signal, algorithmes d'IA et optimisation des performances.",
    icon: Brain,
    date: "2008 - 2010",
  },
  {
    title: "Étudiant Ingénieur",
    location: "Telecom ParisTech, FR",
    description:
      "Formation d'ingénieur spécialisée en traitement du signal, optique et électronique. Acquisition de compétences en développement logiciel, gestion de projet et communication.",
    icon: Cpu,
    date: "2005 - 2008",
  },
];

export const servicesData = [
  {
    title: "Conseil IA & Prompting",
    description:
      "Accompagnement dans l'utilisation des IA pour vos projets, optimisation de prompts et stratégies d'intégration pour maximiser le potentiel créatif et technique.",
    icon: Brain,
    link: "/services/ai",
  },
  {
    title: "Infographie & Design",
    description:
      "Création de logos, identités visuelles et supports graphiques personnalisés avec une approche combinant créativité humaine et outils numériques avancés.",
    icon: Palette,
    link: "/services/content",
  },
  {
    title: "Expertise Optronique",
    description:
      "Conseil en optique, électronique, systèmes embarqués et traitement du signal basé sur plus de 15 ans d'expérience dans l'industrie spécialisée.",
    icon: Lightbulb,
    link: "/services/consulting",
  },
  {
    title: "Solutions No-Code & Low-Code",
    description:
      "Création d'applications et sites web sans code complexe, privilégiant les outils open source et adaptables à vos besoins spécifiques.",
    icon: Code,
    link: "/services/development",
  },
  {
    title: "Idéation & Stratégie Créative",
    description:
      "Séances de brainstorming assistées par IA, génération de concepts innovants et élaboration de stratégies créatives pour votre entreprise ou projet.",
    icon: Lightbulb,
    link: "/services/consulting",
  },
  {
    title: "Gestion & Visualisation de Données",
    description:
      "Organisation, traitement et visualisation de vos données avec des outils adaptés (Python, Jupyter, Metabase), automatisation de processus (n8n, make).",
    icon: Database,
    link: "/services/data",
  },
];

export const projectsData = [
  {
    title: "Plateforme de gestion de contenu IA",
    description:
      "Conception et développement d'une plateforme web permettant de générer, organiser et publier du contenu optimisé pour le SEO grâce à l'IA.",
    image: "/images/projects/project1.jpg",
    link: "https://github.com/cdricB",
    tags: ["IA", "Web", "SEO"],
  },
  {
    title: "Application mobile de reconnaissance d'images",
    description:
      "Développement d'une application mobile capable d'identifier des objets et des lieux à partir d'images grâce à des algorithmes de vision artificielle.",
    image: "/images/projects/project2.jpg",
    link: "https://github.com/cdricB",
    tags: ["IA", "Mobile", "Vision"],
  },
  {
    title: "Outil d'analyse prédictive des ventes",
    description:
      "Création d'un outil d'analyse prédictive des ventes basé sur des modèles de machine learning. Prévision des tendances et optimisation des stratégies commerciales.",
    image: "/images/projects/project3.jpg",
    link: "https://github.com/cdricB",
    tags: ["IA", "Data", "Ventes"],
  },
  {
    title: "Site web vitrine pour une entreprise locale",
    description:
      "Conception et développement d'un site web vitrine moderne et responsive pour une entreprise locale. Mise en valeur de l'identité visuelle et optimisation de l'expérience utilisateur.",
    image: "/images/projects/project4.jpg",
    link: "https://github.com/cdricB",
    tags: ["Web", "Design", "Marketing"],
  },
  {
    title: "Application web de gestion de projet",
    description:
      "Développement d'une application web complète pour la gestion de projet. Suivi des tâches, collaboration en équipe et optimisation des workflows.",
    image: "/images/projects/project5.jpg",
    link: "https://github.com/cdricB",
    tags: ["Web", "Gestion", "Productivité"],
  },
  {
    title: "Chatbot intelligent pour le service client",
    description:
      "Création d'un chatbot intelligent capable de répondre aux questions des clients et de résoudre les problèmes courants. Amélioration de la satisfaction client et réduction des coûts.",
    image: "/images/projects/project6.jpg",
    link: "https://github.com/cdricB",
    tags: ["IA", "Chatbot", "Service Client"],
  },
];

export const testimonialsData = [
  {
    name: "Sophie Dubois",
    title: "Directrice Marketing",
    company: "ABC Corp",
    image: "/images/testimonials/sophie.jpg",
    testimonial:
      "Cédric a su comprendre nos besoins et nous proposer des solutions innovantes en IA. Son expertise et son professionnalisme ont été précieux pour notre entreprise.",
  },
  {
    name: "Pierre Martin",
    title: "Chef de Projet",
    company: "XYZ Solutions",
    image: "/images/testimonials/pierre.jpg",
    testimonial:
      "Nous avons fait appel à Cédric pour le développement de notre site web et nous sommes très satisfaits du résultat. Un travail de qualité, réalisé dans les délais et avec une grande réactivité.",
  },
  {
    name: "Julie Garcia",
    title: "Fondatrice",
    company: "Startup Innov",
    image: "/images/testimonials/julie.jpg",
    testimonial:
      "Cédric nous a accompagné dans la mise en place de notre stratégie digitale et nous a conseillé sur les meilleures solutions d'IA à adopter. Un partenaire de confiance pour notre croissance.",
  },
];

export const pricingData = [
  {
    title: "Basique",
    price: "99€",
    description: "Pour les petits projets et les besoins ponctuels",
    features: [
      "Conseil personnalisé",
      "Accès à la documentation",
      "Support par email",
    ],
    link: "/contact",
  },
  {
    title: "Standard",
    price: "299€",
    description: "Pour les projets plus importants et les besoins réguliers",
    features: [
      "Conseil personnalisé",
      "Accès à la documentation",
      "Support prioritaire",
      "Intégration de solutions IA",
    ],
    link: "/contact",
  },
  {
    title: "Premium",
    price: "499€",
    description: "Pour les projets complexes et les besoins spécifiques",
    features: [
      "Conseil personnalisé",
      "Accès à la documentation",
      "Support VIP",
      "Intégration de solutions IA",
      "Développement sur mesure",
    ],
    link: "/contact",
  },
];

export const blogPosts = [
  {
    title: "L'IA au service de la création de contenu",
    slug: "ia-creation-contenu",
    date: "2024-03-15",
    author: "Cédric B.",
    image: "/images/blog/ia-contenu.jpg",
    excerpt:
      "Découvrez comment l'intelligence artificielle peut vous aider à créer du contenu de qualité, rapidement et efficacement.",
    content:
      "L'intelligence artificielle est en train de révolutionner la création de contenu. Grâce à des outils comme GPT-3, il est désormais possible de générer des articles de blog, des descriptions de produits et même des scripts vidéo en quelques minutes. Mais comment utiliser ces outils de manière efficace ? Quels sont les avantages et les inconvénients de l'IA pour la création de contenu ? Cet article vous donne toutes les clés pour comprendre et utiliser l'IA au service de votre stratégie de contenu.",
    categories: ["IA", "Marketing", "Contenu"],
  },
  {
    title: "Les enjeux éthiques de l'intelligence artificielle",
    slug: "enjeux-ethiques-ia",
    date: "2024-02-28",
    author: "Cédric B.",
    image: "/images/blog/ethique-ia.jpg",
    excerpt:
      "L'intelligence artificielle soulève de nombreuses questions éthiques. Cet article explore les principaux enjeux et les pistes de réflexion pour une IA responsable.",
    content:
      "L'intelligence artificielle est une technologie puissante qui soulève de nombreuses questions éthiques. Parmi les principaux enjeux, on peut citer la transparence des algorithmes, la protection des données personnelles, la lutte contre les biais et la responsabilité des décisions prises par les machines. Comment garantir une IA responsable et respectueuse des valeurs humaines ? Cet article vous propose une réflexion approfondie sur les enjeux éthiques de l'IA et les pistes à explorer pour un avenir plus juste et équitable.",
    categories: ["IA", "Société", "Ethique"],
  },
  {
    title: "Le no-code : une révolution pour le développement web ?",
    slug: "no-code-revolution",
    date: "2024-02-15",
    author: "Cédric B.",
    image: "/images/blog/no-code.jpg",
    excerpt:
      "Le no-code permet de créer des applications web sans écrire une seule ligne de code. Est-ce une révolution ou un simple effet de mode ?",
    content:
      "Le no-code est une approche du développement web qui permet de créer des applications sans écrire une seule ligne de code. Grâce à des outils visuels et intuitifs, il est désormais possible de concevoir des sites web, des applications mobiles et des automatisations complexes sans avoir de compétences en programmation. Le no-code est-il une révolution ou un simple effet de mode ? Quels sont les avantages et les inconvénients de cette approche ? Cet article vous donne toutes les clés pour comprendre et utiliser le no-code au service de vos projets web.",
    categories: ["Web", "No-code", "Productivité"],
  },
  {
    title: "Comment l'IA transforme le marketing digital",
    slug: "ia-marketing-digital",
    date: "2024-01-31",
    author: "Cédric B.",
    image: "/images/blog/ia-marketing.jpg",
    excerpt:
      "L'IA offre de nouvelles opportunités pour le marketing digital. Découvrez comment l'utiliser pour améliorer votre stratégie et atteindre vos objectifs.",
    content:
      "L'intelligence artificielle est en train de transformer le marketing digital. Grâce à des outils comme le machine learning et le natural language processing, il est désormais possible d'automatiser les tâches répétitives, de personnaliser les messages et d'analyser les données avec une précision inégalée. Comment utiliser l'IA pour améliorer votre stratégie de marketing digital ? Quels sont les avantages et les inconvénients de cette approche ? Cet article vous donne toutes les clés pour comprendre et utiliser l'IA au service de votre marketing digital.",
    categories: ["IA", "Marketing", "Digital"],
  },
];

export const SERVICE_IMAGES = {
  development: '/images/services/services_de_developpement.svg',
  ai: '/images/services/solutions_ia.svg',
  content: '/images/services/services_creatifs.svg',
  music: '/images/services/creation_musicale.jpg',
  consulting: '/images/services/conseil_technologique.jpg',
  default: '/images/services/developpement_web.jpg'
} as const;
