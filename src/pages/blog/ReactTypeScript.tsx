
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const ReactTypeScript = () => {
  return (
    <Layout>
      <PageHeader
        title="Template React/TypeScript"
        subtitle="Un modèle de projet React avec TypeScript, préconfiguré avec les meilleures pratiques"
        centered
      />
      
      <div className="container py-12 max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src="/images/template-react-typescript.svg" 
            alt="React TypeScript Template" 
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
          <h2>Caractéristiques du Template</h2>
          <ul>
            <li>Configuration TypeScript optimisée</li>
            <li>Structure de projet organisée</li>
            <li>Composants réutilisables</li>
            <li>Gestion d'état moderne</li>
            <li>Tests préconfigurés</li>
          </ul>

          <h3>Guide d'Installation</h3>
          <pre className="bg-secondary/10 p-4 rounded-lg">
            <code>
              git clone [url-du-repo]<br/>
              cd react-typescript-template<br/>
              npm install<br/>
              npm run dev
            </code>
          </pre>
        </div>
      </div>
    </Layout>
  );
};

export default ReactTypeScript;
