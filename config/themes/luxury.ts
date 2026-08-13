export const luxuryThemes = {
  imperial: {
    id: "luxury-imperial",
    name: "Imperial",
    category: "luxury",

    colors: {
      background: "#120e0a",
      foreground: "#f8f0df",
      primary: "#d4af62",
      secondary: "#2a2118",
      accent: "#8f5f24",

      goldLight: "#f8df9b",
      goldSoft: "#ead29a",

      surface: "#1b1510",
      surfaceSoft: "#241b13",

      border: "rgba(212, 175, 98, 0.35)",

      muted: "#b7a890",
      mutedLight: "#827561",
    },

    typography: {
      heading: "Cinzel",
      body: "Poppins",
    },

    style: {
      radius: "large",
      shadow: "luxury",
      decoration: "imperial",
    },
  },

  noir: {
    id: "luxury-noir",
    name: "Noir",
    category: "luxury",

    colors: {
      background: "#090909",
      foreground: "#f4eee4",
      primary: "#c6a15b",
      secondary: "#1b1917",
      accent: "#76582f",

      goldLight: "#f1d58d",
      goldSoft: "#ddc38d",

      surface: "#11100f",
      surfaceSoft: "#191715",

      border: "rgba(198, 161, 91, 0.32)",

      muted: "#aaa196",
      mutedLight: "#746c63",
    },

    typography: {
      heading: "Cinzel",
      body: "Poppins",
    },

    style: {
      radius: "small",
      shadow: "dramatic",
      decoration: "noir",
    },
  },

  palace: {
    id: "luxury-palace",
    name: "Palace",
    category: "luxury",

    colors: {
      background: "#21140d",
      foreground: "#fff5df",
      primary: "#d8b35d",
      secondary: "#3a2415",
      accent: "#a76d2d",

      goldLight: "#ffe4a0",
      goldSoft: "#f3d594",

      surface: "#2a1a10",
      surfaceSoft: "#342015",

      border: "rgba(216, 179, 93, 0.38)",

      muted: "#c0a889",
      mutedLight: "#8c755c",
    },

    typography: {
      heading: "Cinzel",
      body: "Poppins",
    },

    style: {
      radius: "large",
      shadow: "royal",
      decoration: "palace",
    },
  },
} as const;

export type LuxuryTheme =
  (typeof luxuryThemes)[keyof typeof luxuryThemes];