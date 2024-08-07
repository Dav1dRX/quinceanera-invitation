module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'script': ['Dancing Script', 'cursive'],
        'playfair': ['"Playfair Display"', 'serif'],
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'sans': ['Montserrat', 'sans-serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'tangerine': ['Tangerine', 'cursive']
      },
      colors: {
        'purple': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
    },
  },
  plugins: [],
}