import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b0b6fd",
      },
      borderRadius: {
        xl2: "1rem",
      },
      fontFamily: {
        sans: ["Clash Display", "system-ui", "sans-serif"],
        heading: ["Clash Display", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
