
import React from "react";
import { useTheme } from "@/context/theme-provider";
import { motion } from "framer-motion";
import { Sun, Moon, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-[1.2rem] w-[1.2rem]" />;
      case "dark":
        return <Moon className="h-[1.2rem] w-[1.2rem]" />;
      case "fantasy":
        return <Sparkles className="h-[1.2rem] w-[1.2rem]" />;
      case "tech":
        return <Zap className="h-[1.2rem] w-[1.2rem]" />;
      default:
        return <Sun className="h-[1.2rem] w-[1.2rem]" />;
    }
  };

  const themeOptions = [
    {
      value: "light",
      label: "Clair",
      icon: <Sun className="mr-2 h-4 w-4" />,
    },
    {
      value: "dark",
      label: "Sombre",
      icon: <Moon className="mr-2 h-4 w-4" />,
    },
    {
      value: "fantasy",
      label: "Fantasy",
      icon: <Sparkles className="mr-2 h-4 w-4" />,
    },
    {
      value: "tech",
      label: "Tech",
      icon: <Zap className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <motion.div
            animate={{
              rotate: theme === "fantasy" ? [0, 10, -10, 0] : 0,
              scale: theme === "tech" ? [1, 1.1, 1] : 1,
            }}
            transition={{
              repeat: theme === "fantasy" || theme === "tech" ? Infinity : 0,
              repeatDelay: 5,
              duration: 0.5,
            }}
          >
            {getIcon()}
          </motion.div>
          <span className="sr-only">Changer de thème</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            className={theme === option.value ? "bg-accent/10 font-medium" : ""}
            onClick={() => setTheme(option.value as "light" | "dark" | "fantasy" | "tech")}
          >
            {option.icon}
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
