/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka One"],
        nunito: ["Nunito"],
      },
      backgroundImage: {
        "kawaki-boruto": "url('./src/assets/kawaki_boruto.png')",
        "pink-wave": "url('./src/assets/wave-haikei.svg')",
        "black-wave": "url('./src/assets/pink-black-wave.svg')",
      },
    },
  },
  plugins: [],
};
