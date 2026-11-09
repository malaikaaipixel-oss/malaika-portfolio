/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: '#170B20',
          1: '#1D1028',
          2: '#28152F',
          3: '#3A2244',
          4: '#4E3060',
          5: '#6B4A80',
        },
        orchid: {
          DEFAULT: '#A855F7',
          light: '#C084FC',
          dark: '#9333EA',
          muted: '#3D1B5A',
        },
        coral: {
          DEFAULT: '#FF746C',
          light: '#FF9A94',
          dark: '#E85050',
          muted: '#4A1F1D',
        },
        lavender: {
          DEFAULT: '#D9C8EA',
          2: '#B9A9C5',
          3: '#9B8BAF',
          4: '#7A6894',
        },
        ivory: {
          DEFAULT: '#F8F3FA',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.1em',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
