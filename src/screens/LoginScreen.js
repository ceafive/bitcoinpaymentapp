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
import Toast from "react-native-toast-message";
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

  const signUserInEmail = async ({ email, password }, { setSubmitting }) => {
    try {
      setLoginError(null);
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      setLoginError(errorMessage);
      setSubmitting(false);
      // console.log(errorCode, errorMessage);
      if (errorCode === "auth/user-not-found") {
        try {
          const { additionalUserInfo, user } = await auth.createUserWithEmailAndPassword(email, password);
          const { isNewUser } = additionalUserInfo;
          if (isNewUser) {
            const userRef = firestore.collection("users").doc(user.uid);
            await userRef.set({
              userID: user.uid,
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
        // setTimeout(() => {
        //   setLoginError(null);
        // }, 3000);
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
  React.useEffect(() => {
    // Toast.show({
    //   type: "success",
    //   text1: "Welcome to the Login page",
    // });
  }, []);

  return (
    <Scroller avoidKeyboard wrapperStyles={{ ...style("px-4") }}>
      <Screen wrapperStyles={{ ...style("flex-1 justify-center items-center ") }}>
        <Typography type={types.Title} text="Hey," textStyles={{ fontFamily: fonts.Lato_Black, ...textSizes["3XLARGE"] }} />
        <Typography type={types.Title} text={"Login"} textStyles={{ fontFamily: fonts.Lato_Black, ...textSizes["3XLARGE"] }} />
      </Screen>
      <Scroller avoidKeyboard>
        <Login
          authMode={authMode}
          initialValues={{ email: "", password: "", phoneNumber: "" }}
          validationSchema={authMode === "email" ? EmailLoginSchema : PhoneLoginForm}
          showBtn={true}
          btnStyles={{ marginTop: 10, paddingVertical: 10, borderRadius: 10 }}
          onPressSubmit={(values, actions) => {
            // console.log(actions);
            authMode === "email" ? signUserInEmail(values, actions) : signUserInPhone(values, actions);
          }}
        />

        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 1 }}>
          {loginError && <Text text={loginError} type={textTypes.Lato_Light} textStyles={{ color: "red" }} />}
        </View>

        {authMode === "email" && (
          <View style={{ ...style("flex-row justify-between items-center mt-3") }}>
            <Typography text="Forgot your password?" textStyles={{ color: "#8b8e81" }} />
            <Button
              mode="text"
              text={"Reset Password"}
              textStyles={{ color: "blue" }}
              onPress={() => navigation.navigate("ResetPassword")}
            />
          </View>
        )}
        <View style={{ ...style("flex-row justify-center items-center mt-6") }}>
          {/* <Typography text={`Sign in with ${authMode === "email" ? "phone" : "email"} instead`} textStyles={{ color: "#8b8e81" }} /> */}
          <Button
            uppercase={false}
            mode="text"
            text={`Login with ${authMode === "email" ? "Phone" : "Email"}`}
            textStyles={{ color: "blue" }}
            onPress={() => setAuthMode(authMode === "email" ? "phone" : "email")}
          />
        </View>
      </Scroller>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={false}
        title="Prove you are human!"
        cancelLabel="Close"
      />
    </Scroller>
  );
};

export default LoginScreen;
