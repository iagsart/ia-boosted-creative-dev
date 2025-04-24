
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import ServicesSection from "@/components/home/ServicesSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <motion.div className="relative">
        <ServicesSection />
      </motion.div>
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
