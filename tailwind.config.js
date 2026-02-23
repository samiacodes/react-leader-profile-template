/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenPrimary: "#006747",
        redPrimary: "#DA291C",
      },
    },
  },
  plugins: [],
}