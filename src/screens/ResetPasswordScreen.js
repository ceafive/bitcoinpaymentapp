import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Toast from "react-native-toast-message";
import { useAuth } from "reactfire";

import Screen from "../components/atoms/containers/Screen";
import Scroller from "../components/atoms/containers/Scroller";
import TopImageBackground from "../components/atoms/images/TopImageBackground";
import VerificationImage from "../components/atoms/images/VerificationImage";
import Typography, { types } from "../components/atoms/typography/Typography";
import Verification from "../components/organisms/Verification";
import { fonts, style, textSizes } from "../constants/styles";
import { ResetPasswordSchema } from "../schemas/FormikValidationSchema";
import { sleep } from "../utils";

const ResetPasswordScreen = ({ navigation, route }) => {
  const auth = useAuth();
  const { height } = useWindowDimensions();

  const resetPassword = async ({ email }, { setSubmitting }) => {
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
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Scroller avoidKeyboard>
      <TopImageBackground />
      <TopImageBackground />
      <TopImageBackground />
      <Scroller avoidKeyboard wrapperStyles={{ ...style("flex-1 px-4 justify-between"), ...StyleSheet.absoluteFillObject }}>
        <Screen wrapperStyles={{ ...style("flex-0 justify-center items-center"), ...styles.imageContainer }}>
          <VerificationImage />
          <Typography
            type={types.Caption}
            text={`Reset Password`}
            textStyles={{ fontFamily: fonts.Lato_Black, textAlign: "center", ...textSizes["XLARGE"] }}
          />
        </Screen>
        <View style={{ height: height / 2.1 }}>
          <View style={styles.card}>
            <Verification
              fieldName={"email"}
              label={"Email"}
              initialValues={{ email: "" }}
              validationSchema={ResetPasswordSchema}
              showBtn={true}
              btnText={"Send Password Reset Email"}
              btnStyles={{ marginTop: 10, paddingVertical: 10, borderRadius: 10 }}
              onPressSubmit={(values, actions) => resetPassword(values, actions)}
            />
          </View>
        </View>
      </Scroller>
    </Scroller>
  );
};

export default ResetPasswordScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeedf5",
  },
  getStartedContainer: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  card: {
    shadowColor: "#0000001C",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 25,
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "white",
    borderRadius: 9,
    padding: 20,
  },
});
