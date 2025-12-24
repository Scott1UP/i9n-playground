const STORAGE_PREFIX = "i9n_";

export function saveCode(componentName: string, code: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${componentName}`, code);
  } catch {
    // Storage might be full or unavailable
  }
}

export function loadCode(componentName: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(`${STORAGE_PREFIX}${componentName}`);
  } catch {
    return null;
  }
}

export function clearCode(componentName: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(`${STORAGE_PREFIX}${componentName}`);
  } catch {
    // Ignore
  }
}
