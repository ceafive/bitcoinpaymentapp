import React from "react";
import { StyleSheet, Text, View } from "react-native";

import OnboardingSlides from "../components/organisms/app/OnboardingSlides";

const OnboardingScreen = ({ navigation, route }) => {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return <OnboardingSlides goToLogin={goToLogin} />;
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
