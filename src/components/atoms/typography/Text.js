import React from "react";
import { Text as RNPText } from "react-native-paper";

import { fonts } from "../../../constants/fonts";

export { fonts as types };

const Text = ({ text = null, type = fonts.Lato_Regular, textStyles = {}, children, ...props }) => {
  return (
    <RNPText style={{ fontFamily: type, ...textStyles }} {...props}>
      {text && text}
      {children}
    </RNPText>
  );
};

export default Text;
