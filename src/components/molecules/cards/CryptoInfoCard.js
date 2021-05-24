import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

import { style, styles } from "../../../../styles";
import { fonts } from "../../../constants/fonts";
import { crypoCoinsData } from "../../../utils/items";
import ComponentSideBySide from "../../atoms/containers/ComponentSideBySide";
import Typography, { types } from "../../atoms/typography/Typography";

const CryptoInfoCard = ({ currency = "USD", marketCapData }) => {
  return (
    <Card
      style={{
        ...style("m-1"),
        height: 150,
        width: 250,
        borderRadius: 30,
        // shadowColor: "#0000001C",
        // shadowOffset: {
        //   width: 3,
        //   height: 3,
        // },
        // shadowRadius: 25,
        // shadowOpacity: 1,
        // elevation: 3,
        // backgroundColor: "#fff",
      }}
    >
      <ComponentSideBySide type="col" wrapperStyles={{ ...style("h-full justify-between p-4 overflow-hidden") }}>
        <ComponentSideBySide wrapperStyles={{ ...style("items-center") }}>
          <Avatar.Image
            style={{ marginRight: 5 }}
            size={35}
            source={{
              uri: crypoCoinsData[marketCapData.symbol].uri,
            }}
          />
          <Typography type={types.Headline} text={`${marketCapData.symbol}/${currency}`} textStyles={{ fontFamily: fonts.Lato_Black }} />
        </ComponentSideBySide>

        <ComponentSideBySide wrapperStyles={{ ...style("items-end justify-between") }}>
          <ComponentSideBySide type="col">
            <Typography text="Current Price" />
            <Typography
              type={types.Headline}
              text={`${currency === "USD" ? "$" : "₵"}${Number(
                Number.parseFloat(marketCapData?.quote?.USD?.price).toFixed(2)
              ).toLocaleString()}`}
              textStyles={{ fontFamily: fonts.Lato_Bold }}
            />
          </ComponentSideBySide>

          <ComponentSideBySide wrapperStyles={{ ...style("items-center") }}>
            <IconButton
              icon={`menu-${Math.sign(marketCapData?.quote?.USD?.percent_change_24h) < 0 ? "down" : "up"}`}
              color={Math.sign(marketCapData?.quote?.USD?.percent_change_24h) < 0 ? "red" : "green"}
              size={30}
              style={{ width: 30, height: 30, margin: 0 }}
            />
            <Typography
              text={`${Number.parseFloat(marketCapData?.quote?.USD?.percent_change_24h).toFixed(0)}%`}
              textStyles={{ fontFamily: fonts.Lato_Black, ...style("tracking-widest") }}
            />
          </ComponentSideBySide>
        </ComponentSideBySide>
      </ComponentSideBySide>
    </Card>
  );
};

export default CryptoInfoCard;
