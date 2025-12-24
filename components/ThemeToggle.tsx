"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-9 h-9 rounded-md bg-muted/50" />
    );
  }

  const cycleTheme = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <button
      onClick={cycleTheme}
      className="w-9 h-9 rounded-md flex items-center justify-center
                 text-muted-foreground hover:text-foreground hover:bg-muted
                 transition-colors duration-150"
      title={`Theme: ${theme}`}
    >
      <Icon size={18} strokeWidth={1.5} />
    </button>
  );
}
