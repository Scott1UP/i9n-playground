"use client";

import { ThemeToggle } from "./ThemeToggle";

const COMPONENTS = ["Button", "Checkbox", "Dropdown"] as const;
export type ComponentName = (typeof COMPONENTS)[number];

interface HeaderProps {
  selected: ComponentName;
  onSelect: (name: ComponentName) => void;
}

export function Header({ selected, onSelect }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-background">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold tracking-tight">i9n</h1>

        {/* Mobile: dropdown */}
        <select
          value={selected}
          onChange={(e) => onSelect(e.target.value as ComponentName)}
          className="md:hidden px-3 py-1.5 rounded-lg border border-border bg-muted
                     text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {COMPONENTS.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        {/* Desktop: tabs */}
        <nav className="hidden md:flex gap-1">
          {COMPONENTS.map((name) => (
            <button
              key={name}
              onClick={() => onSelect(name)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                ${
                  selected === name
                    ? "bg-accent text-white"
                    : "hover:bg-muted text-muted-foreground"
                }`}
            >
              {name}
            </button>
          ))}
        </nav>
      </div>

      <ThemeToggle />
    </header>
  );
}

export { COMPONENTS };
