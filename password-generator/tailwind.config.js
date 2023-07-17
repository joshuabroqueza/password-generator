/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      colors: {
        "regal-blue": "#243c5a",
        "semi-black": "#24232C",
        "semi-red": "#F64A4A",
        "semin-gray": "#817D92  ",
        "semi-white": "#E6E5EA",
        "more-black": "#18171F",
        "more-green": "#A4FFAF",
        "semi-orange": "#FB7C58",
        "semi-yellow": "#F9F871",
      },
    },
  },
  plugins: [],
};
