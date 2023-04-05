/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        twitter:"#1A8CD8",
        react:"#00D8FF"
      },
      spacing:{
        "15": "3.75rem" // 60 px 3.75rem, thats why customized it like this
      }
    },
  },
  plugins: [],
}

