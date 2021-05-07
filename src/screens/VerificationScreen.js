import React from "react";
import Login from "../components/organisms/Login";
import Verification from "../components/organisms/Verification";
import Scroller from "../components/atoms/containers/Scroller";
import Screen from "../components/atoms/containers/Screen";
import Text, { types as textTypes } from "../components/atoms/typography/Text";
import Typography, { types } from "../components/atoms/typography/Typography";
import Button from "../components/atoms/buttons/Button";
import { VerifyScreenSchema } from "../schemas/FormikValidationSchema";
import { textSizes, fonts, style } from "../constants/styles";

import { View, ImageBackground, useWindowDimensions } from "react-native";
import { useAuth, useFirestore, useFirebaseApp } from "reactfire";

const image = require("@constants/images/location.png");

const VerificationScreen = ({ navigation, route }) => {
  const { phoneNumber = "", verificationId = "" } = route.params;
  const auth = useAuth();
  const authStatics = useAuth;
  const firestoreStatics = useFirestore;
  const firestore = useFirestore();
  const { width, height } = useWindowDimensions();

  const timestampNow = firestoreStatics.FieldValue.serverTimestamp();
  const phoneProvider = authStatics.PhoneAuthProvider.credential;

  const verfiyCodeAndLogin = async ({ code }) => {
    try {
      const credential = phoneProvider(verificationId, code);
      const { additionalUserInfo, user } = await auth.signInWithCredential(credential);
      const { isNewUser } = additionalUserInfo;
      if (isNewUser) {
        const userRef = firestore.collection("users").doc(user.uid);
        await userRef.set({
          phoneNumber,
          dateCreated: timestampNow,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen wrapperStyles={{ ...style("px-4") }}>
      <View style={{ justifyContent: "center", height: height / 2 }}>
        <Typography
          type={types.Caption}
          text={`Code is sent to ${phoneNumber}`}
          textStyles={{ fontFamily: fonts.Lato_Black, textAlign: "center", ...textSizes["XLARGE"] }}
        />
      </View>

      <Verification
        initialValues={{ code: "" }}
        validationSchema={VerifyScreenSchema}
        showBtn={true}
        btnText={"Verify and Login"}
        btnStyles={{ marginTop: 10, paddingVertical: 10, borderRadius: 10 }}
        onPressSubmit={verfiyCodeAndLogin}
      />
    </Screen>
  );
};

export default VerificationScreen;
