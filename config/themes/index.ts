import { basicThemes } from "./basic";
import { premiumThemes } from "./premium";
import { luxuryThemes } from "./luxury";

export const themes = {
  ...basicThemes,
  ...premiumThemes,
  ...luxuryThemes,
} as const;

/*
  =====================================================
  DEVELOPER ONLY THEME SWITCH
  =====================================================

  Client theme switching is intentionally disabled.

  Change the theme here:

  "classic"
  "blush"
  "ivory"
  "champagne"
  "royal"
  "emerald"
  "midnight"
  "imperial"
  "noir"
  "palace"
*/

export const ACTIVE_THEME = "noir" as keyof typeof themes;

export const activeTheme = themes[ACTIVE_THEME];

export type ThemeName = keyof typeof themes;
export type ThemeConfig = (typeof themes)[ThemeName];