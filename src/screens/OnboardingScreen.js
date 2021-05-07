import React from "react";
import OnboardingSlides from "../components/organisms/OnboardingSlides";

const OnboardingScreen = ({ navigation, route }) => {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return <OnboardingSlides goToLogin={goToLogin} />;
};

export default OnboardingScreen;
