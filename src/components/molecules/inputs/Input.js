import * as React from "react";
import { TextInput as RNPTextInput } from "react-native-paper";

const Input = ({ inputStyles, ...props }) => {
  return <RNPTextInput style={inputStyles} {...props} />;
};

export default Input;
