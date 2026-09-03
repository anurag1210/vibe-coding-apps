"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("bp_theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-gold-500/30 bg-slate-100 dark:bg-slate-800/80" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full transition-all duration-300 border bg-white dark:bg-slate-800/80 border-slate-200 dark:border-gold-500/30 text-slate-700 dark:text-gold-300 hover:border-amber-500 dark:hover:border-gold-400 hover:bg-amber-50 dark:hover:bg-gold-500/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40"
      aria-label="Toggle Dark/Light Mode"
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-gold-300 animate-in spin-in-180 duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 animate-in spin-in-180 duration-300" />
      )}
    </button>
  );
}
