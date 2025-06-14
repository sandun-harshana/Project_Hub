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
        'ph-red': '#FF3737', // Adjusted from #FF0000 to match global.css red
        'ph-dark': '#1A1A1A', // Dark background
        'ph-white': '#FFFFFF',
        'ph-gray': '#D3D3D3',
        'ph-light-gray': '#DDD',
        'ph-light': '#f7f7f7', // From second body in global.css
      },
      backgroundImage: {
        'ph-hero': "url('https://source.unsplash.com/random/1600x900/?technology')",
      },
    },
  },
  plugins: [],
}