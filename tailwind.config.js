/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Polly", "sans-serif"],
        nexa: 'Nexa Light'
      },
    },
  },
  plugins: [],
};
