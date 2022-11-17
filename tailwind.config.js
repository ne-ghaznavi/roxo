/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IRANSansWeb: ["IRANSansWeb", "sans-serif"],
        laSolid: ["laSolid", "cursive"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
