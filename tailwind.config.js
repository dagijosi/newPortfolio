/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        polo: {
          50: '#f3f7fb',
          100: '#e5ebf4',
          200: '#d0dced',
          300: '#b0c6e0',
          400: '#7f9fcb',
          500: '#6e8cc3',
          600: '#5b75b5',
          700: '#5064a5',
          800: '#465387',
          900: '#3c476c',
          950: '#282d43',
        },
      },
    },
  },
  plugins: [],
}

