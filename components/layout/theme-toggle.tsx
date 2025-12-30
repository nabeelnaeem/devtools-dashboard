"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleToggleClick}>
      <Sun className="h-4 w-4 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
