import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { style, fonts, textSizes, useColorScheme, colorMode } from "../../../constants/styles";

const Button = ({ text = null, children, onPress = () => {}, textStyles = {}, btnStyles = {} }) => {
  const scheme = useColorScheme();
  const textColorScheme = colorMode(scheme, "text");
  return (
    <TouchableOpacity onPress={onPress} style={[style("bg-brandBlueOne"), btnStyles]}>
      {text && <Text style={[textColorScheme, textStyles]}>{text}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
