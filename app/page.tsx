"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Header, ComponentName } from "@/components/Header";
import { Preview } from "@/components/Preview";
import { Editor } from "@/components/Editor";
import { ActionBar } from "@/components/ActionBar";
import { useComponentCode } from "@/hooks/useComponentCode";
import { transpileCode } from "@/lib/transpile";
import { executeCode } from "@/lib/execute";

export default function Home() {
  const [selected, setSelected] = useState<ComponentName>("Button");
  const { code, setCode, save, reset, isLoaded } = useComponentCode(selected);
  const [RenderedComponent, setRenderedComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [componentKey, setComponentKey] = useState(0);

  // Run code and render component
  const runCode = useCallback((codeToRun: string) => {
    const { code: transpiledCode, error: transpileError } = transpileCode(codeToRun);

    if (transpileError) {
      setError(transpileError);
      setRenderedComponent(null);
      return;
    }

    const { Component, error: execError } = executeCode(transpiledCode);

    if (execError) {
      setError(execError);
      setRenderedComponent(null);
      return;
    }

    setError(null);
    setRenderedComponent(() => Component as React.ComponentType);
    setComponentKey((k) => k + 1);
  }, []);

  // Reset to default template
  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  // Auto-run on code change with debounce
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isLoaded) return;

    // Clear previous timeout
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // Debounce the run to avoid running on every keystroke
    debounceRef.current = setTimeout(() => {
      runCode(code);
      save();
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [code, isLoaded, runCode, save]);

  // Run immediately on component switch
  useEffect(() => {
    if (isLoaded) {
      runCode(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className="h-dvh flex flex-col bg-background">
      <Header selected={selected} onSelect={setSelected} />

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <Preview error={error}>
          {RenderedComponent && <RenderedComponent key={componentKey} />}
        </Preview>

        <div className="flex-1 flex flex-col min-h-0 md:w-1/2">
          <Editor value={code} onChange={setCode} />
          <ActionBar onReset={handleReset} />
        </div>
      </div>
    </div>
  );
}
