/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-500': '#4C49ED',
        "slate-100":"#E5E5E5",
        "red-500":"#FF4B4A"
      },
    },
  },
  plugins: [],
};
