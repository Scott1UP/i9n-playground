"use client";

import { useState } from "react";
import { Book, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { TailwindDictionary } from "./TailwindDictionary";

const COMPONENTS = ["Button", "Checkbox", "Dropdown"] as const;
export type ComponentName = (typeof COMPONENTS)[number];

interface HeaderProps {
  selected: ComponentName;
  onSelect: (name: ComponentName) => void;
}

export function Header({ selected, onSelect }: HeaderProps) {
  const [dictionaryOpen, setDictionaryOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-surface">
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
            <span className="text-white text-xs font-bold tracking-tight">i9n</span>
          </div>
          <span className="text-sm font-medium text-muted-foreground hidden sm:block">playground</span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-5 bg-border" />

        {/* Mobile: dropdown */}
        <div className="md:hidden relative">
          <select
            value={selected}
            onChange={(e) => onSelect(e.target.value as ComponentName)}
            className="appearance-none pl-3 pr-8 py-1.5 rounded-md border border-border bg-surface
                       text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent
                       cursor-pointer"
          >
            {COMPONENTS.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        </div>

        {/* Desktop: tabs */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-lg bg-muted/50">
          {COMPONENTS.map((name) => (
            <button
              key={name}
              onClick={() => onSelect(name)}
              className={`relative px-3.5 py-1.5 rounded-md text-sm font-medium transition-all duration-150
                ${
                  selected === name
                    ? "bg-surface text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface/50"
                }`}
            >
              {name}
              {selected === name && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => setDictionaryOpen(true)}
          className="w-9 h-9 rounded-md flex items-center justify-center
                     text-muted-foreground hover:text-foreground hover:bg-muted
                     transition-colors duration-150"
          title="Tailwind CSS Reference"
        >
          <Book size={18} strokeWidth={1.5} />
        </button>
        <ThemeToggle />
      </div>

      <TailwindDictionary open={dictionaryOpen} onOpenChange={setDictionaryOpen} />
    </header>
  );
}

export { COMPONENTS };
