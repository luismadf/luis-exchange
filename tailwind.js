module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  important: true,
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      margin: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
};
