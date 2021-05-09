import React from "react";
import InputWithLabel from "../inputs/InputWithLabel";
import Screen from "../../atoms/containers/Screen";
import { IconButton, TextInput as RNPTextInput } from "react-native-paper";

const VerificationForm = (props) => {
  return <InputWithLabel left={<RNPTextInput.Icon color="gray" icon={"email-outline"} size={20} />} {...props} />;
};

export default VerificationForm;
