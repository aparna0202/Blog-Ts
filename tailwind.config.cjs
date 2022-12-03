/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {boxShadow: {'custom': '8px 8px 5px 0px rgba(0,0,0,0.75)'}},
  },
  plugins: [],
};
