/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "background-promo": "url('/src/assets/background_promo.png')",
        "background-about": "url('/src/assets/background_about.png')",
      }),
    },
  },
  plugins: [],
};
