
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Code, Lightbulb, Tool } from "lucide-react";

const PromptEngineering = () => {
  return (
    <Layout>
      <PageHeader
        title="L'art du Prompt Engineering"
        subtitle="Maîtrisez la création de prompts efficaces pour les modèles d'IA générative"
        centered
        backgroundEffect="gradient"
      />
      
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-xl">
              <h2>Introduction au Prompt Engineering</h2>
              <p className="lead">
                Le prompt engineering est devenu une compétence essentielle dans l'utilisation 
                des modèles d'IA générative. Ce guide vous apprendra les techniques avancées 
                pour obtenir les meilleurs résultats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Techniques de Base
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Structure claire des prompts</li>
                    <li>Utilisation de contexte</li>
                    <li>Instructions précises</li>
                    <li>Formatage approprié</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Techniques Avancées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Few-shot learning</li>
                    <li>Chain-of-thought</li>
                    <li>Instructions itératives</li>
                    <li>Prompts dynamiques</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-accent/5">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Bonnes Pratiques</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Structure</h4>
                    <ul className="space-y-2">
                      <li>Soyez spécifique</li>
                      <li>Utilisez des exemples</li>
                      <li>Structurez logiquement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Itération</h4>
                    <ul className="space-y-2">
                      <li>Testez différentes approches</li>
                      <li>Affinez progressivement</li>
                      <li>Documentez les résultats</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Outils et Ressources</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Tool className="w-4 h-4" />
                      Template de Prompts
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Guide Complet PDF
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Exemples de Prompts
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PromptEngineering;
