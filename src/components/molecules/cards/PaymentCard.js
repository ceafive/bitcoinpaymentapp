import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

import { style } from "../../../../styles";
import { fonts } from "../../../constants/fonts";
import ComponentSideBySide from "../../atoms/containers/ComponentSideBySide";
import Typography, { types } from "../../atoms/typography/Typography";

const PaymentCard = ({ payment, paymentType, cardData, fieldName, startIndex, endIndex }) => {
  const paymentNumber = payment[`${paymentType}Number`];
  const paymentNumberLength = paymentNumber?.length;
  const extract = paymentNumber?.substring(startIndex, paymentNumberLength - endIndex);
  const astericks = new Array(extract?.length + 1).join("*");
  const newNumber = paymentNumber.replace(extract, astericks);

  return (
    <ComponentSideBySide
      key={payment?.docID}
      wrapperStyles={{ borderRadius: 15, marginVertical: 10, backgroundColor: "#F3F5F9", padding: 15 }}
    >
      <Avatar.Image
        style={{ marginRight: 10 }}
        size={50}
        source={{
          uri: cardData[payment[fieldName]].uri,
        }}
      />
      <ComponentSideBySide type="col" wrapperStyles={style()}>
        <Typography type={types.Subheading} textStyles={{ fontFamily: fonts.Lato_Black }}>
          {cardData[payment[fieldName]].name}
        </Typography>
        <Typography textStyles={{ color: "#B7C6D1" }}>{newNumber}</Typography>
      </ComponentSideBySide>
    </ComponentSideBySide>
  );
};

export default PaymentCard;
