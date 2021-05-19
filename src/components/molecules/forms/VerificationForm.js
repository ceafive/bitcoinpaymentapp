import React from "react";
import { IconButton, TextInput as RNPTextInput } from "react-native-paper";

import Screen from "../../atoms/containers/Screen";
import InputWithLabel from "../inputs/InputWithLabel";

const VerificationForm = (props) => {
  return <InputWithLabel left={<RNPTextInput.Icon color="gray" icon={"email-outline"} size={20} />} {...props} />;
};

export default VerificationForm;
