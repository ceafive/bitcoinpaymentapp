import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Typography from "../components/atoms/typography/Typography";
import { createStackNavigator } from "@react-navigation/stack";
import { fonts } from "../constants/styles";

import { OnboardingScreen, LoginScreen, VerificationScreen, ResetPasswordScreen } from "../screens";
import { SuspenseWithPerf } from "../components/helpers";

const Stack = createStackNavigator();

const LoginScreenWithSuspense = (props) => {
  return (
    <SuspenseWithPerf>
      <LoginScreen {...props} />
    </SuspenseWithPerf>
  );
};

const AuthNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          fontFamily: fonts.Lato_Regular,
        },
        headerBackTitleVisible: false,
      })}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen name="Login" component={LoginScreenWithSuspense} options={({ route }) => ({ headerShown: false })} />
      <Stack.Screen name="Verification" component={VerificationScreen} options={({ route }) => ({})} />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={({ route }) => ({
          title: "Reset Password",
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthNav;

const styles = StyleSheet.create({});
