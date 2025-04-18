
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ThemeSelector } from '../ui/theme-selector';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { 
      name: 'Services', 
      path: '/services',
      submenu: [
        { name: 'Tous les services', path: '/services' },
        { name: 'Conseil IA', path: '/services/ai' },
        { name: 'Développement', path: '/services/development' },
        { name: 'Contenu & Design', path: '/services/content' },
        { name: 'Data Science', path: '/services/data' },
        { name: 'Musique & Audio', path: '/services/music' },
        { name: 'Conseil Technique', path: '/services/consulting' }
      ]
    },
    { name: 'Ressources', path: '/resources' },
    { name: 'Blog', path: '/blog' },
    { name: 'À propos', path: '/about' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

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
    <header className={cn(
      "sticky top-0 z-40 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
      scrolled ? "bg-background/95 shadow-sm" : "bg-background/50"
    )}>
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center space-x-2 overflow-hidden" onClick={closeMenu}>
            <div className="flex items-baseline">
              {/* Improved animated logo */}
              <motion.div 
                className="flex items-baseline"
                initial="hidden"
                animate="visible"
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
                    className={`hidden md:inline-block text-base font-medium ${letter === " " ? "mx-1.5" : ""}`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </Link>
          
          <nav className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navLinks.map((item, index) => 
                  item.submenu ? (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger 
                        className={cn(
                          "text-base font-medium hover:text-accent transition-colors px-4 py-2",
                          isActive(item.path) ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="row-span-1">
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.path}
                                  onClick={closeMenu}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent",
                                    location.pathname === subItem.path && "bg-accent/5 text-accent font-medium"
                                  )}
                                >
                                  <div className="font-medium leading-none">{subItem.name}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={index} className="px-1">
                      <Link 
                        to={item.path}
                        onClick={closeMenu}
                        className={cn(
                          "text-base font-medium hover:text-accent transition-colors px-4 py-2 rounded-md",
                          isActive(item.path) 
                            ? "text-accent bg-accent/5" 
                            : "text-muted-foreground hover:bg-accent/5"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeSelector />
          <Button asChild className="hidden md:inline-flex" variant="default">
            <Link to="/contact">Contact</Link>
          </Button>

          <button 
            className="lg:hidden flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu with improved animation */}
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-30 p-6 lg:hidden overflow-y-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-6">
            {navLinks.map((item, index) => (
              <React.Fragment key={index}>
                {item.submenu ? (
                  <li className="text-lg font-medium">
                    <div className="flex items-center justify-between py-2 border-b border-border/30">
                      <Link 
                        to={item.path}
                        onClick={closeMenu}
                        className={cn(
                          "flex-1",
                          isActive(item.path) ? "text-accent" : "text-muted-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <ul className="pl-4 mt-4 space-y-4">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link 
                            to={subItem.path}
                            onClick={closeMenu}
                            className={cn(
                              "block py-1 text-muted-foreground hover:text-accent transition-colors",
                              location.pathname === subItem.path && "text-accent font-medium"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="border-b border-border/30 py-2">
                    <Link 
                      to={item.path}
                      onClick={closeMenu}
                      className={cn(
                        "block text-lg font-medium hover:text-accent transition-colors",
                        isActive(item.path) ? "text-accent" : "text-muted-foreground" 
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
            <li className="pt-4">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={closeMenu}>Contact</Link>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
