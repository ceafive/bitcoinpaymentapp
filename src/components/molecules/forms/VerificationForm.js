import OTPInputView from "@twotalltotems/react-native-otp-input";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { IconButton, TextInput as RNPTextInput } from "react-native-paper";

import Screen from "../../atoms/containers/Screen";
import Text, { types } from "../../atoms/typography/Text";
import InputWithLabel from "../inputs/InputWithLabel";

// const VerificationForm = (props) => {
//   return <InputWithLabel left={<RNPTextInput.Icon color="gray" icon={"email-outline"} size={20} />} {...props} />;
// };

const { width, height } = Dimensions.get("window");

const VerificationForm = ({ fieldName, ...props }) => {
  if (fieldName === "email") {
    return <InputWithLabel left={<RNPTextInput.Icon color="gray" icon={"email-outline"} size={20} />} fieldName={fieldName} {...props} />;
  }

  if (fieldName === "code") {
    return (
      <>
        <OTPInputView
          style={{ width: "100%", height: 100 }}
          pinCount={6}
          code={props.values[fieldName]}
          onCodeChanged={(code) => props.setFieldValue(fieldName, code)}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {}}
          editable
          // secureTextEntry
        />
        {props.errors[fieldName] && <Text text={props.errors[fieldName]} type={types.Lato_Light} textStyles={{ color: "red" }} />}
      </>
    );
  }
};

export default VerificationForm;

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#7D7D7E",
    color: "#000000",
  },
  underlineStyleHighLighted: {
    borderBottomColor: "#4F44FF",
  },
});
