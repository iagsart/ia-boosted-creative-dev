
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";

const PromptEngineering = () => {
  return (
    <Layout>
      <PageHeader
        title="L'art du Prompt Engineering"
        subtitle="Maîtrisez la création de prompts efficaces pour les modèles d'IA générative"
        centered
      />
      
      <div className="container py-12 prose prose-xl mx-auto">
        <h2>Introduction au Prompt Engineering</h2>
        <p>
          Le prompt engineering est devenu une compétence essentielle dans l'utilisation 
          des modèles d'IA générative. Ce guide vous apprendra les techniques avancées 
          pour obtenir les meilleurs résultats.
        </p>

        <h3>1. Principes Fondamentaux</h3>
        <p>
          La clarté et la précision sont essentielles dans la formulation des prompts.
          Plus vos instructions sont claires, meilleurs seront les résultats.
        </p>

        <h3>2. Techniques Avancées</h3>
        <p>
          Découvrez comment utiliser des techniques comme le few-shot learning, 
          le chain-of-thought prompting et les instructions structurées.
        </p>

        <div className="bg-accent/5 p-6 rounded-lg my-8">
          <h4 className="text-xl font-semibold mb-4">Bonnes Pratiques</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Soyez spécifique dans vos instructions</li>
            <li>Utilisez des exemples concrets</li>
            <li>Structurez vos prompts de manière logique</li>
            <li>Testez différentes approches</li>
            <li>Itérez et affinez vos prompts</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default PromptEngineering;
