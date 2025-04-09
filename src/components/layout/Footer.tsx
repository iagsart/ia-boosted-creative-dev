
import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Sparkles, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <footer className="bg-secondary mt-auto border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-baseline overflow-hidden">
              {/* Animated logo */}
              <motion.div className="flex items-baseline">
                {Array.from("Hylst").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-bold text-xl"
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="text-accent mx-0.5"
                >
                  <Sparkles className="h-4 w-4" />
                </motion.div>
                {Array.from("Digital Solutions").map((letter, i) => (
                  <motion.span
                    key={i + "Hylst".length}
                    custom={i + "Hylst".length + 1}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={`text-sm font-medium ${letter === " " ? "mx-1" : ""}`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <p className="text-muted-foreground">
              Consultant indépendant combinant qualités humaines et intelligence artificielle pour des solutions créatives et adaptées à vos besoins.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/ai" className="text-muted-foreground hover:text-accent transition-colors">Conseil IA & Prompting</Link></li>
              <li><Link to="/services/development" className="text-muted-foreground hover:text-accent transition-colors">Solutions No-Code & Low-Code</Link></li>
              <li><Link to="/services/content" className="text-muted-foreground hover:text-accent transition-colors">Création Multimédia</Link></li>
              <li><Link to="/services/consulting" className="text-muted-foreground hover:text-accent transition-colors">Idéation & Stratégie</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">À propos</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">Mon Parcours</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span className="text-muted-foreground">hylst@digitalsolutions.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span className="text-muted-foreground">+33 6 00 00 00 00</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span className="text-muted-foreground">Strasbourg, France</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
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
