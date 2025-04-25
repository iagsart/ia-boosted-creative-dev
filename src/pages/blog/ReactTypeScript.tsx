
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Code, FileCode, GitBranch } from "lucide-react";

const ReactTypeScript = () => {
  return (
    <Layout>
      <PageHeader
        title="Template React/TypeScript"
        subtitle="Un modèle de projet React avec TypeScript, préconfiguré avec les meilleures pratiques"
        centered
        backgroundEffect="gradient"
      />
      
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-xl">
              <h2>Structure du Template</h2>
              <p className="lead">
                Notre template React/TypeScript est conçu pour vous offrir une base solide 
                et moderne pour vos projets, avec une configuration optimisée et les 
                meilleures pratiques intégrées.
              </p>
            </div>

            <Card className="bg-accent/5">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Installation</h3>
                <div className="bg-background/80 p-4 rounded-md font-mono text-sm">
                  <pre>
                    {`# Cloner le repo
git clone [url-du-repo]

# Installer les dépendances
npm install

# Démarrer le projet
npm run dev`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileCode className="w-5 h-5" />
                    Configuration TypeScript
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Types stricts activés</li>
                    <li>Paths aliases configurés</li>
                    <li>ESLint intégré</li>
                    <li>Prettier configuré</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5" />
                    Structure des Dossiers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Organisation modulaire</li>
                    <li>Séparation des concerns</li>
                    <li>Tests préconfigurés</li>
                    <li>Documentation intégrée</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Ressources</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Code className="w-4 h-4" />
                      Code Source
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Documentation
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Guide de Style
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

export default ReactTypeScript;
