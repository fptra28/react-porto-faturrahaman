module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans serif"],
      },
      fontSize: {
        '7.5xl': '5.625rem',
        '4.5xl': '2.5rem',
      },
      padding: {
        '30': '12.7rem',
      },
      backgroundImage: {
        'porto-pattern': "url('/assets/Red-Waves-1.png')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}