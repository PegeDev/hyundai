/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: "#000000",
          second: "#85B2CA",
          third: "#357CA7",
        },
      },
      maxWidth: {},
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0,100%,0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0,-100%,0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-in-out",
        "fade-in-down": "fade-in-down 1s ease-in-out",
        "fade-in-right": "fade-in-right 1s ease-in-out",
        "fade-in-left": "fade-in-left 1s ease-in-out",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1E293B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
