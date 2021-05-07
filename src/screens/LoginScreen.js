import React from "react";
import Login from "../components/organisms/Login";
import Scroller from "../components/atoms/containers/Scroller";
import Screen from "../components/atoms/containers/Screen";
import Text, { types as textTypes } from "../components/atoms/typography/Text";
import Typography, { types } from "../components/atoms/typography/Typography";
import Button from "../components/atoms/buttons/Button";
import { EmailLoginSchema, PhoneLoginForm } from "../schemas/FormikValidationSchema";
import { textSizes, fonts, style } from "../constants/styles";
import { firebaseConfig } from "../config/firebaseconfig";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from "expo-firebase-recaptcha";

import { View, ImageBackground, useWindowDimensions } from "react-native";
import { useAuth, useFirestore, useFirebaseApp } from "reactfire";

const image = require("@constants/images/location.png");

const LoginScreen = ({ navigation }) => {
  const auth = useAuth();
  const authStatics = useAuth;
  const firestoreStatics = useFirestore;
  const firestore = useFirestore();
  const { width, height } = useWindowDimensions();
  const [authMode, setAuthMode] = React.useState("email");
  const [loginError, setLoginError] = React.useState(null);

  const recaptchaVerifier = React.useRef(null);

  const timestampNow = firestoreStatics.FieldValue.serverTimestamp();
  const phoneProvider = new authStatics.PhoneAuthProvider();

  const signUserInEmail = async ({ email, password }) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // console.log(errorCode, errorMessage);
      if (errorCode === "auth/user-not-found") {
        try {
          const { additionalUserInfo, user } = await auth.createUserWithEmailAndPassword(email, password);
          const { isNewUser } = additionalUserInfo;
          if (isNewUser) {
            const userRef = firestore.collection("users").doc(user.uid);
            await userRef.set({
              email: user.email,
              emailVerified: user.emailVerified,
              dateCreated: timestampNow,
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
      if (errorCode === "auth/wrong-password") {
        // console.log(errorMessage);
        setLoginError(errorMessage);
        setTimeout(() => {
          setLoginError(null);
        }, 3000);
      }
    }
  };

  const signUserInPhone = async ({ phoneNumber }) => {
    try {
      const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
      navigation.navigate("Verification", { phoneNumber, verificationId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen wrapperStyles={{ ...style("px-4") }}>
      <View style={{ justifyContent: "center", height: height / 2 }}>
        <Typography type={types.Title} text="Hey," textStyles={{ fontFamily: fonts.Lato_Black, ...textSizes["3XLARGE"] }} />
        <Typography type={types.Title} text={"Login"} textStyles={{ fontFamily: fonts.Lato_Black, ...textSizes["3XLARGE"] }} />
      </View>

      <Login
        authMode={authMode}
        initialValues={{ email: "", password: "", phoneNumber: "" }}
        validationSchema={authMode === "email" ? EmailLoginSchema : PhoneLoginForm}
        showBtn={true}
        btnStyles={{ marginTop: 10, paddingVertical: 10, borderRadius: 10 }}
        onPressSubmit={(values) => {
          authMode === "email" ? signUserInEmail(values) : signUserInPhone(values);
        }}
      />

      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 1 }}>
        {loginError && <Text text={loginError} type={textTypes.Lato_Light} textStyles={{ color: "red" }} />}
      </View>

      {/* {
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
          <Typography text="Forgot your password?" textStyles={{ color: "#8b8e81" }} />
          <Button mode="text" text={"Reset Password"} textStyles={{ color: "blue" }} onPress={() => console.log("reset")} />
        </View>
      } */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <Typography text={`Sign in with ${authMode === "email" ? "phone" : "email"} instead`} textStyles={{ color: "#8b8e81" }} />
        <Button
          uppercase={false}
          mode="text"
          text={`${authMode === "email" ? "Phone" : "Email"} Login`}
          textStyles={{ color: "blue" }}
          onPress={() => setAuthMode(authMode === "email" ? "phone" : "email")}
        />
      </View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={false}
        title="Prove you are human!"
        cancelLabel="Close"
      />
    </Screen>
  );
};

export default LoginScreen;
