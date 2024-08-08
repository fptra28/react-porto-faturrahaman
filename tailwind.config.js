module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans serif"],
      },
      fontSize: {
        "7.5xl": "5.625rem",
        "4.5xl": "2.5rem",
      },
      padding: {
        30: "12.7rem",
      },
      backgroundImage: {
        "porto-pattern": "url('/assets/Red-Waves-1.png')",
        main: "url('/assets/magicpattern-mesh-gradient-1723125817333.png')",
      },
      dropShadow: {
        S1: "2px 5px 5px rgba(0, 0, 0, 0.5)",
        S2: "-2px 2px 5px rgba(0, 0, 0, 0.3)",
      },
      spacing: {
        4.5: "17px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
