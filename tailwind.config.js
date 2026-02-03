/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep space background colors
        'space': {
          950: '#0a0a1a',
          900: '#0f0f23',
          800: '#1a1a35',
          700: '#252547',
        },
        // Accent colors
        'accent': {
          violet: '#8b5cf6',
          purple: '#a855f7',
          fuchsia: '#d946ef',
          pink: '#ec4899',
          rose: '#f472b6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient': 'gradient-shift 4s ease infinite',
        'fade-in': 'fade-in-up 0.6s ease-out forwards',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 60px rgba(139, 92, 246, 0.4)',
        'glow-pink': '0 0 40px rgba(236, 72, 153, 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
