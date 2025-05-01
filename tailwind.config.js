export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazir"],
        yekan: ["iranyekanBakh"],
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
