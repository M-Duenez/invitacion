/** @type {import('tailwindcss').Config} */
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
        light: {
          bg: '#ffebee',
          text: '#000000',
          primary: '#f8bbd0',
          secondary: '#f48fb1',
          accent: '#f06292',
        },
        // Tema dark - violeta
        dark: {
          bg: '#1a0333',
          text: '#ffffff',
          primary: '#7b1fa2',
          secondary: '#9c27b0',
          accent: '#ba68c8',
        }
      }
    },
  },
  plugins: [],
}