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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': '#A3C4FF',
        'custom-brown': '#BFB9AA',
        'custom-lbrown': '#FFE2A3',
        'custom-grey': '#8E98AB',
        'custo-dblue': '#293854',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        dmSerif: ['DM Serif Text', 'serif'],
        jersey: ['Jersey 15', 'sans-serif'],
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(to right, #4a90e2, #50e3c2)',
        'textura-fondo': "url('/textura.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config;