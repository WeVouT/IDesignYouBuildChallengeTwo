module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        bigBlur: "500px",
      },
      height: {
        bigBlur: "500px",
      },
      colors: {
        "primary-backdrop": "#131313",
        "accent-backdrop": "#3747D7",
        "button-backdrop": "#242424",
        "components-backdrop": "#1D1818",
      },
      gradientColorStops: (theme) => ({
        primaryBackdrop: "#E5E5E5",
        accentBackdrop: "#3747D7",
        textStart: "#A5D9FF",
        textStop: "#7399FB",
      }),
      backgroundSize: {
        70: "70%",
      },
      backgroundImage: {
        boxes: "url('/assets/boxes.png')",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
      gridTemplateColumns: {
        8: "repeat(8, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      blur: {
        bigBlur: "200px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
