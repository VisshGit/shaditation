import { basicThemes } from "./basic";
import { premiumThemes } from "./premium";
import { luxuryThemes } from "./luxury";
import { rajasthaniThemes } from "./rajasthani";
import { gateVariants } from "./gates";

/* =========================================================
   THEME COLLECTIONS
========================================================= */

export {
  basicThemes,
  premiumThemes,
  luxuryThemes,
  rajasthaniThemes,
  gateVariants,
};

/* =========================================================
   THEME CATEGORIES
========================================================= */

export const themes = {
  basic: basicThemes,
  premium: premiumThemes,
  luxury: luxuryThemes,
  rajasthani: rajasthaniThemes,
  gates: gateVariants,
} as const;

/* =========================================================
   ALL THEMES
========================================================= */

export const allThemes = {
  ...basicThemes,
  ...premiumThemes,
  ...luxuryThemes,
  ...rajasthaniThemes,
} as const;

/* =========================================================
   TYPES
========================================================= */

export type ThemeId = keyof typeof allThemes;
export type ThemeCategory = keyof typeof themes;

/* =========================================================
   ACTIVE THEME
   Change theme ONLY here
========================================================= */

export const activeTheme: ThemeId = "royal-rajasthani";

/* =========================================================
   APPLY THEME
========================================================= */

export function applyTheme(themeId: ThemeId) {
  const theme = allThemes[themeId];

  if (!theme) return;

  const root = document.documentElement;

  root.style.setProperty("--background", theme.colors.background);
  root.style.setProperty("--foreground", theme.colors.foreground);
  root.style.setProperty("--primary", theme.colors.primary);
  root.style.setProperty("--secondary", theme.colors.secondary);
  root.style.setProperty("--accent", theme.colors.accent);
  root.style.setProperty("--gold-light", theme.colors.goldLight);
  root.style.setProperty("--gold-soft", theme.colors.goldSoft);
  root.style.setProperty("--surface", theme.colors.surface);
  root.style.setProperty("--surface-soft", theme.colors.surfaceSoft);
  root.style.setProperty("--border", theme.colors.border);
  root.style.setProperty("--muted", theme.colors.muted);
  root.style.setProperty("--muted-light", theme.colors.mutedLight);
}
