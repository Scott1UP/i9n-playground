"use client";

interface ActionBarProps {
  onReset: () => void;
  onRun: () => void;
  isRunning?: boolean;
}

export function ActionBar({ onReset, onRun, isRunning }: ActionBarProps) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3
                    border-t border-border bg-background">
      <button
        onClick={onReset}
        className="px-4 py-2 rounded-lg text-sm font-medium
                   text-muted-foreground hover:text-foreground
                   hover:bg-muted transition-colors"
      >
        Reset
      </button>
      <button
        onClick={onRun}
        disabled={isRunning}
        className="px-5 py-2 rounded-lg text-sm font-medium
                   bg-accent text-white
                   hover:opacity-90 active:scale-[0.98]
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all flex items-center gap-2"
      >
        Run
        <span className="text-xs">▶</span>
      </button>
    </div>
  );
}
