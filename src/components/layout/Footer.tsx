
import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import AnimatedLogo from './AnimatedLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary mt-auto border-t border-border">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <AnimatedLogo size="lg" showTagline />
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Consultant indépendant combinant qualités humaines et intelligence artificielle pour des solutions créatives et adaptées à vos besoins.
            </p>
            <div className="flex gap-5">
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300" 
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300" 
                aria-label="Twitter"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-300" 
                aria-label="Instagram"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Instagram size={20} />
              </motion.a>
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
                <span className="text-muted-foreground">geoffroy.streit@gmail.com</span>
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
            <Link to="/legal" className="text-sm text-muted-foreground hover:text-accent transition-colors">Mentions légales</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
