/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "hsl(208, 39%, 25%)",
          2: "hsl(154, 97%, 38%)",
          3: "hsl(300,33%,99%)",
        },
      },
    },
  },
  plugins: [],
};
