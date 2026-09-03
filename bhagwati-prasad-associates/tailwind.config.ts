import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        legal: {
          950: "#070E1B",
          900: "#0B1528",
          800: "#132342",
          700: "#1C315B",
          600: "#2B4780",
          500: "#3B61A8",
          100: "#EAF0FA",
          50: "#F5F8FC",
        },
        gold: {
          600: "#B8860B",
          500: "#D4AF37",
          400: "#E5C158",
          300: "#F3D37A",
          100: "#FAF3DD",
        },
        amber: {
          950: "#1F1300",
          900: "#3D2600",
          500: "#F59E0B",
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
