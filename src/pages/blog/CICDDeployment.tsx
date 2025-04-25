
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitBranch, Download, Terminal, CheckCircle } from "lucide-react";

const CICDDeployment = () => {
  return (
    <Layout>
      <PageHeader
        title="Tutoriel Déploiement CI/CD"
        subtitle="Guide étape par étape pour mettre en place un pipeline CI/CD avec GitHub Actions"
        centered
        backgroundEffect="gradient"
      />
      
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative mb-8">
              <img 
                src="/images/cicd-deployment.svg" 
                alt="CI/CD Deployment" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="prose prose-xl">
              <h2>Configuration du Pipeline CI/CD</h2>
              <p>
                Un pipeline CI/CD bien configuré est essentiel pour maintenir la qualité 
                et l'efficacité du développement. Suivez ce guide pour configurer votre 
                propre pipeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5" />
                    Configuration GitHub
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Configuration des secrets</li>
                    <li>Gestion des workflows</li>
                    <li>Protection des branches</li>
                    <li>Règles de merge</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="w-5 h-5" />
                    Tests Automatisés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Tests unitaires</li>
                    <li>Tests d'intégration</li>
                    <li>Tests de bout en bout</li>
                    <li>Couverture de code</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-accent/5">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Étapes de Configuration</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 text-primary" />
                    <div>
                      <h4 className="font-semibold">Configuration du workflow GitHub Actions</h4>
                      <p className="text-sm text-muted-foreground">
                        Créez et configurez les fichiers YAML pour vos workflows CI/CD
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 text-primary" />
                    <div>
                      <h4 className="font-semibold">Mise en place des tests automatisés</h4>
                      <p className="text-sm text-muted-foreground">
                        Intégrez vos suites de tests dans le pipeline
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 text-primary" />
                    <div>
                      <h4 className="font-semibold">Configuration du déploiement automatique</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatisez le processus de déploiement sur vos environnements
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Ressources</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Template Workflow
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Guide Complet PDF
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Scripts de Test
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

export default CICDDeployment;
