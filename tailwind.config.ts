/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        monad: {
          primary: "#0c111f",
          secondary: "#1c2d5e",
          accent: "#3366ff",
        },
      },
    },
  },
  plugins: [],
}