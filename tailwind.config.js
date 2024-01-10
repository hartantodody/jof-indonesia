/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headline: "#FFFFFF",
        title: "#D1D1D1",
        subtitle: "#A7A7A7",
        body: "#6C6C6C",
        caption: "#232323",
        background: "#090909",
      },
      fontFamily: {
        "plus-jakarta-sans": ["PlusJakartaSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
