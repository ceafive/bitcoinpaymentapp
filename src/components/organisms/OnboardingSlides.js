import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { style, sizes, textSizes, fonts } from "../../constants/styles";

import { useTheme } from "react-native-paper";

import Screen from "../atoms/containers/Screen";
import Typography, { types } from "../atoms/typography/Typography";
import Button from "../atoms/buttons/Button";

const OnboardingImage = ({ img }) => {
  return <Image style={{ width: 100, height: 100 }} source={img} />;
};

const OnboardingSlides = ({ goToLogin }) => {
  const theme = useTheme();
  const pages = [
    {
      backgroundColor: theme.colors.background,
      image: <OnboardingImage />,
      title: <Typography type={types.Title} text="Welcome" textStyles={[{ fontFamily: fonts.Lato_Bold }, { ...textSizes["4XLARGE"] }]} />,
      subtitle: <Typography text="Your number 1 payment processing app" />,
    },
    {
      backgroundColor: theme.colors.background,
      image: <OnboardingImage />,
      title: (
        <Typography type={types.Title} text="Secure payments" textStyles={[{ fontFamily: fonts.Lato_Bold }, { ...textSizes["4XLARGE"] }]} />
      ),
      subtitle: <Typography text="We offer safe, secure and fast payments and transactions" />,
    },
    {
      backgroundColor: theme.colors.background,
      image: <OnboardingImage img={require("@constants/images/location.png")} />,
      title: (
        <Typography type={types.Title} text="Accessible" textStyles={[{ fontFamily: fonts.Lato_Bold }, { ...textSizes["4XLARGE"] }]} />
      ),
      subtitle: (
        <>
          <Typography text="You can buy from us anywhere you are in Ghana" />
          <Button
            theme={{ roundness: 2 }}
            mode="contained"
            text="Get Started"
            textStyles={[style(`font-${types.Lato_Regular}`)]}
            btnStyles={[style("mt-2")]}
            onPress={goToLogin}
          />
        </>
      ),
    },
  ];

  return (
    <Screen>
      <Onboarding
        pages={pages}
        bottomBarHighlight={false}
        controlStatusBar={false}
        // showSkip={false} showNext={false} showDone={false}
      />
    </Screen>
  );
};

export default OnboardingSlides;
