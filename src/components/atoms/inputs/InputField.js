import React from "react";
import { Text, View, TextInput } from "react-native";

import { style } from "../../../constants/styles";

const InputField = ({ ...others }) => {
  return <TextInput {...others} />;
};

export default InputField;
