module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#4285f4",
        customGray: "#E0E0E0",
        textTitle: "#484848",
        borderButton: "#5B86E5",
      },
      spacing: {
        "392px": "392px",
        "756px": "756px",
        "426px": "426px",
        "150px": "150px",
      },
      borderRadius: {
        custom: "10px 0px 0px 0px",
      },
      opacity: {
        0: "0",
        100: "1",
      },
      inset: {
        "220px": "220px",
        "320px": "320px",
        "406px": "406px",
      },
      fontFamily: {
        volkhov: ["Volkhov", "serif"],
      },
      fontSize: {
        "52px": "52px",
      },
      lineHeight: {
        "52px": "52px",
      },
    },
  },
  plugins: [],
};
