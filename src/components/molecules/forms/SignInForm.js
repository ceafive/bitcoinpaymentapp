import React from "react";
import { View } from "react-native";
import InputWithLabel from "../inputs/InputWithLabel";
import { IconButton, TextInput as RNPTextInput } from "react-native-paper";
import PhoneInputIntl from "../inputs/PhoneInput";
import Scroller from "../../atoms/containers/Scroller";
import Typography from "../../atoms/typography/Typography";

const ShowPassword = ({ showPassword, setShowPassword, ...props }) => {
  return (
    <RNPTextInput.Icon
      color="black"
      icon={!showPassword ? "eye-outline" : "eye-off-outline"}
      size={20}
      onPress={() => setShowPassword((curr) => !curr)}
      {...props}
    />
  );
};

const SignInForm = ({ authMode, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <Scroller avoidKeyboard behavior={Platform.OS === "ios" ? "padding" : "height"} style={{}}>
      {authMode === "email" && (
        <InputWithLabel
          label="Email"
          fieldName="email"
          left={<RNPTextInput.Icon color="gray" icon={"email-outline"} size={20} />}
          {...props}
        />
      )}
      {authMode === "email" && (
        <InputWithLabel
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          left={<RNPTextInput.Icon color="gray" icon={"lock-open-outline"} size={20} />}
          right={
            <RNPTextInput.Icon
              color="gray"
              icon={!showPassword ? "eye-outline" : "eye-off-outline"}
              size={20}
              onPress={() => setShowPassword((curr) => !curr)}
            />
          }
          label="Password"
          fieldName="password"
          {...props}
        />
      )}
      {authMode === "phone" && <PhoneInputIntl fieldName="phoneNumber" {...props} />}
    </Scroller>
  );
};

export default SignInForm;
