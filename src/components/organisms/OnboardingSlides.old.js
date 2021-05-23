import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Colors, IconButton, useTheme } from "react-native-paper";

import { fonts, sizes, style, textSizes } from "../../constants/styles";
import Button from "../atoms/buttons/Button";
import Screen from "../atoms/containers/Screen";
import Text, { types as textTypes } from "../atoms/typography/Text";
import Typography, { types } from "../atoms/typography/Typography";
import Background from "../molecules/images/Background";
import GetStartedImage from "../molecules/images/GetStartedImage";
import TopImageBackground from "../molecules/images/TopImageBackground";
import VerificationImage from "../molecules/images/VerificationImage";
import WelcomeImage from "../molecules/images/WelcomeImage";

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

const OnboardingImage = ({ img, size = { width: 100, height: 100 }, component }) => {
  const Component = component;
  const theme = useTheme();
  return (
    <View style={[styles.container]}>
      <TopImageBackground />
      <TopImageBackground />
      {/* <TopImageBackground /> */}
      {/* <Background /> */}
      <View style={styles.getStartedContainer}>
        <View style={styles.imageContainer}>
          <Component />
        </View>
      </View>
      {/* <Image style={{ ...size }} source={img} />
      <View style={{ width: "95%", height: 1, backgroundColor: theme.colors.brand.colors.onboarding1 }}/> */}
    </View>
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
  <Typography text={text} type={types.Caption} textStyles={[{ fontFamily: fonts.Lato_Light }, { ...textSizes["SMALL"] }]} />
);

const OnboardingSlides = ({ goToLogin }) => {
  const theme = useTheme();
  const pages = [
    {
      backgroundColor: "#fff",
      // backgroundColor: "#eeedf5",
      // backgroundColor: theme.colors.background,
      image: <OnboardingImage component={GetStartedImage} />,
      title: <TitleText text="Welcome" />,
      subtitle: <SubtitleText text="Your number 1 payment processing app" />,
    },
    {
      backgroundColor: "#fff",
      // backgroundColor: "#eeedf5",
      image: (
        <OnboardingImage
          component={VerificationImage}
          size={{ width: 400, height: 200 }}
          img={require("../../constants/images/payments.png")}
        />
      ),
      title: <TitleText text="Secure, easy payments" />,
      subtitle: <SubtitleText text="We offer safe, secure and fast payments/transactions" />,
    },
    {
      backgroundColor: "#fff",
      // backgroundColor: "#eeedf5",
      image: (
        <OnboardingImage
          component={WelcomeImage}
          size={{ width: 300, height: 200 }}
          img={require("../../constants/images/notifications.png")}
        />
      ),
      title: (
        <>
          <TitleText text="Instant Notifications" />
          <SubtitleText text="You quickly see all your transaction status" />
        </>
      ),
      subtitle: (
        <>
          <Button
            theme={{ roundness: 0 }}
            mode="outlined"
            text="Login"
            textStyles={[style(), { fontSize: 15, color: theme.colors.primary }]}
            btnStyles={[style("mt-5 px-20 py-2"), { borderColor: theme.colors.primary, borderWidth: 0.5 }]}
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
        controlStatusBar={true}
        onSkip={goToLogin}
        showDone={false}
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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    marginTop: -250,
  },
  getStartedContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom: 30,
  },
});
