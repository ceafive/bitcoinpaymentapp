import { style, styles, useTransition, variant } from "../../styles";
import { useColorScheme } from "react-native-appearance";
import { fonts } from "./fonts";

export { style, variant, useTransition, styles as stylesJSON };
export { useColorScheme };

/**
 * @desc choose which color mode to return on text and background
 * @param {Enum} colorScheme - 'light' | 'dark'
 * @param {Enum} whichToReturn - 'both' | 'text' | 'background'
 */

export const colorMode = (colorScheme = "light", whichToReturn) => {
  const textAndBackgroud = variant(
    {
      dark: "text-white bg-brandBgDark",
      light: "text-brandBgDark bg-white",
    },
    colorScheme
  );

  const textOnly = variant(
    {
      dark: "text-white",
      light: "text-brandBgDark",
    },
    colorScheme
  );

  const backgroundOnly = variant(
    {
      dark: "bg-brandBgDark",
      light: "bg-white",
    },
    colorScheme
  );

  const toReturn = {
    both: textAndBackgroud,
    text: textOnly,
    background: backgroundOnly,
  };

  return toReturn[whichToReturn];
};

export const sizes = {
  MID: style("w-64 h-64"),
};

export const textSizes = {
  XSMALL: style("text-xs"),
  SMALL: style("text-sm"),
  REGULAR: style("text-base"),
  LARGE: style("text-lg"),
  XLARGE: style("text-xl"),
  "2XLARGE": style("text-2xl"),
  "3XLARGE": style("text-3xl"),
  "4XLARGE": style("text-4xl"),
  "5XLARGE": style("text-5xl"),
  "6XLARGE": style("text-6xl"),
  "7XLARGE": style("text-7xl"),
  "8XLARGE": style("text-8xl"),
  "9XLARGE": style("text-9xl"),
};

export { fonts };
