import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { style } from "../../../constants/styles";

const Scroller = ({ wrapperStyles, children, avoidKeyboard = false, ...props }) => {
  const ComponentToRender = avoidKeyboard ? KeyboardAvoidingView : ScrollView;
  return (
    <ComponentToRender style={[style("flex-1"), { ...wrapperStyles }]} {...props}>
      {children}
    </ComponentToRender>
  );
};

export default Scroller;
