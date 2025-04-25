
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";

const WebPerformance = () => {
  return (
    <Layout>
      <PageHeader
        title="Calculateur de Performance Web"
        subtitle="Analysez et optimisez les performances de votre site web"
        centered
      />
      
      <div className="container py-12 prose prose-xl mx-auto">
        <h2>Analyse de Performance Web</h2>
        <p>
          La performance web est cruciale pour l'expérience utilisateur et le SEO. 
          Utilisez notre calculateur pour identifier les points d'amélioration.
        </p>

        <h3>Métriques Principales</h3>
        <ul>
          <li>Largest Contentful Paint (LCP)</li>
          <li>First Input Delay (FID)</li>
          <li>Cumulative Layout Shift (CLS)</li>
          <li>Time to First Byte (TTFB)</li>
        </ul>

        <div className="bg-accent/5 p-6 rounded-lg my-8">
          <h4 className="text-xl font-semibold mb-4">Recommandations</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Optimisez les images et les ressources</li>
            <li>Minimisez le code JavaScript</li>
            <li>Utilisez la mise en cache</li>
            <li>Réduisez les requêtes réseau</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default WebPerformance;
