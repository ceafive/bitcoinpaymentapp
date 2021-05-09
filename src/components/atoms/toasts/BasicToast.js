import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BasicToast = () => {
  return <Toast ref={(ref) => Toast.setRef(ref)} />;
};

export default BasicToast;

const styles = StyleSheet.create({});
