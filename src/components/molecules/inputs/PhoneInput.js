import { Entypo } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";

import Text, { types } from "../../atoms/typography/Text";

const PhoneInputIntl = ({ fieldName, errors, setFieldValue, setFieldError, inputWrapperStyles = {}, ...props }) => {
  const theme = useTheme();
  const [value, setValue] = useState("");
  const phoneInput = useRef(null);

  React.useEffect(() => {
    if (value) {
      const checkValid = phoneInput.current?.isValidNumber(value);
      if (!checkValid) {
        setFieldError(fieldName, "Please enter a valid phone number");
        // } else {
        //   setFieldError(fieldName, undefined);
      }
    }
  }, [value]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="GH"
          layout="first"
          renderDropdownImage={<Entypo name="chevron-down" size={20} color={theme.colors.text} />}
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFieldValue(fieldName, text);
          }}
          withDarkTheme={theme.dark}
          textInputStyle={{
            fontFamily: types.Lato_Regular,
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
            height: 56,
          }}
          textContainerStyle={{ backgroundColor: theme.colors.background, color: theme.colors.text }}
          containerStyle={{ height: 56, width: "100%", ...inputWrapperStyles }}
          codeTextStyle={{
            fontFamily: types.Lato_Regular,
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
          }}
          flagButtonStyle={{
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
          }}
        />
      </View>
      {errors[fieldName] && <Text text={errors[fieldName]} type={types.Lato_Light} textStyles={{ color: "red" }} />}
    </>
  );
};

export default PhoneInputIntl;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
    marginTop: 6,
  },
});
