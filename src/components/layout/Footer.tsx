
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold">HA</span>
              </div>
              <span className="font-display font-bold text-xl">HumanAI</span>
            </div>
            <p className="text-muted-foreground">
              Consultant indépendant combinant qualités humaines et intelligence artificielle pour des solutions créatives et adaptées à vos besoins.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/70 hover:text-accent" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/ai" className="text-muted-foreground hover:text-foreground transition-colors">Conseil IA & Prompting</Link></li>
              <li><Link to="/services/development" className="text-muted-foreground hover:text-foreground transition-colors">Solutions No-Code & Low-Code</Link></li>
              <li><Link to="/services/content" className="text-muted-foreground hover:text-foreground transition-colors">Création Multimédia</Link></li>
              <li><Link to="/services/consulting" className="text-muted-foreground hover:text-foreground transition-colors">Idéation & Stratégie</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">À propos</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">Mon Parcours</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">geoffroy.streit@gmail.com</li>
              <li className="text-muted-foreground">+33 6 00 00 00 00</li>
              <li className="text-muted-foreground">Strasbourg, France</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} HumanAI Conseil. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mentions légales</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
