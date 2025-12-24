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
  const codeRef = useRef(code);

  // Keep ref in sync with code
  useEffect(() => {
    codeRef.current = code;
  }, [code]);

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

  // Handle run button - run and save
  const handleRun = useCallback(() => {
    runCode(codeRef.current);
    save();
  }, [save, runCode]);

  // Reset to default template
  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  // Run on initial load
  useEffect(() => {
    if (isLoaded) {
      runCode(code);
    }
    // Only run on initial load, not on every code change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, selected]);

  // Re-run after reset (when code changes back to template)
  const prevCode = useRef(code);
  useEffect(() => {
    // Detect reset: code changed and matches a template pattern (has import statement at start)
    if (prevCode.current !== code && code.startsWith("import {")) {
      runCode(code);
    }
    prevCode.current = code;
  }, [code, runCode]);

  return (
    <div className="h-dvh flex flex-col bg-background">
      <Header selected={selected} onSelect={setSelected} />

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <Preview error={error}>
          {RenderedComponent && <RenderedComponent key={componentKey} />}
        </Preview>

        <div className="flex-1 flex flex-col min-h-0 md:w-1/2">
          <Editor value={code} onChange={setCode} />
          <ActionBar onReset={handleReset} onRun={handleRun} />
        </div>
      </div>
    </div>
  );
}
