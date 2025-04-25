
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";

const IAEthique = () => {
  return (
    <Layout>
      <PageHeader
        title="Guide de l'IA Éthique"
        subtitle="Comprendre et appliquer les principes éthiques dans le développement d'IA"
        centered
      />
      
      <div className="container py-12 prose prose-xl mx-auto">
        <h2>Introduction à l'IA Éthique</h2>
        <p>
          L'intelligence artificielle transforme rapidement notre monde, mais avec cette puissance vient une grande responsabilité.
          Ce guide explore les principes fondamentaux de l'éthique en IA et comment les mettre en pratique dans vos projets.
        </p>

        <h3>1. Transparence et Explicabilité</h3>
        <p>
          Les systèmes d'IA doivent être transparents dans leur fonctionnement. Les utilisateurs doivent comprendre comment 
          les décisions sont prises et quelles données sont utilisées.
        </p>

        <h3>2. Équité et Non-discrimination</h3>
        <p>
          Les systèmes d'IA doivent être conçus pour traiter tous les utilisateurs de manière équitable, 
          en évitant les biais discriminatoires basés sur la race, le genre, l'âge ou d'autres caractéristiques.
        </p>

        <h3>3. Protection de la Vie Privée</h3>
        <p>
          La confidentialité des données personnelles doit être une priorité absolue dans le développement 
          et le déploiement des systèmes d'IA.
        </p>

        <h3>4. Responsabilité et Gouvernance</h3>
        <p>
          Les organisations doivent établir des cadres de gouvernance clairs pour leurs systèmes d'IA,
          avec des mécanismes de responsabilité bien définis.
        </p>

        <div className="bg-accent/5 p-6 rounded-lg my-8">
          <h4 className="text-xl font-semibold mb-4">Points Clés à Retenir</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Établir des principes éthiques dès le début du projet</li>
            <li>Documenter les décisions et les processus</li>
            <li>Tester régulièrement pour les biais</li>
            <li>Impliquer diverses parties prenantes</li>
            <li>Rester à jour sur les meilleures pratiques</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default IAEthique;
