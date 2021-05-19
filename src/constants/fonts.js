import { Lato_100Thin, Lato_300Light, Lato_400Regular, Lato_700Bold, Lato_900Black, useFonts } from "@expo-google-fonts/lato";
import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

export const isFontLoaded = () => {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  return fontsLoaded;
};

export {
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
};

export const fonts = {
  Lato_Thin: "Lato_100Thin",
  Lato_Light: "Lato_300Light",
  Lato_Regular: "Lato_400Regular",
  Lato_Bold: "Lato_700Bold",
  Lato_Black: "Lato_900Black",
  Open_Sans_Light: "OpenSans_300Light",
  Open_Sans_Regular: "OpenSans_400Regular",
  Open_Sans_SemiBold: "OpenSans_600SemiBold",
  Open_Sans_Bold: "OpenSans_700Bold",
  Open_Sans_ExtraBold: "OpenSans_800ExtraBold",
};

export const fontConfig = {
  default: {
    regular: {
      fontFamily: fonts.Lato_Regular,
      fontWeight: "normal",
    },
    medium: {
      fontFamily: fonts.Lato_Regular,
      fontWeight: "normal",
    },
    light: {
      fontFamily: fonts.Lato_Light,
      fontWeight: "normal",
    },
    thin: {
      fontFamily: fonts.Lato_Thin,
      fontWeight: "normal",
    },
  },
};

fontConfig.web = fontConfig.default;
fontConfig.ios = fontConfig.default;
fontConfig.android = fontConfig.default;
