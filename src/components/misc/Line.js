import React from "react";
import { View } from "react-native";
import { style } from "../../../styles";
import { Divider, Text } from "react-native-paper";

const Line = ({ styles, ...props }) => {
  return <Divider style={{ ...style("w-full bg-gray-300"), height: 1, ...styles }} {...props} />;
};

export default Line;
