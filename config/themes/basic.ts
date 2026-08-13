export const basicThemes = {
  classic: {
    id: "basic-classic",
    name: "Classic",
    category: "basic",

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
      radius: "medium",
      shadow: "soft",
      decoration: "classic",
    },
  },

  blush: {
    id: "basic-blush",
    name: "Blush",
    category: "basic",

    colors: {
      background: "#fff8f7",
      foreground: "#3b2929",
      primary: "#c98f8f",
      secondary: "#f4dddd",
      accent: "#a96868",

      goldLight: "#e5b9a6",
      goldSoft: "#f6d9cd",

      surface: "#ffffff",
      surfaceSoft: "#fdf0ef",

      border: "rgba(169, 104, 104, 0.22)",

      muted: "#8f7474",
      mutedLight: "#bba5a5",
    },

    typography: {
      heading: "Cinzel",
      body: "Poppins",
    },

    style: {
      radius: "medium",
      shadow: "soft",
      decoration: "romantic",
    },
  },

  ivory: {
    id: "basic-ivory",
    name: "Ivory",
    category: "basic",

    colors: {
      background: "#fbf7ef",
      foreground: "#30291f",
      primary: "#a88b62",
      secondary: "#eee4d1",
      accent: "#806747",

      goldLight: "#d8bd86",
      goldSoft: "#efe0bc",

      surface: "#fffdf9",
      surfaceSoft: "#f7f0e4",

      border: "rgba(128, 103, 71, 0.2)",

      muted: "#82786b",
      mutedLight: "#aaa094",
    },

    typography: {
      heading: "Cinzel",
      body: "Poppins",
    },

    style: {
      radius: "small",
      shadow: "soft",
      decoration: "minimal",
    },
  },
} as const;

export type BasicTheme =
  (typeof basicThemes)[keyof typeof basicThemes];