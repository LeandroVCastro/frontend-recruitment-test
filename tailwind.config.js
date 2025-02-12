/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Desativa reset global para evitar conflitos com MUI
  },
};
