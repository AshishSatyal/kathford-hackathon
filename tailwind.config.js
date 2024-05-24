/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#05bc64", // accent-color (green range)
          2: "#27445c", // blue range
          3: "#3c536c", // blue range light version
          4: "#232323", // dark color (currently use for bg)
        },
      },
    },
  },
  plugins: [],
};
