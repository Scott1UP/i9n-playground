"use client";

import { useState, useMemo } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { Dialog } from "@base-ui/react/dialog";
import { tailwindCategories, type PropertyCategory } from "@/data/tailwind-properties";

interface TailwindDictionaryProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TailwindDictionary({ open, onOpenChange }: TailwindDictionaryProps) {
  const [search, setSearch] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return tailwindCategories;

    const searchLower = search.toLowerCase();
    return tailwindCategories
      .map((category) => {
        const categoryMatches = category.name.toLowerCase().includes(searchLower);
        if (categoryMatches) {
          return category;
        }
        return {
          ...category,
          properties: category.properties.filter(
            (prop) =>
              prop.name.toLowerCase().includes(searchLower) ||
              prop.description.toLowerCase().includes(searchLower) ||
              prop.values.some((v) => v.toLowerCase().includes(searchLower))
          ),
        };
      })
      .filter((category) => category.properties.length > 0);
  }, [search]);

  const toggleCategory = (name: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  const totalProperties = filteredCategories.reduce(
    (acc, cat) => acc + cat.properties.length,
    0
  );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50" />
        <Dialog.Popup className="fixed inset-0 top-8 z-50
                                  bg-surface border-t border-border rounded-t-2xl shadow-2xl
                                  flex flex-col overflow-hidden
                                  md:inset-6 md:top-10 md:rounded-2xl md:border">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <Dialog.Title className="text-base font-semibold">
              Tailwind CSS Reference
            </Dialog.Title>
            <Dialog.Close className="w-8 h-8 rounded-md flex items-center justify-center
                                      text-muted-foreground hover:text-foreground hover:bg-muted
                                      transition-colors duration-150">
              <X size={18} strokeWidth={1.5} />
            </Dialog.Close>
          </div>

          {/* Search */}
          <div className="px-5 py-4 border-b border-border bg-muted/30">
            <div className="flex items-center gap-3 px-3.5 h-10 rounded-lg border border-border bg-surface
                        focus-within:ring-2 focus-within:ring-accent/20 focus-within:border-accent
                        transition-all duration-150">
            <Search size={16} className="shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search properties or categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2.5">
              {totalProperties} properties in {filteredCategories.length} categories
            </p>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {filteredCategories.length === 0 ? (
              <p className="text-center text-muted-foreground py-12">
                No properties found for &ldquo;{search}&rdquo;
              </p>
            ) : (
              filteredCategories.map((category) => (
                <CategorySection
                  key={category.name}
                  category={category}
                  expanded={expandedCategories.has(category.name)}
                  onToggle={() => toggleCategory(category.name)}
                  searchTerm={search}
                />
              ))
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

interface CategorySectionProps {
  category: PropertyCategory;
  expanded: boolean;
  onToggle: () => void;
  searchTerm: string;
}

function CategorySection({ category, expanded, onToggle, searchTerm }: CategorySectionProps) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-surface">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3
                   bg-muted/30 hover:bg-muted/50 transition-colors duration-150 text-left"
      >
        <span className="font-medium text-sm">
          <HighlightMatch text={category.name} search={searchTerm} />
        </span>
        <span className="flex items-center gap-2.5 text-muted-foreground text-xs">
          <span className="tabular-nums">{category.properties.length}</span>
          <ChevronDown
            size={14}
            strokeWidth={1.5}
            className="shrink-0 transition-transform duration-200"
            style={{ transform: expanded ? "rotate(0deg)" : "rotate(-90deg)" }}
          />
        </span>
      </button>

      {expanded && (
        <div className="divide-y divide-border">
          {category.properties.map((prop) => (
            <div key={prop.name} className="px-4 py-3 hover:bg-muted/20 transition-colors duration-150">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <code className="text-sm font-mono font-medium text-accent">
                    <HighlightMatch text={prop.name} search={searchTerm} />
                  </code>
                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    <HighlightMatch text={prop.description} search={searchTerm} />
                  </p>
                </div>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {prop.values.map((value) => (
                  <code
                    key={value}
                    className="px-1.5 py-0.5 text-xs font-mono bg-muted text-muted-foreground rounded"
                  >
                    <HighlightMatch text={value} search={searchTerm} />
                  </code>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface HighlightMatchProps {
  text: string;
  search: string;
}

function HighlightMatch({ text, search }: HighlightMatchProps) {
  if (!search.trim()) return <>{text}</>;

  const parts = text.split(new RegExp(`(${escapeRegex(search)})`, "gi"));

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <mark key={i} className="bg-accent/20 text-accent rounded px-0.5">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
