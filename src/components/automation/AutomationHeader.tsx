
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { Link } from "react-router-dom";

interface AutomationHeaderProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
}

const AutomationHeader = ({ title, subtitle, showButtons = true }: AutomationHeaderProps) => {
  return (
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundEffect="gradient"
    >
      {showButtons && (
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button asChild size="lg">
            <Link to="/contact">
              Discuter de votre projet <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#exemples">
              Voir des exemples <PlayCircle className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
      >
        <div className="bg-background shadow-lg rounded-full p-3 border border-border">
          <Zap className="h-6 w-6 text-primary" />
        </div>
      </motion.div>
    </PageHeader>
  );
};

export default AutomationHeader;
