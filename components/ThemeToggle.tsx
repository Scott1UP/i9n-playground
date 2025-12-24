"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
    );
  }

  const cycleTheme = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  return (
    <button
      onClick={cycleTheme}
      className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800
                 flex items-center justify-center
                 hover:bg-zinc-200 dark:hover:bg-zinc-700
                 transition-colors text-lg"
      title={`Theme: ${theme}`}
    >
      {theme === "light" && "☀️"}
      {theme === "dark" && "🌙"}
      {theme === "system" && "◐"}
    </button>
  );
}
