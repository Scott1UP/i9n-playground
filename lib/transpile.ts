import { transform } from "sucrase";

export function transpileCode(code: string): { code: string; error: string | null } {
  try {
    // Remove import statements - we'll inject dependencies
    const codeWithoutImports = code
      .replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, "")
      .trim();

    // Find the function name
    const functionMatch = codeWithoutImports.match(/function\s+(\w+)/);
    const functionName = functionMatch ? functionMatch[1] : null;

    if (!functionName) {
      return {
        code: "",
        error: "Could not find a function declaration. Make sure your code includes a function like: function MyComponent() { ... }",
      };
    }

    // Append return at the end
    const codeWithExport = `${codeWithoutImports}\nreturn ${functionName};`;

    const result = transform(codeWithExport, {
      transforms: ["jsx", "typescript"],
      jsxRuntime: "classic",
      jsxPragma: "React.createElement",
      jsxFragmentPragma: "React.Fragment",
      production: true,
    });

    return { code: result.code, error: null };
  } catch (err) {
    return {
      code: "",
      error: err instanceof Error ? err.message : "Transpilation failed",
    };
  }
}
