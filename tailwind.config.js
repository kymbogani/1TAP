/** @type {import('tailwindcss').Config} */
module.exports = {
  // Update this to include the paths to all of your component files
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // ADD THIS LINE:
  presets: [require("nativewind/preset")],

  theme: {
    extend: {},
  },
  plugins: [],
};
