import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { style, sizes, textSizes, useColorScheme, colorMode } from "../../../constants/styles";

import Screen from "../../atoms/containers/Screen";
import Typography, { types } from "../../atoms/typography/Typography";
import Button from "../../atoms/buttons/Button";

const OnboardingImage = ({ img }) => {
  return <Image style={{ width: 200, height: 200 }} source={img} />;
};

const OnboardingSlides = ({ goToLogin }) => {
  const scheme = useColorScheme();
  const bgColorScheme = colorMode(scheme, "background");

  const pages = [
    {
      ...bgColorScheme,
      image: <OnboardingImage />,
      title: (
        <Typography
          type={types.lato_black}
          text="Welcome"
          textStyles={{ ...textSizes["4XLARGE"] }}
        />
      ),
      subtitle: <Typography text="Your number 1 Bitcoin purchasing app" />,
    },
    {
      ...bgColorScheme,
      image: <OnboardingImage />,
      title: (
        <Typography
          type={types.lato_black}
          text="Secure payments"
          textStyles={{ ...textSizes["4XLARGE"] }}
        />
      ),
      subtitle: <Typography text="We offer safe, secure and fast payments and transactions" />,
    },
    {
      ...bgColorScheme,
      image: <OnboardingImage img={require("../../../constants/images/location.png")} />,
      title: (
        <Typography
          type={types.lato_black}
          text="Accessible"
          textStyles={{ ...textSizes["4XLARGE"] }}
        />
      ),
      subtitle: (
        <>
          <Typography text="You can buy from us anywhere you are in Ghana" />
          <Button
            text="Get Started"
            textStyles={[style(`text-xl font-${types.lato_regular}`)]}
            btnStyles={[
              style("mt-2"),
              { paddingHorizontal: 150, paddingVertical: 20, borderRadius: 10 },
            ]}
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
        showSkip={false}
        showNext={false}
        showDone={false}
      />
    </Screen>
  );
};

export default OnboardingSlides;
