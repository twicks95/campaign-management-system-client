/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        'sidebar-light': '#191919',
        'sidebar-dark': '#FFFFFF',
        'primary': "#1D68E3"
      },
      backgroundColor: {
        "light-active": "#D9D9D9"
      },
      padding: {
        "13": "3.125rem"
      },
      margin: {
        "13": "3.125rem"
      }
    },
  },
  plugins: [],
};
