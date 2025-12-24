"use client";

import { ReactNode } from "react";
import { AlertCircle } from "lucide-react";

interface PreviewProps {
  children: ReactNode;
  error?: string | null;
}

export function Preview({ children, error }: PreviewProps) {
  return (
    <div className="flex-1 md:flex-none md:w-1/2 min-h-[35vh] md:min-h-0 md:h-full
                    flex items-center justify-center p-8
                    bg-muted/30 border-b md:border-b-0 md:border-r border-border
                    overflow-auto relative">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--foreground) 1px, transparent 1px),
            linear-gradient(90deg, var(--foreground) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      {error ? (
        <div className="max-w-md p-4 rounded-lg bg-error/5 border border-error/20 relative">
          <div className="flex items-start gap-3">
            <AlertCircle size={18} className="text-error shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-error mb-1">Compilation Error</p>
              <pre className="text-xs text-error/80 whitespace-pre-wrap font-mono leading-relaxed">
                {error}
              </pre>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center relative">
          {children}
        </div>
      )}
    </div>
  );
}
