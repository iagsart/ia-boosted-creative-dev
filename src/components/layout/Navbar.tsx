
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeSelector } from "../ui/theme-selector";
import { useTheme } from "@/context/theme-provider";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { theme } = useTheme();

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  // Fonction pour vérifier si un lien est actif
  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  // Animation pour le menu mobile
  const menuVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  // Animation pour le titre
  const titleLetters = "Hylst Human AI".split("");
  
  // Définition des couleurs selon le thème
  const getTitleColorClass = (index: number) => {
    if (theme === 'fantasy') {
      return index % 2 === 0 ? 'text-purple-500' : 'text-pink-500';
    } else if (theme === 'tech') {
      return index % 2 === 0 ? 'text-blue-500' : 'text-cyan-400';
    } else if (theme === 'dark') {
      return index % 2 === 0 ? 'text-indigo-400' : 'text-blue-300';
    } else {
      return index % 2 === 0 ? 'text-accent' : 'text-accent/80';
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shadow-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/7e4352c2-152e-4866-baa0-22257e10b12c.png" 
                  alt="Hylst Logo" 
                  className="h-8 w-8 mr-2 dark:invert" 
                />
                <div className="flex overflow-hidden">
                  {titleLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      className={`text-xl font-semibold ${letter === " " ? "mr-2" : ""} ${getTitleColorClass(index)}`}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: index * 0.05,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 10,
                        duration: 0.5
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Navigation sur Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link link-hover ${
                  isActive(link.href)
                    ? "text-foreground font-medium"
                    : "text-foreground/70"
                }`}
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions (incluant le sélecteur de thème) */}
          <div className="flex items-center space-x-3">
            <ThemeSelector />
            <Button asChild className="hidden md:flex">
              <Link to="/contact">Me contacter</Link>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      to={link.href}
                      className={`block py-2 px-4 rounded-md ${
                        isActive(link.href)
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-foreground/70 hover:bg-accent/5"
                      } transition-colors duration-200 link-hover`}
                      onClick={handleNavClick}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="pt-2">
                  <Button asChild className="w-full">
                    <Link to="/contact" onClick={handleNavClick}>
                      Me contacter
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
