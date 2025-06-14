/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'ph-red': '#FF3737',
        'ph-dark': '#1A1A1A',
        'ph-white': '#FFFFFF',
        'ph-gray': '#D3D3D3',
        'ph-light-gray': '#DDD',
        'ph-light': '#f7f7f7',
      },
      backgroundImage: {
        'ph-hero': "url('https://source.unsplash.com/random/1600x900/?technology')",
      },
    },
  },
  plugins: [],
}