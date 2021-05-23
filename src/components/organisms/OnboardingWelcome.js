import * as React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import Animated from "react-native-reanimated";

import { fonts } from "../../constants/fonts";
import { style, textSizes } from "../../constants/styles";
import Button from "../atoms/buttons/Button";
import Background from "../atoms/images/Background";
import TopImageBackground from "../atoms/images/TopImageBackground";
import Typography, { types } from "../atoms/typography/Typography";

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

const OnboardingWelcome = ({ titleText, subtitleText, imageComponent, btnText, action }) => {
  const { height } = Dimensions.get("window");
  const ImageComponent = imageComponent;

  const theme = useTheme();
  return (
    <Animated.View style={[styles.container]}>
      <TopImageBackground />
      <TopImageBackground />
      <TopImageBackground />
      <TopImageBackground />
      {/* <Background /> */}
      <View style={styles.getStartedContainer}>
        <View style={styles.imageContainer}>
          <ImageComponent />
        </View>
        <View style={{ ...style("items-center"), height: height / 3 }}>
          <TitleText text={titleText} />
          <SubtitleText text={subtitleText} />
          {btnText && (
            <Button
              theme={{ roundness: 0 }}
              mode="contained"
              text={btnText}
              textStyles={[style(), { fontSize: 15, color: "white" }]}
              btnStyles={[style("mt-5 px-20 py-2"), { borderColor: theme.colors.primary, borderWidth: 0.5 }]}
              onPress={action}
            />
          )}
        </View>
      </View>
    </Animated.View>
  );
};

export default OnboardingWelcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeedf5",
  },
  getStartedContainer: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
