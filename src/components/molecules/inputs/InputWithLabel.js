import React from "react";
import { TextInput as RNPTextInput } from "react-native-paper";
import Text, { types } from "../../atoms/typography/Text";

const InputWithLabel = ({
  label,
  fieldName,
  inputStyles,
  values,
  errors,
  setFieldValue,
  autoCapitalize = "none",
  theme = { roundness: 10 },
  ...props
}) => {
  return (
    <>
      <RNPTextInput
        mode="outlined"
        label={label}
        style={[{ ...inputStyles }]}
        value={values[fieldName]}
        onChangeText={(text) => setFieldValue(fieldName, text)}
        theme={theme}
        autoCapitalize={autoCapitalize}
        secureTextEntry={fieldName === "password"}
        {...props}
      />
      {errors[fieldName] && <Text text={errors[fieldName]} type={types.Lato_Light} textStyles={{ color: "red" }} />}
    </>
  );
};

export default InputWithLabel;
