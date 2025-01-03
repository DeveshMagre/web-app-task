/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Added jsx
  theme: {
    extend: {
      colors: {
        'primary': '#1da1f2', // Custom primary color
        'secondary': '#14171a', // Custom secondary color
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'], // Custom font family
        'mono': ['Menlo', 'monospace'],
      },
      spacing: {
        '128': '32rem', // Custom spacing
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem'
      },
       keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}