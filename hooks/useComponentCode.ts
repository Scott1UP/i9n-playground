"use client";

import { useState, useEffect, useCallback } from "react";
import { templates, TemplateName } from "@/templates";
import { loadCode, saveCode, clearCode } from "@/lib/storage";

export function useComponentCode(componentName: TemplateName) {
  const [code, setCode] = useState<string>(() => templates[componentName]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved code on mount
  useEffect(() => {
    const saved = loadCode(componentName);
    if (saved) {
      setCode(saved);
    } else {
      setCode(templates[componentName]);
    }
    setIsLoaded(true);
  }, [componentName]);

  // Save code
  const save = useCallback(() => {
    saveCode(componentName, code);
  }, [componentName, code]);

  // Reset to default template
  const reset = useCallback(() => {
    clearCode(componentName);
    setCode(templates[componentName]);
  }, [componentName]);

  return {
    code,
    setCode,
    save,
    reset,
    isLoaded,
    defaultCode: templates[componentName],
  };
}
