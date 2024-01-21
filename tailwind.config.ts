import type { Config } from "tailwindcss";

const {colors : defaultColors} = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(14, 45%, 36%)",
      "200" : "hsl(332, 51%, 32%)",
      "300" : "hsl(330, 100%, 98%)",
      "400" : "hsl(30, 54%, 90%)",
      "500" : "hsl(30, 18%, 87%)",
      "600" : "hsl(30, 10%, 34%)",
      "700" : "hsl(24, 5%, 18%)"
    }
  }
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : colors,
      fontFamily : {
        'serif' : 'Young Serif',
        "outfit" : "Outfit"
      }
    },
  },
  plugins: [],
};
export default config;
