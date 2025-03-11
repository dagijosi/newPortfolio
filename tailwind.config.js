/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#7EE787", // Fixed: Wrapped in quotes
        accent: "#C297FF",
      },
    },
  },
  plugins: [],
}
