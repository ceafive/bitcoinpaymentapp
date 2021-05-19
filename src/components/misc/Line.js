import React from "react";
import { Divider } from "react-native-paper";

import { style } from "../../../styles";

const Line = ({ styles, ...props }) => {
  return <Divider style={{ ...style("w-full bg-gray-300"), height: 1, ...styles }} {...props} />;
};

export default Line;
