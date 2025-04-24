
import Layout from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/page-header";

const Legal = () => {
  return (
    <Layout>
      <PageHeader
        title="Mentions Légales"
        subtitle="Informations légales concernant ce site"
        backgroundEffect="gradient"
      />
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="prose dark:prose-invert">
            <h2>Éditeur du site</h2>
            <p>Ce site est édité par Geoffroy Streit, auto-entrepreneur.</p>
            <p>Contact : geoffroy.streit@gmail.com</p>
            <p>Adresse : Strasbourg, France</p>

            <h2>Hébergement</h2>
            <p>Ce site est hébergé par Lovable.</p>

            <h2>Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur.</p>
            <p>Toute reproduction ou représentation, totale ou partielle, est interdite sans autorisation expresse.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
