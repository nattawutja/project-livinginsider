/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-living': '#f0f8ff', // ตั้งชื่อสีเอง
        'bg-footer': '#e8f9f4'
      },
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

