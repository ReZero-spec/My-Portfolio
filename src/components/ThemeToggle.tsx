"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={dark ?? undefined}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      {/* Both icons render; CSS picks one, so there is no hydration flash. */}
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
