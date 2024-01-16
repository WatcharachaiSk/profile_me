/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      spacing: {
        '10/100': '10%',
        '82-screen': '82vh',
        '90-screen': '90vh',
        '80-screen': '80vh',
        '70-screen': '70vh',
        '60-screen': '60vh',
        '50-screen': '50vh',
        '40-screen': '40vh',
        '30-screen': '30vh',
        '20-screen': '20vh',
        '10-screen': '10vh',
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        Sarabun: ['Sarabun', 'sans-serif'],
      },
      colors: {
        // primary_orange: "#FF8127",
        // shipment: "#FFBD0D",
        // busy: "#3986FE",
        // box: "#F3F3F3",
        // working: " #FF0000",
        // brown_1: "#894110",
        mainColor: '#5A95B8',
        darkMainColor: '#205B7D',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  corePlugins: {
    preflight: false,
  },
  important: true,
};
