import React from "react";
import { Platform, View } from "react-native";
import { IconButton, RadioButton, TextInput as RNPTextInput, useTheme } from "react-native-paper";
import { Picker } from "react-native-woodpicker";

import { style } from "../../../../styles";
import { fonts } from "../../../constants/fonts";
import { bankCardTypes } from "../../../utils/items";
import Scroller from "../../atoms/containers/Scroller";
import Typography from "../../atoms/typography/Typography";
import InputWithLabel from "../inputs/InputWithLabel";
import PhoneInputIntl from "../inputs/PhoneInput";

const AddCardPaymentForm = ({ ...props }) => {
  const theme = useTheme();

  return (
    <Scroller avoidKeyboard behavior={Platform.OS === "ios" ? "padding" : "height"} style={{}}>
      <InputWithLabel
        label="Full Name"
        fieldName="fullName"
        left={<RNPTextInput.Icon color="gray" icon={"account-outline"} size={20} />}
        {...props}
      />
      <InputWithLabel
        label="Card Number"
        fieldName="cardNumber"
        placeholder="445565656667656"
        left={<RNPTextInput.Icon color="gray" icon={"credit-card-outline"} size={20} />}
        {...props}
      />

      {/* <Typography textStyles={{ marginTop: 10 }}>Card Type</Typography> */}
      <Picker
        onItemChange={(data) => {
          props.setFieldValue("type", data);
          console.log(data);
        }}
        items={bankCardTypes}
        placeholder="Card Type"
        item={props.values["type"]}
        style={{ marginVertical: 10, paddingVertical: 20, borderRadius: 10, backgroundColor: "orange" }}
        placeholderStyle={{ textAlign: "center", color: "white", fontFamily: fonts.Lato_Bold }}
        // isNullable
      />
      <InputWithLabel
        label="Expiry Date"
        fieldName="expiryDate"
        placeholder="MM/YY"
        left={<RNPTextInput.Icon color="gray" icon={"calendar-outline"} size={20} />}
        {...props}
      />
      <InputWithLabel label="CVV" fieldName="cvv" left={<RNPTextInput.Icon color="gray" icon={"barcode"} size={20} />} {...props} />
    </Scroller>
  );
};

export default AddCardPaymentForm;
