import React from "react";
import { Platform, View } from "react-native";
import { IconButton, TextInput as RNPTextInput } from "react-native-paper";
import { Picker } from "react-native-woodpicker";

import { style } from "../../../../styles";
import { fonts } from "../../../constants/fonts";
import { networkCodes } from "../../../utils/items";
import Scroller from "../../atoms/containers/Scroller";
import Text, { types } from "../../atoms/typography/Text";
import Typography from "../../atoms/typography/Typography";
import InputWithLabel from "../inputs/InputWithLabel";
import PhoneInputIntl from "../inputs/PhoneInput";

const AddMomoPaymentForm = ({ ...props }) => {
  return (
    <Scroller avoidKeyboard behavior={Platform.OS === "ios" ? "padding" : "height"} style={{}}>
      <InputWithLabel
        label="Full Name"
        fieldName="fullName"
        left={<RNPTextInput.Icon color="gray" icon={"account-outline"} size={20} />}
        {...props}
      />
      <InputWithLabel
        style={{ marginTop: 10 }}
        label="Mobile Money Number"
        fieldName="momoNumber"
        left={<RNPTextInput.Icon color="gray" icon={"phone-outline"} size={20} />}
        {...props}
      />
      <Picker
        onItemChange={(data) => {
          props.setFieldValue("networkCode", data);
        }}
        items={networkCodes}
        placeholder="Network Code"
        item={props.values["networkCode"]}
        style={{ marginTop: 10, paddingVertical: 20, borderRadius: 10, backgroundColor: "red" }}
        placeholderStyle={{ textAlign: "center", color: "white", fontFamily: fonts.Lato_Bold }}

        // isNullable
      />
      {props.errors["networkCode"] && <Text text={props.errors["networkCode"]} type={types.Lato_Light} textStyles={{ color: "red" }} />}
    </Scroller>
  );
};

export default AddMomoPaymentForm;
