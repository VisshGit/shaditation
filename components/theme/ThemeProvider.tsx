"use client";

import { useLayoutEffect } from "react";
import { activeTheme } from "@/config/themes";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const { colors, typography, style } = activeTheme;

    /* =========================
       THEME COLORS
    ========================= */

    root.style.setProperty("--background", colors.background);
    root.style.setProperty("--foreground", colors.foreground);

    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--secondary", colors.secondary);
    root.style.setProperty("--accent", colors.accent);

    root.style.setProperty("--gold-light", colors.goldLight);
    root.style.setProperty("--gold-soft", colors.goldSoft);

    root.style.setProperty("--surface", colors.surface);
    root.style.setProperty("--surface-soft", colors.surfaceSoft);

    root.style.setProperty("--muted", colors.muted);
    root.style.setProperty("--muted-light", colors.mutedLight);

    /* =========================
       OPTIONAL THEME COLORS
    ========================= */

    if ("border" in colors) {
      root.style.setProperty(
        "--border",
        colors.border as string
      );
    }

    if ("white" in colors) {
      root.style.setProperty(
        "--white",
        colors.white as string
      );
    }

    if ("black" in colors) {
      root.style.setProperty(
        "--black",
        colors.black as string
      );
    }

    /* =========================
       THEME STYLE
    ========================= */

    root.style.setProperty(
      "--theme-radius",
      style.radius
    );

    root.style.setProperty(
      "--theme-shadow",
      style.shadow
    );

    /* =========================
   THEME FONTS
========================= */

root.style.setProperty(
  "--theme-heading",
  typography.heading
);

root.style.setProperty(
  "--theme-body",
  typography.body
);

    if ("script" in typography) {
      root.style.setProperty(
        "--theme-script",
        typography.script as string
      );
    }

   /* =========================
   GATE THEME
========================= */

root.style.setProperty(
  "--gate-variant",
  "classic"
);
  }, []);

  return <>{children}</>;
}