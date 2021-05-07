import React from "react";
import { Button as RNPButton, Text } from "react-native-paper";

const Button = ({ text = null, children, onPress = () => {}, textStyles = {}, btnStyles = {}, ...props }) => {
  return (
    <RNPButton onPress={onPress} style={btnStyles} {...props}>
      {text && <Text style={textStyles}>{text}</Text>}
      {children}
    </RNPButton>
  );
};

export default Button;
