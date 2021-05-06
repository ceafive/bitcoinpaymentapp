import React from "react";
import { View } from "react-native";
import { style } from "../../../constants/styles";

const Screen = ({ children }) => {
  return <View style={style("flex-1")}>{children}</View>;
};

export default Screen;
