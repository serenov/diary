/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/components/sub/*.jsx"],
  theme: {
    colors: {
      // ...
      ...colors,
      ntr: {
        0: "rgba(255, 255, 255, 0.679)",
        150: "#F8F9FAFF",
        500: "#9095A1FF",
        600: "#565D6DFF",
        900: "#171A1FFF",
      },
      pr: { 200: "#D0EBF6FF", 500: "#6BC1E2FF", 750: "#19617EFF" },
      // ...
    },
    extend: {
      fontFamily: {
        mon: "Montserrat",
        rob: "Roboto",
      },
      fontSize: {
        "10xl": ["10px", "16px"],
        "14xl": ["14px", "22px"],
        "12xl": ["12px", "20px"],
        "18xl": ["18px", "28px"],
        "20xl": ["20px", "30px"],
        "32xl": ["32px", "48px"],
      },
    },
  },
  plugins: [],
};
