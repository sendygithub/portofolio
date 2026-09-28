"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "notes-theme";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Portal (mis. drawer mobile) dirender di luar root utama, jadi tema
    // diterapkan ke <html> agar seluruh subtree — termasuk portal — mewarisi
    // token, sekaligus ke setiap root .notes-theme yang sudah ada.
    const html = document.documentElement;
    const isDark = theme === "dark";

    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    document.querySelectorAll(".notes-theme").forEach((root) => {
      root.classList.toggle("dark", isDark);
    });

    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  // Keluar dari halaman /notes: jangan tinggalkan <html> dalam keadaan gelap.
  useEffect(() => {
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  function toggle() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      className="h-9 w-9 shrink-0"
      title={theme === "dark" ? "Mode terang" : "Mode gelap"}
      aria-label="Toggle theme"
    >
      {mounted && theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}
