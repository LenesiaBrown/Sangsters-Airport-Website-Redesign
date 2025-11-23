/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // files Tailwind scans for classes
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
    }, // add custom colors, spacing, fonts here if needed
  },
  plugins: [], // add Tailwind plugins if you use any
  }
};
