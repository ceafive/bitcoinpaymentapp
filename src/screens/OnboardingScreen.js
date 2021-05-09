import React from "react";
import Toast from "react-native-toast-message";
import OnboardingSlides from "../components/organisms/OnboardingSlides";

const OnboardingScreen = ({ navigation, route }) => {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return <OnboardingSlides goToLogin={goToLogin} />;
};

export default OnboardingScreen;
