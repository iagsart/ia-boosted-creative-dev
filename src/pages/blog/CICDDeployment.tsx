
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";

const CICDDeployment = () => {
  return (
    <Layout>
      <PageHeader
        title="Tutoriel Déploiement CI/CD"
        subtitle="Guide étape par étape pour mettre en place un pipeline CI/CD avec GitHub Actions"
        centered
      />
      
      <div className="container py-12 prose prose-xl mx-auto">
        <img 
          src="/images/cicd-deployment.svg" 
          alt="CI/CD Deployment" 
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-8"
        />

        <h2>Mise en Place du Pipeline CI/CD</h2>
        <p>
          Un pipeline CI/CD bien configuré est essentiel pour maintenir la qualité 
          et l'efficacité du développement. Suivez ce guide pour configurer votre 
          propre pipeline.
        </p>

        <h3>1. Configuration de GitHub Actions</h3>
        <p>
          GitHub Actions permet d'automatiser vos workflows de développement directement 
          depuis votre dépôt GitHub.
        </p>

        <h3>2. Tests Automatisés</h3>
        <p>
          La mise en place de tests automatisés est cruciale pour maintenir la qualité 
          du code et prévenir les régressions.
        </p>

        <div className="bg-accent/5 p-6 rounded-lg my-8">
          <h4 className="text-xl font-semibold mb-4">Étapes Principales</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Configuration du workflow GitHub Actions</li>
            <li>Mise en place des tests automatisés</li>
            <li>Configuration du déploiement automatique</li>
            <li>Mise en place des notifications</li>
            <li>Monitoring et maintenance</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default CICDDeployment;
