/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "0px",
      // => @media (min-width: 0px) { ... }

      sm: "400px",
      // => @media (min-width: 500px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1200px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
      xxl: "1600px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        'Roboto': ['"Roboto"', 'helvetica'],
      },
    },
  },
  plugins: [],
}