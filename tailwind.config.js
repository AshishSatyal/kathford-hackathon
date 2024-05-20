/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#05bc64",
          2: "#27445c",
          3: "#3c536c",
        },
      },
    },
  },
  plugins: [],
};
