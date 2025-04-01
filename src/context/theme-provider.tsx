
import React, { createContext, useState, useContext, useEffect } from "react";

type Theme = "light" | "dark" | "fantasy" | "tech";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => null,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Supprimer toutes les classes de thème
    root.classList.remove("light", "dark", "fantasy", "tech");
    
    // Ajouter la classe du thème actuel
    root.classList.add(theme);
    
    // Mémoriser le thème dans localStorage
    localStorage.setItem("theme", theme);
    
    // Appliquer le curseur personnalisé
    if (theme === "fantasy") {
      document.body.style.cursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%' x='8%'>✨</text></svg>"), auto`;
    } else if (theme === "tech") {
      document.body.style.cursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%' x='8%'>⚡</text></svg>"), auto`;
    } else if (theme === "dark") {
      document.body.style.cursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:white;font-size:24px;'><text y='50%' x='8%'>👆</text></svg>"), auto`;
    } else {
      document.body.style.cursor = "default";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
