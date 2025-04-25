
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Gauge, Zap, LineChart } from "lucide-react";

const WebPerformance = () => {
  return (
    <Layout>
      <PageHeader
        title="Calculateur de Performance Web"
        subtitle="Analysez et optimisez les performances de votre site web"
        centered
        backgroundEffect="gradient"
      />
      
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-xl">
              <h2>Analyse de Performance Web</h2>
              <p className="lead">
                La performance web est cruciale pour l'expérience utilisateur et le SEO. 
                Utilisez notre calculateur pour identifier les points d'amélioration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gauge className="w-5 h-5" />
                    Métriques Core Web Vitals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Largest Contentful Paint (LCP)</li>
                    <li>First Input Delay (FID)</li>
                    <li>Cumulative Layout Shift (CLS)</li>
                    <li>Time to First Byte (TTFB)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Optimisations Recommandées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Optimisation des images</li>
                    <li>Minification du code</li>
                    <li>Mise en cache</li>
                    <li>Réduction des requêtes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-accent/5">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Outils d'Analyse</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Monitoring</h4>
                    <ul className="space-y-2">
                      <li>Analyse en temps réel</li>
                      <li>Rapports détaillés</li>
                      <li>Alertes personnalisées</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Diagnostics</h4>
                    <ul className="space-y-2">
                      <li>Audit automatisé</li>
                      <li>Suggestions d'amélioration</li>
                      <li>Benchmarking</li>
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
                      <LineChart className="w-4 h-4" />
                      Accéder au Calculateur
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Guide d'Optimisation
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Checklist Performance
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

export default WebPerformance;
