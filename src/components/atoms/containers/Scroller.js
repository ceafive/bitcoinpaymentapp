import React from "react";

import { ScrollView } from "react-native-gesture-handler";

import { style } from "../../../constants/styles";

const Scroller = ({ wrapperStyles, children, ...props }) => {
  return (
    <ScrollView style={[style("flex-1 px-5"), { ...wrapperStyles }]} {...props}>
      {children}
    </ScrollView>
  );
};

export default Scroller;
