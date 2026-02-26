/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Usamos class en lugar de media para control manual
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        // Tema light - rosa pastel
        navy: {
          950: "#0A1626",
          900: "#0F1E33",
          800: "#162A46",
        },
        gold: {
          500: "#C6A75E",
          600: "#9F7F2E",
          300: "#E8D8B3",
          200: "#F1E4C3",
        },
        wedding: {
          ivory: "#F5F2EB",
          smoke: "#B8BCC5",
          dark: "#1C1F26",
        },
      }
    },
  },
  plugins: [typography],
}