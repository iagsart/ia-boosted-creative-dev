
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const LandingPageMarketing = () => {
  return (
    <Layout>
      <PageHeader
        title="Landing Page Marketing"
        subtitle="Template de page d'accueil optimisé pour la conversion avec sections modulaires"
        centered
      />
      
      <div className="container py-12 max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src="/images/landing-page-marketing.svg" 
            alt="Landing Page Marketing Template" 
            className="w-full rounded-lg shadow-lg mb-8"
          />
          
          <div className="flex justify-center">
            <Button size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Télécharger le template
            </Button>
          </div>
        </div>

        <div className="prose prose-xl max-w-none">
          <h2>Sections Incluses</h2>
          <ul>
            <li>Hero section avec CTA principal</li>
            <li>Présentation des caractéristiques</li>
            <li>Témoignages clients</li>
            <li>Tarification</li>
            <li>FAQ</li>
            <li>Formulaire de contact</li>
          </ul>

          <h3>Optimisations Marketing</h3>
          <ul>
            <li>Points de conversion stratégiques</li>
            <li>Design responsive optimisé</li>
            <li>Performances optimisées</li>
            <li>SEO-friendly</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPageMarketing;
