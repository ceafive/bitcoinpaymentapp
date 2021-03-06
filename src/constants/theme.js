import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { configureFonts, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from "react-native-paper";

import tailwindConfig from "../../styles/tailwind.config";
import { fontConfig } from "./fonts";
import { colorMode, fonts, sizes, style, styles, textSizes, useColorScheme, useTransition, variant } from "./styles";

const brandColors = {
  ...tailwindConfig.theme.extend.colors,
  onboarding1: "#272050",
};

const brand = {
  colors: brandColors,
};

export const AppLightTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: tailwindConfig.theme.extend.colors.brandBlueThree,
    background: "rgb(255, 255, 255)",
    card: "rgb(255, 255, 255)",
    text: "rgb(0, 0, 0)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
    brand,
  },
  fonts: configureFonts(fontConfig),
};

export const AppDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: "rgb(10, 132, 255)",
    background: "#000",
    border: "rgb(39, 39, 41)",
    card: "rgb(18, 18, 18)",
    notification: "rgb(255, 69, 58)",
    text: "rgb(255, 255, 255)",
    brand,
  },
  fonts: configureFonts(fontConfig),
};
