import React from "react";
import { useWindowDimensions, View } from "react-native";
import Toast from "react-native-toast-message";
import { useAuth } from "reactfire";

import Screen from "../components/atoms/containers/Screen";
import Scroller from "../components/atoms/containers/Scroller";
import Typography, { types } from "../components/atoms/typography/Typography";
import Verification from "../components/organisms/Verification";
import { fonts, style, textSizes } from "../constants/styles";
import { ResetPasswordSchema } from "../schemas/FormikValidationSchema";
import { sleep } from "../utils";

const ResetPasswordScreen = ({ navigation, route }) => {
  const auth = useAuth();
  const { height } = useWindowDimensions();

  const resetPassword = async ({ email }) => {
    try {
      auth.sendPasswordResetEmail(email);
      Toast.show({
        type: "success",
        text1: "Email sent! 😀",
        visibilityTime: 500,
      });
      await sleep(1000);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Scroller avoidKeyboard wrapperStyles={{ ...style("px-4") }}>
      <Screen wrapperStyles={{ ...style("flex-1 justify-center items-center ") }}>
        <Typography
          type={types.Caption}
          text={`Reset Password`}
          textStyles={{ fontFamily: fonts.Lato_Black, textAlign: "center", ...textSizes["XLARGE"] }}
        />
      </Screen>

      <Scroller avoidKeyboard>
        <Verification
          fieldName={"email"}
          label={"Email"}
          initialValues={{ email: "" }}
          validationSchema={ResetPasswordSchema}
          showBtn={true}
          btnText={"Send Password Reset Email"}
          btnStyles={{ marginTop: 10, paddingVertical: 10, borderRadius: 10 }}
          onPressSubmit={resetPassword}
        />
      </Scroller>
    </Scroller>
  );
};

export default ResetPasswordScreen;
