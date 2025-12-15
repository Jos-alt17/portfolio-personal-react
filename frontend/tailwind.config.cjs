// frontend/tailwind.config.cjs (Código CORREGIDO para compatibilidad CJS)

/** @type {import('tailwindcss').Config} */
module.exports = { 
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};