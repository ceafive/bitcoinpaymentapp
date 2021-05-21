import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

import { style } from "../../../../styles";
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
        // backgroundColor: "#ACCEFF",
        shadowColor: "#ACCEFF",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
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
              text={`${currency === "USD" ? "$" : "₵"}${Number.parseFloat(marketCapData?.quote?.USD?.price).toFixed(2)}`}
              textStyles={{ fontFamily: fonts.Lato_Bold }}
            />
          </ComponentSideBySide>
          {Math.sign(marketCapData?.quote?.USD?.percent_change_24h) < 0 ? (
            <ComponentSideBySide wrapperStyles={{ ...style("items-center") }}>
              <IconButton icon="menu-down" color={"red"} size={30} />
              <Typography
                text={`${Number.parseFloat(marketCapData?.quote?.USD?.percent_change_24h).toFixed(0)}%`}
                textStyles={{ fontFamily: fonts.Lato_Bold }}
              />
            </ComponentSideBySide>
          ) : (
            <ComponentSideBySide wrapperStyles={{ ...style("items-center") }}>
              <IconButton icon="menu-up" color={"green"} size={30} onPress={() => console.log("Pressed")} />
              <Typography
                text={`${Number.parseFloat(marketCapData?.quote?.USD?.percent_change_24h).toFixed(0)}%`}
                textStyles={{ fontFamily: fonts.Lato_Bold }}
              />
            </ComponentSideBySide>
          )}
        </ComponentSideBySide>
      </ComponentSideBySide>
    </Card>
  );
};

export default CryptoInfoCard;
