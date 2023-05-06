/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1640px",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      backgroundColor: {
        primery: "#26901b",
      },
    },
  },
  plugins: [],
};
