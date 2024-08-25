/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('./images/pxlss.jpg')",
      },
    },
  },
  plugins: [],
};