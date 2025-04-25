
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

const IAEthique = () => {
  return (
    <Layout>
      <PageHeader
        title="Guide de l'IA Éthique"
        subtitle="Comprendre et appliquer les principes éthiques dans le développement d'IA"
        centered
        backgroundEffect="gradient"
      />
      
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 prose prose-xl">
            <h2 className="text-3xl font-bold mb-6">Introduction à l'IA Éthique</h2>
            <p className="lead">
              L'intelligence artificielle transforme rapidement notre monde, mais avec cette puissance 
              vient une grande responsabilité. Ce guide explore les principes fondamentaux de l'éthique 
              en IA et comment les mettre en pratique dans vos projets.
            </p>

            <div className="my-8">
              <h3 className="text-2xl font-semibold mb-4">Principes Fondamentaux</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-3">Transparence</h4>
                    <p>Les systèmes d'IA doivent être transparents dans leur fonctionnement et leurs décisions.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-3">Équité</h4>
                    <p>Éviter les biais discriminatoires dans les modèles et les données.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-3">Vie Privée</h4>
                    <p>Protection des données personnelles et respect de la confidentialité.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-3">Responsabilité</h4>
                    <p>Cadres de gouvernance clairs et mécanismes de responsabilité.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="my-8 bg-accent/5 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Bonnes Pratiques</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 mt-1 text-primary" />
                  <span>Établir des principes éthiques dès le début du projet</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 mt-1 text-primary" />
                  <span>Documenter les décisions et les processus</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 mt-1 text-primary" />
                  <span>Tester régulièrement pour les biais</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-6 h-6 mt-1 text-primary" />
                  <span>Impliquer diverses parties prenantes</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Ressources Complémentaires</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Guide Complet PDF
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Checklist Éthique
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Download className="w-4 h-4" />
                      Templates d'Audit
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

export default IAEthique;
