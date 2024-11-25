import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#68786d",
        secondary: "#b1ada4",
        accent: "#f7f7f7",
        error: "#f44336",
        success: "#4CAF50",
        warning: "#FF9800",
        background: "#f7f5f0",
      },
      fontFamily: {
        avoda: ["Avoda", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
