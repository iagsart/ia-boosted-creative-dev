
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";

const Privacy = () => {
  return (
    <Layout>
      <PageHeader
        title="Politique de Confidentialité"
        subtitle="Protection de vos données personnelles"
        backgroundEffect="gradient"
      />
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="prose dark:prose-invert">
            <h2>Collecte des données</h2>
            <p>Les données personnelles collectées sur ce site sont uniquement utilisées pour répondre à vos demandes de contact.</p>
            
            <h2>Utilisation des données</h2>
            <p>Vos données ne sont ni vendues, ni partagées avec des tiers.</p>
            
            <h2>Cookies</h2>
            <p>Ce site utilise des cookies techniques essentiels à son fonctionnement.</p>
            
            <h2>Vos droits</h2>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.</p>
            <p>Contact : geoffroy.streit@gmail.com</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
