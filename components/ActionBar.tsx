"use client";

import { RotateCcw } from "lucide-react";

interface ActionBarProps {
  onReset: () => void;
}

export function ActionBar({ onReset }: ActionBarProps) {
  return (
    <div className="flex items-center justify-end px-4 py-3
                    border-t border-border bg-surface">
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium
                   text-muted-foreground hover:text-foreground hover:bg-muted
                   transition-colors duration-150"
      >
        <RotateCcw size={15} strokeWidth={1.5} />
        <span>Reset</span>
      </button>
    </div>
  );
}
