"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function Editor({ value, onChange }: EditorProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex-1 bg-surface" />
    );
  }

  return (
    <div className="flex-1 overflow-hidden flex flex-col bg-surface">
      <CodeMirror
        value={value}
        onChange={onChange}
        extensions={[javascript({ jsx: true, typescript: true })]}
        theme={resolvedTheme === "dark" ? githubDark : githubLight}
        className="flex-1 overflow-auto"
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightActiveLine: true,
          foldGutter: false,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: false,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          searchKeymap: true,
          foldKeymap: false,
          completionKeymap: true,
          lintKeymap: true,
        }}
        style={{
          height: "100%",
        }}
      />
    </div>
  );
}
