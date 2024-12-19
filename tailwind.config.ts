import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        greatVibes: ['var(--font-great-vibes)', 'cursive']
      },

      colors: {
        primary: "#FF9F0D",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      backgroundImage: {
        'hero-image': "url('/heroimage.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
