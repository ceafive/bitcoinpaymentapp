module.exports = {
  theme: {
    fontFamily: {
      lato_thin: "Lato_100Thin",
      lato_light: "Lato_300Light",
      lato_regular: "Lato_400Regular",
      lato_bold: "Lato_700Bold",
      lato_black: "Lato_900Black",
      open_sans_light: "OpenSans_300Light",
      open_sans_regular: "OpenSans_400Regular",
      open_sans_semi_bold: "OpenSans_600SemiBold",
      open_sans_bold: "OpenSans_700Bold",
      open_sans_extra_bold: "OpenSans_800ExtraBold",
    },
    extend: {
      flex: {},
      flexGrow: {},
      flexShrink: {},
      colors: {
        brandBgDark: "#05050C",
        brandBlueOne: "#1723FD",
        brandBlueTwo: "#2a2afa",
        brandBlueThree: "#4F44FF",
      },
      margin: {},
      padding: {},
      inset: {},
      width: {},
      height: {},
      borderRadius: {},
      borderWidth: {},
      opacity: {},
      zIndex: {},
      boxShadow: {},
      fontFamily: {},
      fontSize: {
        // eg:  xs: [12, { lineHeight: 1 }],
      },
      aspectRatio: {},
      lineHeight: {},
      letterSpacing: {},
      translate: {},
      rotate: {
        // 0: "0deg",
      },
      scale: {
        // 0: 0,
      },
      skew: {
        // 0: "0deg",
      },
      // platformColors: ({ color }) => ({
      //   blue: {
      //     ios: "systemBlue",
      //     android: "?attr/systemBlue",
      //     default: color("blue-500"),
      //   },
      // }),
      textShadow: {
        // DEFAULT: [1, 3, 1, "rgb(0,0,0)"],
      },
    },
  },

  purge: {
    whitelist: [],
    files: `**/*.{ts,tsx,js,jsx}`,
  },
};
