import { style } from "@constants/styles";
import React from "react";
import { View } from "react-native";

/**
 * @param wrapperStyles styles to apply to View wrapper
 * @param children component(s) to render within View
 * @return React.Node
 */

const Screen = ({ wrapperStyles, children }) => {
  return <View style={[style("flex-1"), { ...wrapperStyles }]}>{children}</View>;
};

export default Screen;
