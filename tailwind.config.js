/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 2s infinite',
      },
    },
  },
  plugins: [],
}

