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
        background: "hsl(var(--background-color))",
        elements: "hsl(var(--elements-color))",
        "color-text": "hsl(var(--text-color))",
        input: "hsl(var(--input-color))",
        "color-placeholder": "hsl(var(--placeholder-color))",
      }
    },
  },
  plugins: [],
} satisfies Config;
