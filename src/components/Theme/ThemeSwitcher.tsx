"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import DarkModeToggle from "react-dark-mode-toggle";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(true);
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  //   const isDarkMode: any = theme === "light" ? "Dark" : "Light";
  const themeName = isDarkMode ? "light" : "dark";

  return (
    <DarkModeToggle
      onChange={() => {
        setTheme(themeName);
        setIsDarkMode(!isDarkMode);
      }}
      checked={isDarkMode}
      size={60}
      speed={1.3}
    />
  );
};
