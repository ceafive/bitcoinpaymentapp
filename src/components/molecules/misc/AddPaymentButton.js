import React from "react";
import { IconButton, useTheme } from "react-native-paper";

import { style, textSizes } from "../../../constants/styles";
import Button from "../../atoms/buttons/Button";
import ComponentSideBySide from "../../atoms/containers/ComponentSideBySide";
import Text, { types } from "../../atoms/typography/Text";
import Typography from "../../atoms/typography/Typography";

const AddPaymentButton = ({ text, onPress }) => {
  const theme = useTheme();
  return (
    <ComponentSideBySide wrapperStyles={style("items-center justify-between")}>
      <Typography textStyles={{ color: "#BEBEC0", ...textSizes["SMALL"] }}>{text}</Typography>
      <IconButton icon="plus" color={theme.colors.primary} size={20} onPress={onPress} />
      {/* <Button
        onPress={onPress}
        mode="text"
        compact
        style={{ ...style("items-center justify-center w-10 h-10"), backgroundColor: "orange", borderRadius: 99999999999 }}
      >
        <Text type={types.Lato_Black} textStyles={{ color: "white", ...textSizes["REGULAR"] }}>
          +
        </Text>
      </Button> */}

      {/* <Button mode="text" uppercase={false} color="#BEBEC0" compact btnStyles={{ ...textSizes["4XLARGE"] }} onPress={onPress}>
          + Add
        </Button> */}
    </ComponentSideBySide>
  );
};

export default AddPaymentButton;
