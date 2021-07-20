export default {
  theme: {
    palette: {
      main: {
        light: "#FFCC33",
        base: "#FF9900",
        dark: "#CC6600",
      },
      accent: {
        light: "#66FFFF",
        base: "#00CCFF",
      },
      surface: {
        light: "#FFFFFF",
        dark: "#666666",
      },
      background: {
        light: "#F5F5F5",
        dark: "#333333",
      },
      error: {
        light: "#FF6633",
        dark: "#FF3300",
      },
      warning: {
        light: "#FFFF66",
        dark: "#FFCC00",
      },
      success: {
        light: "#00FF99",
        dark: "#00CC66",
      },
      type: {
        light: {
          low: "rgba(255, 255, 255, 0.4)",
          normal: "rgba(255, 255, 255, 0.6)",
          high: "rgba(255, 255, 255, 1)",
        },
        dark: {
          low: "rgba(0, 0, 0, 0.2)",
          normal: "rgba(0, 0, 0, 0.4)",
          high: "rgba(0, 0, 0, 0.8)",
        },
      },
    },
    font: {
      family: {
        display: ["Bello Caps Pro", "sans-serif"].join(""),
        text: ["Parisine Std Gris", "sans-serif"].join(""),
      },
      size: {
        h1: 40,
        h2: 36,
        h3: 32,
        h4: 28,
        h5: 24,
        h6: 20,
        p: 16,
        span: 12,
      },
    },
    metrics: {
      spacing: 8,
    },
  },
};
