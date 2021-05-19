import React from "react";

import { style } from "../../../../styles";
import ComponentSideBySide from "../../atoms/containers/ComponentSideBySide";
import Typography, { types } from "../../atoms/typography/Typography";

const ListWithIcon = ({ iconLeft, iconRight, itemName, ...props }) => {
  return (
    <ComponentSideBySide wrapperStyles={{ ...style("items-center justify-between") }} {...props}>
      <ComponentSideBySide wrapperStyles={{ ...style("items-center") }}>
        {iconLeft && iconLeft}
        {/* <IconButton icon={icon} color={"black"} size={20} /> */}
        <Typography type={types.Subheading}>{itemName}</Typography>
      </ComponentSideBySide>
      {iconRight && iconRight}
      {/* <IconButton icon="chevron-right" color="lightgray" size={20} onPress={action} /> */}
    </ComponentSideBySide>
  );
};

export default ListWithIcon;
