/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "background-promo": "url('/src/assets/background_promo.png')",
        "background-button": "url('/src/assets/icon-audio.png')",
        "background-button-stop-audio": "url('/src/assets/icon-stop-audio.png')",
        "background-red": "url('/src/assets/watercolor-brush-background/red.png')",
        "background-pink": "url('/src/assets/watercolor-brush-background/pink.png')",
      }),
    },
  },
  plugins: [],
};
