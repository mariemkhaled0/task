/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Only HTML files in the root folder
    "./src/**/*.{html,js}", // HTML and JS files in the 'src' folder and its subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
