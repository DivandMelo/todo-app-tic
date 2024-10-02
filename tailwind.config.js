const { colors } = require('./src/styles/tokens')

/** @type {import('tailwindcss').Config} */
const config = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors
  },
  plugins: [],
}

module.exports = config;
