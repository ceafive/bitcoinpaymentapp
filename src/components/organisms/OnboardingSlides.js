import { Pager, PagerProvider, Pagination, useFocus, useIndex, usePager } from "@crowdlinker/react-native-pager";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";
import Animated from "react-native-reanimated";

import { fonts, style } from "../../constants/styles";
import Button from "../atoms/buttons/Button";
import GetStartedImage from "../atoms/images/GetStartedImage";
import NotificationImage from "../atoms/images/NotificationImage";
import VerificationImage from "../atoms/images/VerificationImage";
import Typography from "../atoms/typography/Typography";
import OnboardingWelcome from "./OnboardingWelcome";

const colors = ["#707070", "#707070", "#6C63FF"];

const NavButton = ({ text, action }) => {
  return (
    <Button mode="text" uppercase={false} onPress={action} compact labelStyle={{ ...style("m-0") }} btnStyles={{ ...style("p-0") }}>
      {text}
    </Button>
  );
};

const circleConfig = {
  transform: [
    {
      scale: {
        inputRange: [-2, -1, 0, 1, 2],
        outputRange: [0.5, 0.5, 0.8, 0.5, 0.5],
      },
    },
  ],
};

const Circle = ({ i, onPress }) => {
  const [activeIndex] = usePager();
  const color = activeIndex === i ? "#6C63FF" : "#707070";
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(i)} style={styles.touchableCircleStyle}>
      <View
        style={{
          ...styles.circle,
          backgroundColor: color,
        }}
      />
    </TouchableOpacity>
  );
};

const Circles = ({ children, onChange, goToLogin }) => {
  const [activeIndex] = usePager();
  const { width } = Dimensions.get("window");

  return (
    <View style={{ ...style("flex-row items-center space-between  w-full") }}>
      <View style={{ ...style("w-1/3") }}>{children.length - 1 !== activeIndex && <NavButton text="Skip" action={goToLogin} />}</View>

      <View style={{ ...style("w-1/3") }}>
        <Pagination pageInterpolation={circleConfig} style={styles.circlesContainer}>
          {React.Children.map(children, (_, i) => (
            <Circle i={i} onPress={onChange} />
          ))}
        </Pagination>
      </View>

      <View style={{ ...style("w-1/3") }}>
        {children.length - 1 !== activeIndex && <NavButton text="Next" action={() => onChange(activeIndex + 1)} />}
      </View>
    </View>
  );
};

const pages = [
  {
    titleText: "Welcome",
    subtitleText: "Your number 1 payment processing app",
    imageComponent: GetStartedImage,
  },
  {
    titleText: "Secure, easy payments",
    subtitleText: "We offer safe, secure and fast payments/transactions",
    imageComponent: VerificationImage,
  },
  {
    titleText: "Instant Notifications",
    subtitleText: "Instant Notifications",
    imageComponent: NotificationImage,
    btnText: "Login",
  },
];

const children = pages.map(({ titleText, subtitleText, imageComponent, btnText, action }, index) => (
  <OnboardingWelcome
    key={index}
    titleText={titleText}
    subtitleText={subtitleText}
    imageComponent={imageComponent}
    btnText={btnText}
    action={action}
  />
));

const OnboardingSlidesPager = ({ goToLogin }) => {
  const [_, onChange] = usePager();

  return (
    <View style={{ flex: 1 }}>
      <Pager
        panProps={{
          enabled: true,
        }}
      >
        {React.Children.map(children, (child) => React.cloneElement(child, { action: goToLogin }))}
      </Pager>
      <Circles onChange={onChange} goToLogin={goToLogin}>
        {children}
      </Circles>
    </View>
  );
};

const OnboardingSlides = ({ goToLogin }) => {
  const [activeIndex, onChange] = useState(0);

  return (
    <PagerProvider activeIndex={activeIndex} onChange={onChange}>
      <OnboardingSlidesPager goToLogin={goToLogin} />
    </PagerProvider>
  );
};
export default OnboardingSlides;

const styles = StyleSheet.create({
  circlesContainer: {
    height: 39,
    width: 100,
    alignItems: "center",
    alignSelf: "center",
  },

  touchableCircleStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#707070",
  },
  textSlideContainer: {
    flex: 1,
  },
});
