
import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Sparkles, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <footer className="bg-secondary mt-auto border-t border-border">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="overflow-hidden">
              {/* Animated logo with improved styling */}
              <motion.div 
                className="flex items-baseline"
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
              >
                {Array.from("Hylst").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    className="font-bold text-2xl tracking-tight"
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-accent mx-0.5"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>
                {Array.from("Digital Solutions").map((letter, i) => (
                  <motion.span
                    key={i + "Hylst".length}
                    custom={i + "Hylst".length + 1}
                    variants={letterVariants}
                    className={`text-base font-medium ${letter === " " ? "mx-1.5" : ""}`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Consultant indépendant combinant qualités humaines et intelligence artificielle pour des solutions créatives et adaptées à vos besoins.
            </p>
            <div className="flex gap-5">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300" 
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services/ai" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Conseil IA & Prompting</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/development" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Solutions No-Code & Low-Code</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/content" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Création Multimédia</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/consulting" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Idéation & Stratégie</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              À propos
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Mon Parcours</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Portfolio</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Blog</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-accent" />
                </div>
                <span className="text-muted-foreground">hylst@digitalsolutions.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-accent" />
                </div>
                <span className="text-muted-foreground">+33 6 00 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-accent" />
                </div>
                <span className="text-muted-foreground">Strasbourg, France</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {currentYear} Hylst Digital Solutions. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">Mentions légales</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
