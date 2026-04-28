/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1284px",
      "2xl": "1536px",
      "3xl": "1654px",
    },
    colors: {
      "primary-color": "#181D23",
      "secondary-color": "#AD843E",
      transparent: "rgba(0, 0, 0, 0)",
      white: "#FFF",
      SnowWhite: "#F4EBE2",
      black: "#000",
      textColor: "#181D23",
      error: "#ff1a1a",
    },
    textShadow: {
      sm: "0 1px 2px rgba(0, 0, 0, 0.5)",
      DEFAULT: "0 2px 4px rgba(0, 0, 0, 0.5)",
      lg: "0 4px 6px rgba(0, 0, 0, 0.5)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradiant-banner":
          "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.20) 25%, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.20) 75%, #000 100%)",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
          "3xl": "2rem",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-sm": {
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      });
    },
  ],
};
