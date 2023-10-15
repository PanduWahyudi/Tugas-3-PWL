/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'sky-blue' : '#98E4FF',
        'mid-purple' : '#610C9F',
        'old-purple' : '#363062',
        'nice-pink' : '#DA0C81',
        'dark-purple' : '#322653',

      }

    },
  },
  plugins: [],
}

