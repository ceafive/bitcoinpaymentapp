import React from "react";
import { View } from "react-native";
import InputWithLabel from "../inputs/InputWithLabel";
import PhoneInputIntl from "../inputs/PhoneInput";
import Screen from "../../atoms/containers/Screen";
import Typography from "../../atoms/typography/Typography";

const SignInForm = ({ authMode, ...props }) => {
  return (
    <View style={{}}>
      {authMode === "email" && <InputWithLabel label="Email" fieldName="email" {...props} />}
      {authMode === "phone" && <PhoneInputIntl fieldName="phoneNumber" {...props} />}
      {authMode === "email" && <InputWithLabel label="Password" fieldName="password" {...props} />}

      {/* <Screen wrapperStyles={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <Typography text="If you do not have an account, " textStyles={{ color: "#8b8e81" }} />
        <Button mode="text" text="Sign Up" textStyles={{ color: "blue" }} />
      </Screen> */}
    </View>
  );
};

export default SignInForm;
