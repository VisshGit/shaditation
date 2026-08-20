export const rajasthaniThemes = {
  "royal-rajasthani": {
    id: "luxury-royal-rajasthani",
    name: "Royal Rajasthani",
    category: "luxury",

    colors: {
      background: "#fdf8f3",
      foreground: "#2b1d0e",
      primary: "#b68d40",
      secondary: "#f5e6c8",
      accent: "#8b5e34",

      goldLight: "#f6d77c",
      goldSoft: "#f8e8b5",

      surface: "#ffffff",
      surfaceSoft: "#faf3e8",

      border: "rgba(182, 141, 64, 0.25)",

      muted: "#8f7565",
      mutedLight: "#b9a99c",
    },

    typography: {
      heading: "Cinzel",
      body: "Poppins",
    },

    style: {
      radius: "large",
      shadow: "royal",
      decoration: "rajasthani",
    },
  },
} as const;

export type RajasthaniTheme =
  (typeof rajasthaniThemes)[keyof typeof rajasthaniThemes];