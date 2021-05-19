import React from "react";
import { StyleSheet, Text, View } from "react-native";

import InputWithLabel from "../inputs/InputWithLabel";

const FormikInput = ({ fieldName, inputStyles, children, ...props }) => {
  return (
    <View>
      {React.cloneElement(children, {
        value: values[fieldName],
        onChangeText: handleChange,
        inputStyles,
      })}
    </View>
  );
};

export default FormikInput;
