import React from "react";
import { Text, TextInput, View } from "react-native";

import { style } from "../../../constants/styles";

const InputField = ({ ...others }) => {
  return <TextInput {...others} />;
};

export default InputField;
