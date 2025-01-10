/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js,ts,tsx}"],
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-80%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },

      borderWidth: {
        1: "1px",
      },
      colors: {
        // Absolute Colors :
        "black-color": "#000",
        "white-color": "#fff",
        // Orange Shades :
        "orange/50": "#FF9500",
        "orange/70": "#FFBF66",
        "orange/75": "#FFCA80",
        "orange/80": "#FFD599",
        "orange/90": "#FFEACC",
        "orange/95": "#FFF4E5",
        "orange/97": "#FFF9F0",
        "orange/99": "#FFFDFA",
        // White Shades :
        "white/90": "#E4E4E7",
        "white/95": "#F1F1F3",
        "white/97": "#F7F7F8",
        "white/99": "#FCFCFD",
        // Grey Shades :
        "grey/10": "#1A1A1A",
        "grey/15": "#262626",
        "grey/20": "#333333",
        "grey/30": "#4C4C4D",
        "grey/35": "#59595A",
        "grey/40": "#656567",
        "grey/60": "#98989A",
        "grey/70": "#B3B3B3",
        "grey/90": "#F7F7F8",
      },
      screens: {
        // Desktop Screen :
        "custom-2xl": "1920px",
        // Laptop Screen :
        "custom-xl": "1440px",
        // Mobile Screen :
        "custom-mobile": "390px",
      },
      fontFamily: {
        vietnam: ['"Be Vietnam Pro"', "sans-serif"],
      },
      boxShadow: {
        custom: "0px 0px 0px 4px #FFF4E5",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Add custom-container Class :
        ".custom-container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "10px",
          paddingRight: "10px",
          "@media (min-width: 390px)": {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
          "@media (min-width: 640px)": {
            paddingLeft: "25px",
            paddingRight: "25px",
          },
          "@media (min-width: 768px)": {
            paddingLeft: "40px",
            paddingRight: "40px",
          },
          "@media (min-width: 1024px)": {
            paddingLeft: "50px",
            paddingRight: "50px",
          },
          "@media (min-width: 1440px)": {
            paddingLeft: "80px",
            paddingRight: "80px",
          },
          "@media (min-width: 1920px)": {
            paddingLeft: "0",
            paddingRight: "0",
            maxWidth: "1597px",
          },
        },
      });
    },
  ],
};
