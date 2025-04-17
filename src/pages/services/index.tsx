import React from 'react';
import Layout from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/section-title";
import ServicesGrid from "@/components/services/ServicesGrid";
import { motion } from "framer-motion";
import { ArrowRight, Check, Code, Brain, Palette, Music, Database, Bot, FileText, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define services data directly in this file
const servicesData = [
  {
    title: "Développement Web",
    description: "Interfaces modernes et réactives, développement IA-assisted",
    icon: <Code size={24} className="text-accent" />,
    link: "/services/development",
    imageKey: "development"
  },
  {
    title: "Conseil IA",
    description: "Stratégie IA, automatisation et optimisation digitale",
    icon: <Brain size={24} className="text-accent" />,
    link: "/services/ai",
    imageKey: "ai"
  },
  {
    title: "Data & Analytics",
    description: "Extraction, traitement et visualisation de données",
    icon: <Database size={24} className="text-accent" />,
    link: "/services/data",
    imageKey: "data"
  },
  {
    title: "Design & UI/UX",
    description: "Identité visuelle, interfaces utilisateur, génération d'images IA",
    icon: <Palette size={24} className="text-accent" />,
    link: "/services/design",
    imageKey: "design"
  },
  {
    title: "Conseil Stratégique",
    description: "Transformation digitale et stratégie technologique",
    icon: <FileText size={24} className="text-accent" />,
    link: "/services/consulting",
    imageKey: "consulting"
  },
  {
    title: "Création Musicale",
    description: "Production musicale, sound design, voice-over",
    icon: <Music size={24} className="text-accent" />,
    link: "/services/music",
    imageKey: "formation"
  }
];

const ServiceCategory = ({ icon, title, children, className = "" }) => {
  return (
    <Card className={`mb-10 border border-accent/20 ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent/10 rounded-lg">
            {icon}
          </div>
          <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

const ServiceItem = ({ title, description }) => {
  return (
    <div className="mb-6 last:mb-0">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const UseCase = ({ title }) => {
  return (
    <div className="flex items-center gap-2 mb-2 last:mb-0">
      <Check className="h-4 w-4 text-accent flex-shrink-0" />
      <p className="text-sm">{title}</p>
    </div>
  );
};

const ServicesIndex = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="relative py-16 md:py-24">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background -z-10"></div>
        
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full text-sm font-medium">
              L'humain augmenté par l'IA - Strasbourg
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              <span className="text-gradient">Mes Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Je propose une gamme de services centrés sur l'humain, où la technologie est un outil au service de vos projets et de votre créativité.
            </p>
          </motion.div>
          
          <ServicesGrid services={servicesData} showTitle={false} />
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-secondary/10">
        <div className="container max-w-5xl mx-auto px-4">
          <SectionTitle 
            title="Services Détaillés" 
            subtitle="Des solutions complètes pour tous vos besoins digitaux"
            centered
          />

          <div className="mt-12 space-y-8">
            <ServiceCategory icon={<Brain size={24} className="text-accent" />} title="🔧 Conseil & Optimisation">
              <ServiceItem 
                title="Conseil IA / Automatisation / Optimisation digitale" 
                description="Analyse de vos process métiers, détection des leviers d'automatisation, conseil sur les outils les plus efficaces pour booster votre productivité."
              />
            </ServiceCategory>

            <ServiceCategory icon={<Code size={24} className="text-accent" />} title="💻 Développement Web & Automatisation">
              <ServiceItem 
                title="Développement Web Front / Back / Full Stack" 
                description="Interfaces modernes, réactives, adaptées à vos besoins. Utilisation des IA pour accélérer le développement, générer du code, des tests et de la documentation."
              />
              
              <ServiceItem 
                title="Développement d'automatisations sur mesure (Low-code / No-code / IA)" 
                description="Conception de systèmes adaptés à votre activité. Exemples de cas d'usages :"
              />

              <div className="ml-4 mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                <UseCase title="Réponse intelligente aux emails : automatisation avancée avec critères personnalisés, analyse de sentiments, extraction d'infos, génération de réponses avec IA" />
                <UseCase title="Assistant téléphonique vocal automatisé : réception, analyse et réponse vocale avec synthèse personnalisée et base de connaissance" />
                <UseCase title="CRM & Support client automatisé : intégration IA dans le parcours client (ticketing, FAQ, relance, enquêtes, suivi)" />
                <UseCase title="Automatisation de publications : génération de contenu, planification multi-plateformes, A/B testing automatique" />
                <UseCase title="Rédaction de devis, contrats, documents à partir d'informations client (formulaires intelligents, extraction d'informations)" />
                <UseCase title="Veille et alertes automatisées : sur le marché, vos concurrents, les réseaux sociaux, les tendances clients" />
                <UseCase title="Dashboards IA : visualisation et synthèse automatique de vos données internes (chiffres, documents, retours clients)" />
                <UseCase title="Réconciliation de données : fusion et nettoyage de bases de données disparates via IA" />
                <UseCase title="Automatisation de workflows internes : signatures électroniques, relances, reporting, transferts de fichiers, synchronisation d'outils" />
                <UseCase title="Automatisation RH : gestion de candidatures, entretiens automatisés, onboarding, synthèse de CV" />
              </div>

              <ServiceItem 
                title="Création de Chatbots IA évolués" 
                description="Chatbots avec mémoire, personnalité adaptative, base documentaire personnalisée, ton conversationnel calibré."
              />
            </ServiceCategory>

            <ServiceCategory icon={<Palette size={24} className="text-accent" />} title="🎨 Création Visuelle">
              <ServiceItem 
                title="Design graphique" 
                description="Identité visuelle, visuels produits, contenu social media, génération assistée IA (DALL-E, Midjourney, etc.), prompting avancé."
              />
              
              <ServiceItem 
                title="Montage vidéo IA" 
                description="Edition vidéo professionnelle, effets IA, voix de synthèse, sous-titres, résumés automatiques."
              />
            </ServiceCategory>

            <ServiceCategory icon={<Music size={24} className="text-accent" />} title="🎵 Audio & Musique">
              <ServiceItem 
                title="Création musicale & sound design" 
                description="Compositions originales, jingle, sound branding, MAO, mix/mastering, IA musicale."
              />
              
              <ServiceItem 
                title="Traitement audio & transcription" 
                description="Transcription multi-langue, formatage, nettoyage audio, synthèse vocale, analyse de réunions."
              />
            </ServiceCategory>

            <ServiceCategory icon={<FileText size={24} className="text-accent" />} title="✍️ Contenus & Communication">
              <ServiceItem 
                title="Copywriting & storytelling" 
                description="Textes sur mesure pour vos produits/services, pages web, posts, pitchs, avec une patte personnelle boostée par IA."
              />
              
              <ServiceItem 
                title="Génération de contenu IA" 
                description="Articles, newsletters, scripts, idéation de contenu, déclinaisons multi-canal."
              />
            </ServiceCategory>

            <ServiceCategory icon={<Database size={24} className="text-accent" />} title="📊 Données & Extraction d'infos">
              <ServiceItem 
                title="Traitement de documents (scans, photos, PDF)" 
                description="OCR + IA : extraction, classification, synthèse, structuration de contenu."
              />
              
              <ServiceItem 
                title="Analyse de données non structurées" 
                description="Analyse de verbatims, retours clients, messages, images, documents, avec dashboards IA sur mesure."
              />
            </ServiceCategory>

            <ServiceCategory icon={<Bot size={24} className="text-accent" />} title="🧰 Services avancés">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                <UseCase title="Création d'avatars IA (vidéo / voix)" />
                <UseCase title="Interfaces conversationnelles internes (outils IA pour vos équipes)" />
                <UseCase title="Synthèse vocale personnalisée" />
                <UseCase title="IA embarquée dans mini-apps / interfaces privées" />
                <UseCase title="Formation sur mesure (IA, automatisation, prompting, outils)" />
              </div>
            </ServiceCategory>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Parlons de votre projet
            </h2>
            <p className="text-muted-foreground text-lg">
              Chaque projet est unique et mérite une approche personnalisée. Discutons ensemble de vos besoins pour trouver la solution la plus adaptée.
            </p>
            <Button size="lg" asChild className="group">
              <Link to="/contact">
                Prendre contact
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesIndex;
