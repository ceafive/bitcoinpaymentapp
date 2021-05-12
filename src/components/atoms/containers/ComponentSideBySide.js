import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { style } from "../../../../styles";

/**
 * @param type 'row' | 'col'
 * @param wrapperStyles object styles to apply to outer View wrapper
 */

const ComponentSideBySide = ({ type = "row", wrapperStyles, children, ...props }) => {
  return (
    <View style={{ ...style(`${type === "row" ? "flex-row" : "flex-col"}`), ...wrapperStyles }} {...props}>
      {children}
    </View>
  );
};

export default ComponentSideBySide;

const styles = StyleSheet.create({});
