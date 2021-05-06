import React from "react";
import { Text } from "react-native";

import { style, fonts, textSizes, useColorScheme, colorMode } from "../../../constants/styles";
export { fonts as types };

const Typography = ({
  text = null,
  type = "lato_regular",
  textStyles = {},
  colorScheme = null,
  children,
}) => {
  const scheme = useColorScheme();
  const textColorScheme = colorMode(scheme, "text");
  return (
    <Text
      style={[
        style(`font-${fonts[type]} `),
        { ...textSizes.REGULAR, ...textColorScheme, ...textStyles },
      ]}
    >
      {text && text}
      {children}
    </Text>
  );
};

export default Typography;
