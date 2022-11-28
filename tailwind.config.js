/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azoxo': '#5865F2',
        'verde': '#57F287',
        'amarelo': '#FEE75C',
        'fucsia': '#EB459E',
        'vermelho': '#ED4245',
      }
    },
  },
  plugins: [],
}