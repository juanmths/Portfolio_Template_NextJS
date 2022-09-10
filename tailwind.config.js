const { flushSync } = require('react-dom');
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-mono-space"]
      },
      colors: {
        primarygray: {
          DEFAULT: "#F7F7FB",
          "200": "#E8E8F8",
          "300": "#BFBFE3"
        },
        yellow: {
          "50": "#ffff5f",
          "100": "#ffff55",
          "200": "#ffff4b",
          "300": "#fffb41",
          "400": "#fff137",
          "500": "#fce72d",
          "600": "#f2dd23",
          "700": "#e8d319",
          "800": "#dec90f",
          "900": "#d4bf05"
        }
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.svg)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
        },
        ".shadow-skill": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)"
        }
      };
      addUtilities(utilities);
    }),
  ],
  
}
