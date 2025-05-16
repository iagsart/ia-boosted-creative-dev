import React from 'react';
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/ui/section-title";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, ExternalLink } from "lucide-react";

// Composants réutilisables pour l'automatisation
import TechCard from "@/components/automation/TechCard";
import WorkflowExample from "@/components/automation/WorkflowExample";
import AdvantageCard from "@/components/automation/AdvantageCard";
import PlatformCard from "@/components/automation/PlatformCard";
import AutomationHeader from "@/components/automation/AutomationHeader";
import CaseStudyCard from "@/components/automation/CaseStudyCard";

// Données pour l'automatisation
import { 
  advantages, 
  technologies, 
  workflows, 
  automationPlatforms,
  aiPlatforms,
  caseStudies,
  aiStats
} from "@/data/automationData";

const Automatisation = () => {
  return (
    <Layout>
      <AutomationHeader 
        title="IA & Automatisation"
        subtitle="Combinez la puissance de l'Intelligence Artificielle avec l'automatisation des flux de travail pour transformer vos processus métier."
      />

      {/* Section Introduction améliorée avec illustration */}
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
                <Badge variant="secondary" className="text-sm py-1">Pipedream</Badge>
                <Badge variant="secondary" className="text-sm py-1">Tray.io</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Automation Workflow"
                  className="w-full h-full object-cover opacity-20 absolute"
                />
                <div className="relative z-10 p-6">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/70">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M16.5 14.5C16.5 14.5 15 16.5 12 16.5C9 16.5 7.5 14.5 7.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M15.5 10.5C15.5 11.3284 14.8284 12 14 12C13.1716 12 12.5 11.3284 12.5 10.5C12.5 9.67157 13.1716 9 14 9C14.8284 9 15.5 9.67157 15.5 10.5Z" fill="currentColor"/>
                    <path d="M11.5 10.5C11.5 11.3284 10.8284 12 10 12C9.17157 12 8.5 11.3284 8.5 10.5C8.5 9.67157 9.17157 9 10 9C10.8284 9 11.5 9.67157 11.5 10.5Z" fill="currentColor"/>
                  </svg>
                  
                  <div className="mt-6 text-center">
                    <div className="text-xl font-medium">Workflows Intelligents</div>
                    <div className="text-sm text-muted-foreground mt-1">Automatisation + IA = Innovation</div>
                  </div>
                </div>
              </div>

              {/* Cartes d'informations animées */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-5 -right-5 bg-background p-4 rounded-lg shadow-lg border border-border max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <Bot className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-medium">Automatisation Intelligente</div>
                    <div className="text-sm text-muted-foreground">Gain de temps x10</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-5 -left-5 bg-background p-4 rounded-lg shadow-lg border border-border max-w-[200px] hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <Bot className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-medium">Décisions Contextuelles</div>
                    <div className="text-sm text-muted-foreground">IA + Règles Métier</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-12 bg-muted/50">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {aiStats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="space-y-2"
              >
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <SectionTitle 
            title="Avantages de Combiner IA et Automatisation" 
            subtitle="Transformez radicalement vos processus métiers en exploitant le potentiel de l'IA"
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AdvantageCard {...advantage} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Technologies */}
      <section className="py-16 bg-secondary/10">
        <div className="container max-w-5xl">
          <SectionTitle 
            title="Technologies d'IA pour l'Intégration" 
            subtitle="Les API et services qui transforment vos automatisations en workflows intelligents"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <TechCard {...tech} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Études de Cas */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <SectionTitle 
            title="Études de Cas" 
            subtitle="Découvrez comment nos clients transforment leurs processus avec l'automatisation IA"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <CaseStudyCard {...caseStudy} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples section */}
      <section id="exemples" className="py-16 scroll-mt-20 bg-accent/10">
        <div className="container max-w-5xl">
          <SectionTitle 
            title="12 Exemples de Workflows IA + Automatisation" 
            subtitle="Des cas d'usage concrets pour transformer votre entreprise"
            centered
          />
          
          <div className="grid gap-6 mt-12">
            {workflows.slice(0, 6).map((workflow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <WorkflowExample {...workflow} />
              </motion.div>
            ))}
            
            {/* Afficher plus de workflows */}
            <div className="mt-8 space-y-6">
              <SectionTitle 
                title="6 Autres Exemples de Workflows" 
                subtitle="Explorez d'autres possibilités d'automatisation intelligente"
                centered
              />
              
              {workflows.slice(6).map((workflow, index) => (
                <motion.div
                  key={index + 6}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <WorkflowExample {...workflow} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section améliorée */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container max-w-5xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold font-display">Prêt à automatiser intelligemment vos processus ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discutons de votre projet d'automatisation et découvrons comment l'IA peut transformer vos workflows existants.
            </p>
            <div className="pt-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/contact">
                  Prendre contact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Citation */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <blockquote className="text-center">
            <p className="text-2xl italic font-medium text-muted-foreground mb-4">
              "L'automatisation intelligente ne remplace pas l'humain, elle amplifie ses capacités en éliminant les tâches répétitives pour lui permettre de se concentrer sur ce qui a vraiment de la valeur."
            </p>
            <footer className="text-md mt-4">
              — <cite className="font-medium">Geoffroy Planquart</cite>, <span className="text-muted-foreground">Expert en automatisation IA</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Resources section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <SectionTitle 
            title="Plateformes & Services" 
            subtitle="Les meilleurs outils pour réussir vos projets d'automatisation IA"
            centered
          />
          
          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            <PlatformCard
              title="Plateformes d'Automatisation"
              description="Les outils les plus puissants pour créer vos workflows"
              platforms={automationPlatforms}
              linkText="Comparer les plateformes"
              linkUrl="/automation-platform-comparison"
            />
            
            <PlatformCard
              title="Services d'IA"
              description="Les API d'intelligence artificielle essentielles"
              platforms={aiPlatforms}
              linkText="Explorer les API disponibles"
              linkUrl="#"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <SectionTitle 
            title="Questions Fréquentes" 
            subtitle="Tout ce que vous devez savoir sur l'automatisation intelligente"
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Par où commencer avec l'automatisation IA ?</h3>
                <p className="text-muted-foreground">Identifiez d'abord les processus répétitifs qui consomment du temps dans votre entreprise. Commencez petit, avec un workflow simple qui apportera une valeur immédiate, puis étendez progressivement à d'autres cas d'usage.</p>
              </div>
              
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Quelles compétences sont nécessaires ?</h3>
                <p className="text-muted-foreground">Les plateformes modernes comme n8n et Make sont accessibles sans code. Pour des workflows plus avancés, des notions de JSON, API et logique conditionnelle sont utiles mais pas indispensables.</p>
              </div>
              
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Comment calculer le ROI d'une automatisation ?</h3>
                <p className="text-muted-foreground">Mesurez le temps économisé multiplié par le coût horaire, additionnez la réduction des erreurs et l'amélioration de l'expérience client. Comparez avec l'investissement en licences et configuration.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Les solutions d'automatisation sont-elles sécurisées ?</h3>
                <p className="text-muted-foreground">Oui, les plateformes modernes offrent un chiffrement des données, une authentification avancée et des contrôles d'accès. Certaines comme n8n peuvent être auto-hébergées pour plus de contrôle sur vos données.</p>
              </div>
              
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Peut-on connecter des systèmes legacy ?</h3>
                <p className="text-muted-foreground">Absolument. Même les systèmes anciens peuvent être intégrés via leurs API existantes, des webhooks, ou dans certains cas via des méthodes comme le web scraping ou l'émulation d'actions utilisateur.</p>
              </div>
              
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">Quels sont les coûts typiques d'un projet d'automatisation ?</h3>
                <p className="text-muted-foreground">Les coûts varient selon la complexité: de quelques euros par mois pour des automatisations simples via des plateformes SaaS, à des budgets plus conséquents pour des workflows complexes incluant du développement personnalisé.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section de contact finale */}
      <section className="py-16 bg-accent/10">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">Besoin d'un accompagnement expert ?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Que vous souhaitiez automatiser un processus spécifique ou repenser entièrement votre flux de travail, notre expertise en automatisation intelligente peut vous aider à obtenir des résultats concrets.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <span>Audit de vos processus existants</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <span>Conception de workflows sur mesure</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <span>Intégration avec vos systèmes existants</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <span>Formation de vos équipes</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link to="/contact" className="bg-primary hover:bg-primary/90">
                  Demander une consultation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 via-background to-secondary/20 rounded-xl flex items-center justify-center p-8">
                <img 
                  src="/placeholder.svg" 
                  alt="Consultation Expert" 
                  className="w-full h-full object-cover rounded-lg opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg max-w-xs text-center">
                    <h3 className="text-xl font-medium mb-2">Consultation Gratuite</h3>
                    <p className="text-sm text-muted-foreground">
                      Réservez un appel de 30 minutes avec un expert pour discuter de vos besoins en automatisation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Automatisation;
