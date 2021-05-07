import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { OnboardingScreen, LoginScreen, VerificationScreen } from "../screens";
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
    <Stack.Navigator initialRouteName="Onboarding" headerMode="none">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreenWithSuspense} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
    </Stack.Navigator>
  );
};

export default AuthNav;

const styles = StyleSheet.create({});
