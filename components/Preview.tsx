"use client";

import { ReactNode } from "react";

interface PreviewProps {
  children: ReactNode;
  error?: string | null;
}

export function Preview({ children, error }: PreviewProps) {
  return (
    <div className="flex-1 md:flex-none md:w-1/2 min-h-[35vh] md:min-h-0 md:h-full
                    flex items-center justify-center p-6
                    bg-muted/30 border-b md:border-b-0 md:border-r border-border
                    overflow-auto">
      {error ? (
        <div className="max-w-md p-4 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900">
          <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">Error</p>
          <pre className="text-xs text-red-600 dark:text-red-300 whitespace-pre-wrap font-mono">
            {error}
          </pre>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}
