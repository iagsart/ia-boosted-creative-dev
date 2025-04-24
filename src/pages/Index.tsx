
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/images/services/competences_et_valeurs.svg"
              alt="Compétences et valeurs"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
