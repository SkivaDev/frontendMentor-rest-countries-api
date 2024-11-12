// components/ThemeProvider.tsx
"use client";

import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function ThemeProvider() {
  const { isDark } = useTheme();

  useEffect(() => {
    // Actualiza el tema en el `body` cuando cambia `isDark`
    document.body.className = cn(isDark ? "dark-theme" : "light-theme");
  }, [isDark]);

  return null;
}
