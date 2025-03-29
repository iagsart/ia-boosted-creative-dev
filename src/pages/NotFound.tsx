
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-secondary/20">
        <div className="text-center max-w-xl px-4">
          <h1 className="text-7xl font-display font-bold mb-4 text-accent">404</h1>
          <p className="text-2xl font-semibold mb-4">Page introuvable</p>
          <p className="text-muted-foreground mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button asChild size="lg">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
