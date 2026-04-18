/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef6ff',
          100: '#d9eaff',
          200: '#bcdaff',
          300: '#8ec3ff',
          400: '#59a1ff',
          500: '#3b82f6',
          600: '#1d64d8',
          700: '#174faf',
          800: '#19438f',
          900: '#1a3a75',
          950: '#142549',
        },
      },
      fontFamily: {
        jakarta: '"Plus Jakarta Sans", sans-serif',
        radio: '"Radio Canada Big", sans-serif',
        source: '"Source Sans 3", sans-serif',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        tripflip: {
          "primary":   "#3b82f6",
          "secondary": "#6366f1",
          "accent":    "#06b6d4",
          "neutral":   "#1e293b",
          "base-100":  "#ffffff",
          "base-200":  "#f8fafc",
          "base-300":  "#e2e8f0",
          "info":      "#38bdf8",
          "success":   "#22c55e",
          "warning":   "#f59e0b",
          "error":     "#ef4444",
        },
      },
    ],
  },
}
