import React from "react";
import { IconButton, TextInput as RNPTextInput } from "react-native-paper";

import Text, { types } from "../../atoms/typography/Text";

const InputWithLabel = ({
  label,
  fieldName,
  inputStyles,
  values,
  errors,
  setFieldValue,
  handleChange,
  autoCapitalize = "none",
  theme = { roundness: 10 },
  showPassword,
  left,
  right,
  ...props
}) => {
  return (
    <>
      <RNPTextInput
        mode="outlined"
        label={label}
        style={inputStyles}
        value={values[fieldName]}
        onChangeText={(text) => setFieldValue(fieldName, text)}
        theme={theme}
        autoCapitalize={autoCapitalize}
        secureTextEntry={fieldName === "password" && !showPassword ? true : false}
        left={left}
        right={right}
        error={errors[fieldName]}
        {...props}
      />
      {errors[fieldName] && <Text text={errors[fieldName]} type={types.Lato_Light} textStyles={{ color: "red" }} />}
    </>
  );
};

export default InputWithLabel;
