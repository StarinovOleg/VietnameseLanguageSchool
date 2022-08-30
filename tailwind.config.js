/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "background-promo": "url('/src/assets/bacground_promo.png')",
        "background-cards": "url('/src/assets/background_card_section.png')",
        "background-item-card": "url('/src/assets/background_card.png')",
        "background-about": "url('/src/assets/background_about.png')",
      }),
    },
  },
  plugins: [],
};
