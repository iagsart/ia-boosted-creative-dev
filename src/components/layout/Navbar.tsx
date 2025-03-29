
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "À propos", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold">AD</span>
            </div>
            <span className="font-display font-bold text-xl hidden sm:inline-block">AgenceDev</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="nav-link">
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="ghost">
            <Link to="/login">Espace Client</Link>
          </Button>
          <Button asChild>
            <Link to="/contact">Demander un devis</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 top-16 z-50 bg-background md:hidden transform transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="container flex flex-col gap-4 py-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="text-foreground/80 hover:text-foreground text-lg py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Button asChild variant="outline" className="w-full">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Espace Client</Link>
            </Button>
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Demander un devis</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
