'use client'
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className="space-x-2">
      <button type="button" onClick={() => setTheme("light")}>☀️</button>
      <button type="button" onClick={() => setTheme("dark")}>🌙</button>
      <button type="button" onClick={() => setTheme("system")}>💻</button>
    </div>
  );
} 