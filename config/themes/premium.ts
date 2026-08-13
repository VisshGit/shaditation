export const premiumThemes = {
  champagne: {
    id: "premium-champagne",
    name: "Champagne",
    category: "premium",

    colors: {
      background: "#f8f3ea",
      foreground: "#2d241b",
      primary: "#c5a15b",
      secondary: "#eee1c7",
      accent: "#9a7440",

      goldLight: "#f4d99a",
      goldSoft: "#f8e9c5",

      surface: "#fffdf8",
      surfaceSoft: "#f7f0e3",

      border: "rgba(197, 161, 91, 0.28)",

      muted: "#817465",
      mutedLight: "#b5a696",
    },

    typography: {
      heading: "Cinzel",
      body: "Poppins",
    },

    style: {
      radius: "large",
      shadow: "elegant",
      decoration: "champagne",
    },
  },

  royal: {
    id: "premium-royal",
    name: "Royal",
    category: "premium",

    colors: {
      background: "#f7f1e8",
      foreground: "#24180f",
      primary: "#b58a35",
      secondary: "#ead9b4",
      accent: "#6e3d24",

      goldLight: "#f2d27a",
      goldSoft: "#f7e6ad",

      surface: "#fffdf8",
      surfaceSoft: "#f5ecdc",

      border: "rgba(181, 138, 53, 0.3)",

      muted: "#7c6a59",
      mutedLight: "#ad9b89",
    },

    typography: {
      heading: "Cinzel",
      body: "Poppins",
    },

    style: {
      radius: "medium",
      shadow: "deep",
      decoration: "royal",
    },
  },

  emerald: {
    id: "premium-emerald",
    name: "Emerald",
    category: "premium",

    colors: {
      background: "#f3f5ef",
      foreground: "#18231d",
      primary: "#9b7a3e",
      secondary: "#dfe7dc",
      accent: "#315b49",

      goldLight: "#e0c77f",
      goldSoft: "#efe2b8",

      surface: "#fbfcf8",
      surfaceSoft: "#edf2eb",

      border: "rgba(49, 91, 73, 0.2)",

      muted: "#66756c",
      mutedLight: "#9daaa2",
    },

    typography: {
      heading: "Cinzel",
      body: "Poppins",
    },

    style: {
      radius: "large",
      shadow: "soft",
      decoration: "botanical",
    },
  },

  midnight: {
    id: "premium-midnight",
    name: "Midnight",
    category: "premium",

    colors: {
      background: "#17161a",
      foreground: "#f7f0e3",
      primary: "#c9a45d",
      secondary: "#302b2a",
      accent: "#8e6c3c",

      goldLight: "#f3d68a",
      goldSoft: "#e9d5a4",

      surface: "#211f21",
      surfaceSoft: "#292629",

      border: "rgba(201, 164, 93, 0.28)",

      muted: "#b0a69a",
      mutedLight: "#81786e",
    },

    typography: {
      heading: "Cinzel",
      body: "Poppins",
    },

    style: {
      radius: "medium",
      shadow: "dramatic",
      decoration: "midnight",
    },
  },
} as const;

export type PremiumTheme =
  (typeof premiumThemes)[keyof typeof premiumThemes];