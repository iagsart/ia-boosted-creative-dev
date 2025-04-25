
import { PageHeader } from "@/components/ui/page-header";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { 
  ArrowRight, FileText, Book, Download, Layout as LayoutIcon, 
  Code, FileCode, Video, Sparkles, Braces, MonitorSmartphone, 
  ImageIcon, PenTool, BookOpen, BookMarked, Terminal, FolderGit,
  Layers, Palette, Table, LineChart, PieChart, FileLock, Database
} from "lucide-react";
import { cn } from "@/lib/utils";
import FaqSection from "@/components/faq/FaqSection";
import Chatbot from "@/components/chat/Chatbot";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ResourceItem {
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
  category: 'template' | 'guide' | 'tutoriel' | 'outil';
  tags: string[];
  featured?: boolean;
  preview?: string;
  downloadCount?: number;
}

const resources: ResourceItem[] = [
  // Guides
  {
    title: "Guide d'IA Éthique",
    description: "Un guide complet sur les bonnes pratiques en matière d'IA éthique et responsable.",
    icon: <Book className="h-6 w-6" />,
    link: "/blog/ai-ethics",
    category: 'guide',
    tags: ['IA', 'Éthique', 'Bonnes pratiques'],
    featured: true,
    preview: "/images/ai-ethics-guide.svg",
    downloadCount: 1248
  },
  {
    title: "Guide Python Data Science",
    description: "Introduction complète à l'analyse de données avec Python et ses bibliothèques essentielles.",
    icon: <FileCode className="h-6 w-6" />,
    link: "/blog/python-data-analysis",
    category: 'guide',
    tags: ['Python', 'Data Science', 'Pandas', 'NumPy'],
    preview: "/images/python-data-science-guide.svg",
    downloadCount: 985
  },
  {
    title: "Introduction au Machine Learning",
    description: "Comprendre les concepts fondamentaux du machine learning et ses applications.",
    icon: <Sparkles className="h-6 w-6" />,
    link: "/blog/machine-learning-basics",
    category: 'guide',
    tags: ['Machine Learning', 'IA', 'Algorithmes'],
    preview: "/images/machine-learning-intro.svg",
    downloadCount: 765
  },
  {
    title: "Guide des Alternatives Open Source",
    description: "Découvrez les meilleures alternatives open source aux logiciels propriétaires populaires.",
    icon: <BookOpen className="h-6 w-6" />,
    link: "/blog/opensource-alternatives",
    category: 'guide',
    tags: ['Open Source', 'Logiciels', 'Alternatives'],
    preview: "/images/opensource-alternatives-guide.svg",
    downloadCount: 632
  },
  {
    title: "L'art du Prompt Engineering",
    description: "Maîtrisez la création de prompts efficaces pour les modèles d'IA générative.",
    icon: <PenTool className="h-6 w-6" />,
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
    icon: <Code className="h-6 w-6" />,
    link: "https://github.com/yourusername/react-typescript-template",
    category: 'template',
    tags: ['React', 'TypeScript', 'Frontend'],
    featured: true,
    preview: "/images/template-react-typescript.svg",
    downloadCount: 2145
  },
  {
    title: "Template Portfolio",
    description: "Un template moderne et responsive pour créer votre portfolio professionnel.",
    icon: <LayoutIcon className="h-6 w-6" />,
    link: "https://github.com/yourusername/portfolio-template",
    category: 'template',
    tags: ['Portfolio', 'CSS', 'Responsive'],
    preview: "/images/service-optronics.jpg",
    downloadCount: 1821
  },
  {
    title: "Dashboard Admin React",
    description: "Template d'administration complet avec tableaux de bord, graphiques et gestion d'utilisateurs.",
    icon: <LineChart className="h-6 w-6" />,
    link: "https://github.com/yourusername/admin-dashboard",
    category: 'template',
    tags: ['Dashboard', 'Admin', 'React', 'Charts'],
    preview: "/images/service-data.jpg",
    downloadCount: 1536
  },
  {
    title: "Application Mobile React Native",
    description: "Structure de base pour une application mobile multi-plateforme avec React Native.",
    icon: <MonitorSmartphone className="h-6 w-6" />,
    link: "https://github.com/yourusername/react-native-starter",
    category: 'template',
    tags: ['React Native', 'Mobile', 'iOS', 'Android'],
    preview: "/images/react-native-app-template.svg",
    downloadCount: 1289
  },
  {
    title: "API Backend Node.js",
    description: "Structure complète pour une API RESTful avec Express.js, MongoDB et authentification JWT.",
    icon: <Terminal className="h-6 w-6" />,
    link: "https://github.com/yourusername/nodejs-api-template",
    category: 'template',
    tags: ['Node.js', 'API', 'Express', 'MongoDB'],
    preview: "/images/nodejs-api-template.svg",
    downloadCount: 1745
  },
  {
    title: "Landing Page Marketing",
    description: "Template de page d'accueil optimisé pour la conversion avec sections modulaires.",
    icon: <Layers className="h-6 w-6" />,
    link: "https://github.com/yourusername/landing-page-template",
    category: 'template',
    tags: ['Marketing', 'Landing Page', 'Conversion'],
    featured: true,
    preview: "/images/landing-page-marketing.svg",
    downloadCount: 2356
  },
  {
    title: "Template E-commerce",
    description: "Structure complète pour une boutique en ligne avec panier, paiement et gestion de produits.",
    icon: <Table className="h-6 w-6" />,
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
    icon: <Braces className="h-6 w-6" />,
    link: "/blog/graphql-api-tutorial",
    category: 'tutoriel',
    tags: ['GraphQL', 'API', 'Node.js', 'Apollo'],
    downloadCount: 843
  },
  {
    title: "Tutoriel Déploiement CI/CD",
    description: "Guide étape par étape pour mettre en place un pipeline CI/CD avec GitHub Actions.",
    icon: <FolderGit className="h-6 w-6" />,
    link: "/blog/cicd-github-actions",
    category: 'tutoriel',
    tags: ['CI/CD', 'DevOps', 'GitHub Actions'],
    featured: true,
    preview: "/images/cicd-deployment.svg",
    downloadCount: 765
  },
  {
    title: "Tutoriel UI Design Figma",
    description: "Créez une interface utilisateur moderne et responsive avec Figma.",
    icon: <Palette className="h-6 w-6" />,
    link: "/blog/figma-ui-design",
    category: 'tutoriel',
    tags: ['UI Design', 'Figma', 'UX'],
    downloadCount: 987
  },
  
  // Outils
  {
    title: "Générateur de Palettes de Couleurs",
    description: "Créez des palettes de couleurs harmonieuses pour vos projets web et design.",
    icon: <ImageIcon className="h-6 w-6" />,
    link: "https://tools.yourdomain.com/color-palette",
    category: 'outil',
    tags: ['Couleurs', 'Design', 'Web'],
    downloadCount: 1254
  },
  {
    title: "Calculateur de Performance Web",
    description: "Analysez et optimisez les performances de votre site web.",
    icon: <PieChart className="h-6 w-6" />,
    link: "https://tools.yourdomain.com/web-performance",
    category: 'outil',
    tags: ['Performance', 'Web', 'Optimisation'],
    featured: true,
    downloadCount: 876
  },
  {
    title: "Générateur de Politique de Confidentialité",
    description: "Créez une politique de confidentialité conforme au RGPD pour votre site web.",
    icon: <FileLock className="h-6 w-6" />,
    link: "https://tools.yourdomain.com/privacy-policy-generator",
    category: 'outil',
    tags: ['RGPD', 'Légal', 'Confidentialité'],
    downloadCount: 1432
  },
  {
    title: "Explorateur de Schémas SQL",
    description: "Visualisez et concevez des schémas de base de données SQL.",
    icon: <Database className="h-6 w-6" />,
    link: "https://tools.yourdomain.com/sql-schema-explorer",
    category: 'outil',
    tags: ['SQL', 'Database', 'Schéma'],
    downloadCount: 789
  }
];

// Fonction pour formater le nombre de téléchargements
const formatDownloadCount = (count?: number) => {
  if (!count) return "";
  return count > 999 ? `${(count / 1000).toFixed(1)}k` : count.toString();
};

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Filtrer les ressources en fonction de la catégorie et de la recherche
  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  // Extraire les ressources mises en avant
  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <Layout>
      <PageHeader
        title="Ressources Gratuites"
        subtitle="Une collection de templates, guides, tutoriels et outils pour vous aider dans vos projets"
        centered
      />
      
      <div className="container py-12">
        {/* Section Ressources en Vedette */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Ressources en Vedette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <Card key={`featured-${index}`} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                {resource.preview && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={resource.preview} 
                      alt={resource.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                )}
                <CardHeader className={!resource.preview ? "pt-6" : ""}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                      {resource.icon}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground capitalize">{resource.category}</span>
                  </div>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {resource.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    {formatDownloadCount(resource.downloadCount)}
                  </div>
                  <Button asChild variant="default" size="sm" className="group">
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      {resource.category === 'template' ? 'Télécharger' : 'Consulter'}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Barre de recherche et filtres */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Rechercher des ressources..."
                className="w-full px-4 py-2 rounded-md border border-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setSelectedCategory}>
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full md:w-auto">
                <TabsTrigger value="all">Tout</TabsTrigger>
                <TabsTrigger value="template">Templates</TabsTrigger>
                <TabsTrigger value="guide">Guides</TabsTrigger>
                <TabsTrigger value="tutoriel">Tutoriels</TabsTrigger>
                <TabsTrigger value="outil">Outils</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>
        
        {/* Liste des ressources filtrées */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <Card key={index} className="group transition-all hover:shadow-md h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      {resource.icon}
                    </div>
                    <div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {resource.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-1 bg-secondary/10 text-secondary-foreground rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 flex justify-between items-center">
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    {formatDownloadCount(resource.downloadCount)}
                  </div>
                  <Button asChild variant="ghost" className="ml-auto group">
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      {resource.category === 'template' ? 'Télécharger' : 'Consulter'}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Section d'aide pour choisir */}
        <section className="bg-accent/5 rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Besoin d'aide pour choisir ?</h2>
              <p className="text-muted-foreground mb-6">
                Nous savons qu'il peut être difficile de trouver la bonne ressource parmi tant d'options. 
                Notre assistant IA peut vous aider à trouver exactement ce dont vous avez besoin en 
                fonction de votre projet et de vos objectifs.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Obtenir des recommandations personnalisées</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Recommandations de ressources</DialogTitle>
                    <DialogDescription>
                      Décrivez votre projet et vos besoins pour obtenir des recommandations personnalisées.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <textarea 
                      className="w-full h-32 p-3 rounded-md border border-input resize-none"
                      placeholder="Exemple : Je débute un projet de site e-commerce avec React et j'ai besoin d'un template bien structuré et facile à personnaliser..."
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <Button>Obtenir des recommandations</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Video className="h-32 w-32 text-accent opacity-80" />
            </div>
          </div>
        </section>
        
        {/* Section Comment contribuer */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Comment contribuer</h2>
          <Card>
            <CardHeader>
              <CardTitle>Partagez vos propres ressources</CardTitle>
              <CardDescription>
                Notre collection s'enrichit grâce à la communauté. Vous avez créé un template, un guide ou un outil que vous souhaitez partager ?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Collapsible className="w-full">
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-secondary p-4 font-medium">
                  <span>Comment soumettre une ressource</span>
                  <ArrowRight className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-2 text-sm">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Créez un dépôt GitHub pour votre ressource</li>
                    <li>Assurez-vous d'inclure une documentation claire</li>
                    <li>Envoyez-nous le lien via le formulaire de contact</li>
                    <li>Notre équipe examinera votre soumission</li>
                    <li>Une fois approuvée, votre ressource sera ajoutée à notre collection</li>
                  </ol>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
            <CardFooter>
              <Link to="/contact">
                <Button variant="outline" className="flex gap-2">
                  <FileText className="h-4 w-4" />
                  Contacter l'équipe
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </section>
      </div>

      <FaqSection />
      <Chatbot />
    </Layout>
  );
};

export default Resources;
