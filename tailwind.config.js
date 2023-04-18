/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./ui-components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003366",
        brown: "#4a4a4a",
        yellow: "#f2af11",
        "dark-grey": "#1e272e",
        "light-brown": "#e6e2d6",
      },
      backgroundImage: {
        "page-heading": "url('~/assets/images/heading.svg')",
        recruit: "url('~/assets/images/recruit-bg.jpg')",
      },
      animation: {
        "marquee-mobile": "marquee 30s linear infinite",
        "marquee-pc": "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@media (min-width: 640px)": {
            maxWidth: "600px",
          },
          "@media (min-width: 768px)": {
            maxWidth: "768px",
          },
          "@media (min-width: 1024px)": {
            maxWidth: "1024px",
          },
          "@media (min-width: 1280px)": {
            maxWidth: "1280px",
          },
          // '@media (min-width: 1400px)': {
          //   maxWidth: '1320px',
          // },
        },
      });
    },
  ],
};
