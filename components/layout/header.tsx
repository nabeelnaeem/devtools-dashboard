import React from "react";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="h-14 border-b px-6 flex items-center">
      <h1 className="text-sm font-medium">Developer Utilities Platform</h1>

      <ThemeToggle />
    </header>
  );
}
