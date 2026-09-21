import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      colors: {
        brand: {
          dark: '#0A0A0A',
          gold: '#C9A84C',
          goldLight: '#DFC378',
          charcoal: '#2C2C2C',
          cream: '#F5F0E8',
        },
      },
    },
  },
  plugins: [],
};
export default config;
