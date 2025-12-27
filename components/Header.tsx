"use client";

import { useState } from "react";
import { Book, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { TailwindDictionary } from "./TailwindDictionary";

const COMPONENTS = [
  "Button",
  "Checkbox",
  "Collapsible",
  "Dialog",
  "Dropdown",
  "Input",
  "Progress",
  "Slider",
  "Switch",
  "Tabs",
  "Toast",
  "Toggle Group",
  "Tooltip",
] as const;
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

        {/* Component selector dropdown */}
        <div className="relative inline-flex items-center">
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
          <div className="absolute right-0 h-full flex items-center justify-center w-8 pointer-events-none">
            <ChevronDown size={14} className="text-muted-foreground" />
          </div>
        </div>
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
