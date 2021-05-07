import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme, configureFonts } from "react-native-paper";
import { fontConfig } from "./fonts";

export const AppLightTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: "#2a2afa",
    background: "rgb(255, 255, 255)",
    card: "rgb(255, 255, 255)",
    text: "rgb(0, 0, 0)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
  fonts: configureFonts(fontConfig),
};
// console.log({ ...PaperDefaultTheme.colors, ...NavigationDefaultTheme.colors });
// console.log({ ...AppLightTheme });

export const AppDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    background: "#000",
    border: "rgb(39, 39, 41)",
    card: "rgb(18, 18, 18)",
    notification: "rgb(255, 69, 58)",
    primary: "rgb(10, 132, 255)",
    text: "rgb(255, 255, 255)",
  },
  fonts: configureFonts(fontConfig),
};
