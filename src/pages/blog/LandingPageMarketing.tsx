
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Layout as LayoutIcon, Workflow } from "lucide-react";

const LandingPageMarketing = () => {
  return (
    <Layout>
      <PageHeader
        title="Landing Page Marketing"
        subtitle="Template de page d'accueil optimisé pour la conversion avec sections modulaires"
        centered
        backgroundEffect="gradient"
      />
      
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative">
              <img 
                src="/images/landing-page-marketing.svg" 
                alt="Landing Page Marketing Template" 
                className="w-full rounded-lg shadow-lg mb-8"
              />
              <div className="mt-4 flex justify-center">
                <Button size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Télécharger le template
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LayoutIcon className="w-5 h-5" />
                    Sections Incluses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Hero section avec CTA</li>
                    <li>Présentation des caractéristiques</li>
                    <li>Témoignages clients</li>
                    <li>Tarification</li>
                    <li>FAQ</li>
                    <li>Formulaire de contact</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Workflow className="w-5 h-5" />
                    Optimisations Marketing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Points de conversion stratégiques</li>
                    <li>Design responsive optimisé</li>
                    <li>Performances optimisées</li>
                    <li>SEO-friendly</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-accent/5">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Caractéristiques Clés</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Design</h4>
                    <ul className="space-y-2">
                      <li>Interface moderne</li>
                      <li>Animations fluides</li>
                      <li>Composants réutilisables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technique</h4>
                    <ul className="space-y-2">
                      <li>Code propre et maintenable</li>
                      <li>Performance optimisée</li>
                      <li>SEO intégré</li>
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
                  <h3 className="text-xl font-semibold mb-4">Ressources</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Template Figma
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Guide d'Utilisation
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Assets Marketing
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

export default LandingPageMarketing;
