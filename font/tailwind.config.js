/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'], 
        robotoMono: ['Roboto Mono', 'monospace'], 
        sanchez: ['Sanchez', 'serif'],
      },
      boxShadow: {
        'custom': '4px 4px 0px 4px #9EA6A1', 
        'custom1':'0px 4px 4px 0px #00000040',
      },
    },
  },
  plugins: [],
}