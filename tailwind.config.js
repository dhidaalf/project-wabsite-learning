module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 600: "#757575" },
        pink: { 50: "#f2dae5" },
        blue_gray: {
          100: "#d9d9d9",
          "500_e5": "#5787a9e5",
          "100_01": "#d2d2d2",
        },
        yellow: { 50: "#fffff0" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        light_blue: { A700_e5: "#0095ffe5" },
        orange: { 300: "#ffc05a" },
        white: { A700_01: "#fffffe", A700_02: "#fefeff", A700: "#ffffff" },
        blue: { 400: "#3da9fc" },
        cyan: { 900: "#094067" },
      },
      fontFamily: { poppins: "Poppins", inter: "Inter", kd: "K2D" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      backgroundImage: {
        gradient: "linear-gradient(205deg ,#0095ffe5,#5787a9e5)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
