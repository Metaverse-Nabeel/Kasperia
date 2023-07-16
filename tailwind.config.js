/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Polly", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('./src/assets/heroSection.svg')",
        heroFade: "url('./src/assets/heroFade.svg')",
      },
    },
  },
  plugins: [],
};
