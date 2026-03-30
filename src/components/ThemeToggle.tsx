"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggle}
      className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
