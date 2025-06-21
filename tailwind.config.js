export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F0FE',
          100: '#D2E3FC',
          200: '#AECBFA',
          300: '#8AB4F8',
          400: '#669DF6',
          500: '#4285F4',
          600: '#1A73E8',
          700: '#1967D2',
          800: '#185ABC',
          900: '#174EA6'
        },
        youtube: {
          red: '#FF0000',
          white: '#FFFFFF',
          black: '#282828'
        }
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}