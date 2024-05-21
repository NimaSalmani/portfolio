import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        background : {
          default : "#121212",
          gray : {
            default : "#1B1B1B",
            dark : "#3B3B3B"
          }
        },
        typography : {
          default : "#EEEEEE",
          gray : {
            light : "#C0C0C0",
            default : "#7F7F7F",
            dark : "#3B3B3B"
          }
        },
        common : {
          yellow : {
            default : "#FBD301",
            dark : "#F7B500"
          },
          red : {
            default : "#E01622",
            dark : "#C70F17"
          },
          purple : {
            default : "#B260B5",
            dark : "#89428E"
          }
        }
      },
      fontFamily : {
        e_reqular : "e-reqular",
        e_medium : "e-medium",
        e_semibold : "e-semibold",
        e_bold : "e-bold"
      }
    },
  },
  plugins: [],
};
export default config;
