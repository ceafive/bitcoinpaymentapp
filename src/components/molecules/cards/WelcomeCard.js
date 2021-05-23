import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

import { style } from "../../../../styles";
import { fonts } from "../../../constants/fonts";
import { textSizes } from "../../../constants/styles";
import ComponentSideBySide from "../../atoms/containers/ComponentSideBySide";
import Typography, { types } from "../../atoms/typography/Typography";

const WelcomeCard = ({ userDetails }) => {
  return (
    <ComponentSideBySide wrapperStyles={{ ...style("items-center justify-between mb-10 px-2") }}>
      <ComponentSideBySide type="col">
        <Typography textStyles={{ ...style("text-gray-400") }}>Welcome</Typography>
        <Typography type={types.Title} textStyles={{ fontFamily: fonts.Lato_Black, ...textSizes["2XLARGE"] }}>
          {userDetails?.firstName || "New"} {userDetails?.lastName || "User"}
        </Typography>
      </ComponentSideBySide>
      <Avatar.Image
        size={40}
        source={{ uri: userDetails?.avatar }}
        onPress={() => {
          console.log("hello");
        }}
      />
    </ComponentSideBySide>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({});
