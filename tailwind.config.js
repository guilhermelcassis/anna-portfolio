/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FBFAF8',
        'dark-gray': '#2D2D2D',
        'accent': '#A39382',
        'light-accent': '#DFD6C2',
      },
      fontFamily: {
        'sans': ['Product Sans', 'Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'product': ['Product Sans', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

