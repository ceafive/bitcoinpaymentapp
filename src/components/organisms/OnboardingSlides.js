import React from "react";
import { View, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { style, sizes, textSizes, fonts } from "../../constants/styles";

import { useTheme } from "react-native-paper";

import Screen from "../atoms/containers/Screen";
import Typography, { types } from "../atoms/typography/Typography";
import Text, { types as textTypes } from "../atoms/typography/Text";
import Button from "../atoms/buttons/Button";
import { IconButton, Colors } from "react-native-paper";

const Done = ({ isLight, ...props }) => {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.brand.colors.onboarding1, marginRight: 5, borderRadius: 999999999999999 }}>
      <IconButton icon="check" color={"white"} size={20} {...props} />
      {/* <Button mode="contained" btnStyles={{ backgroundColor: theme.colors.brand.colors.onboarding1 }} textStyles={{ color: "white" }} >
        Login
      </Button> */}
    </View>
  );
};

const Skip = ({ isLight, ...props }) => {
  const theme = useTheme();
  return (
    <Typography
      {...props}
      type={types.Paragraph}
      text={props.skipLabel}
      textStyles={[
        { marginLeft: 10, color: theme.colors.brand.colors.onboarding1, fontFamily: fonts.Lato_Regular },
        { ...textSizes["REGULAR"] },
      ]}
    />
  );
};

const Next = ({ isLight, ...props }) => {
  const theme = useTheme();
  return (
    <Typography
      {...props}
      type={types.Paragraph}
      text={props.nextLabel}
      textStyles={[
        { marginRight: 10, color: theme.colors.brand.colors.onboarding1, fontFamily: fonts.Lato_Regular },
        { ...textSizes["REGULAR"] },
      ]}
    />
  );
};

const OnboardingImage = ({ img, size = { width: 100, height: 100 } }) => {
  const theme = useTheme();
  return (
    <>
      <Image style={{ ...size }} source={img} />
      <View style={{ width: "95%", height: 1, backgroundColor: theme.colors.brand.colors.onboarding1 }}></View>
    </>
  );
};

// export default class Menu extends Component {
//   static Subtitle = SubtitleText;

//   render() {
//     return (
//       <ul>{this.props.children}</ul>
//     );
//   }
// }

const TitleText = ({ text }) => {
  const theme = useTheme();
  return (
    <Typography
      type={types.Title}
      text={text}
      textStyles={[{ color: theme.colors.brand.colors.onboarding1, fontFamily: fonts.Lato_Bold }, { ...textSizes["3XLARGE"] }]}
    />
  );
};

const SubtitleText = ({ text }) => (
  <Typography text={text} type={types.Caption} textStyles={[{ fontFamily: fonts.Lato_Light }, { ...textSizes["XSMALL"] }]} />
);

const OnboardingSlides = ({ goToLogin }) => {
  const theme = useTheme();
  const pages = [
    {
      backgroundColor: theme.colors.background,
      image: <OnboardingImage />,
      title: <TitleText text="Welcome" />,
      subtitle: <SubtitleText text="Your number 1 payment processing app" />,
    },
    {
      backgroundColor: theme.colors.background,
      image: <OnboardingImage size={{ width: 400, height: 200 }} img={require("../../constants/images/payments.png")} />,
      title: <TitleText text="Secure, easy payments" />,
      subtitle: <SubtitleText text="We offer safe, secure and fast payments/transactions" />,
    },
    {
      backgroundColor: theme.colors.background,
      image: <OnboardingImage size={{ width: 300, height: 200 }} img={require("../../constants/images/notifications.png")} />,
      title: <TitleText text="Instant Notifications" />,
      subtitle: (
        <>
          <SubtitleText text="Instant notifications. Lets you quickly see all your transaction status" />
          {/* <Button
            theme={{ roundness: 2 }}
            mode="contained"
            text="Get Started"
            textStyles={[style(`font-${types.Lato_Regular}`)]}
            btnStyles={[style("mt-2")]}
            onPress={goToLogin}
          /> */}
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
        onSkip={goToLogin}
        onDone={goToLogin}
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        DoneButtonComponent={Done}
        // showSkip={false} showNext={false} showDone={false}
      />
    </Screen>
  );
};

export default OnboardingSlides;
