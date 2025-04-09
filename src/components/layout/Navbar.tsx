
import React, { useState } from 'react';
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
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
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
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link to="/" className="flex items-center space-x-2 overflow-hidden">
            <div className="flex items-baseline">
              {/* Animated logo */}
              <motion.div className="flex items-baseline">
                {Array.from("Hylst").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-bold text-xl md:text-2xl"
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
                    className={`text-sm md:text-base font-medium ${letter === " " ? "mx-1" : ""}`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((item, index) => 
                  item.submenu ? (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger 
                        className={cn(
                          "text-base font-medium hover:text-accent transition-colors",
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
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent"
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
                    <NavigationMenuItem key={index}>
                      <Link 
                        to={item.path}
                        onClick={closeMenu}
                        className={cn(
                          "text-base font-medium hover:text-accent transition-colors",
                          isActive(item.path) ? "text-foreground" : "text-muted-foreground"
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
          <Button asChild className="hidden md:inline-flex">
            <Link to="/contact">Contact</Link>
          </Button>

          <button 
            className="md:hidden flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="fixed inset-0 top-16 bg-background z-30 p-4 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <ul className="flex flex-col space-y-4">
            {navLinks.map((item, index) => (
              <React.Fragment key={index}>
                {item.submenu ? (
                  <li className="text-lg font-medium">
                    <div className="flex items-center justify-between py-2">
                      <Link 
                        to={item.path}
                        onClick={closeMenu}
                        className={cn(
                          "flex-1",
                          isActive(item.path) ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <ul className="pl-4 mt-2 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link 
                            to={subItem.path}
                            onClick={closeMenu}
                            className={cn(
                              "block py-2 text-muted-foreground hover:text-accent transition-colors",
                              location.pathname === subItem.path && "text-accent"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li>
                    <Link 
                      to={item.path}
                      onClick={closeMenu}
                      className={cn(
                        "block py-2 text-lg font-medium hover:text-accent transition-colors",
                        isActive(item.path) ? "text-foreground" : "text-muted-foreground" 
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
