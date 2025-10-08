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
    },
  },
  plugins: [],
} satisfies Config;
