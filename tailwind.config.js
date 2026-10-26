/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        // Deep charcoal / obsidian background foundations
        charcoal: {
          950: '#070A0F',
          900: '#0B0F17',
          850: '#0F1522',
          800: '#141D2D',
          700: '#1D283E',
        },
        // Dark navy (#182234) as requested accent
        navy: {
          DEFAULT: '#182234',
          light: '#243450',
          dark: '#101724',
          subtle: '#1C293D',
          border: '#283852',
        },
        // Refined borders and surface colors
        surface: {
          DEFAULT: '#0B0F17',
          card: '#0F1522',
          elevated: '#141C2B',
          muted: '#1A2336',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.16)',
        },
        // Clean text shades
        text: {
          primary: '#F8FAFC',    // Off-white
          secondary: '#94A3B8',  // Slate 400
          muted: '#64748B',      // Slate 500
        },
        // Subtle blue-slate indicator
        highlight: {
          DEFAULT: '#38BDF8',
          subtle: 'rgba(56, 189, 248, 0.12)',
          border: 'rgba(56, 189, 248, 0.25)',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'card': '0 10px 30px -10px rgba(7, 10, 15, 0.8)',
      }
    },
  },
  plugins: [],
}
