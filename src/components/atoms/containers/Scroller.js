import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { style } from "../../../constants/styles";

const Scroller = ({}) => {
  return <ScrollView style={style("flex-1")}>{children}</ScrollView>;
};

export default Scroller;

const styles = StyleSheet.create({});
