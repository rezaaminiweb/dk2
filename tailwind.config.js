/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        xs : '8px',
        s : '10px',
        sw : '11px',
        sl : '12px',
        sx : '14px'
      }
    },
  },
  plugins: [],
}