import { formatDistance, subDays } from "date-fns";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ToggleButton } from "react-native-paper";

import { style } from "../../../styles";
import { fonts } from "../../constants/fonts";
import { textSizes } from "../../constants/styles";
import ComponentSideBySide from "../atoms/containers/ComponentSideBySide";
import Scroller from "../atoms/containers/Scroller";
import Typography from "../atoms/typography/Typography";
import CryptoInfoCard from "../molecules/cards/CryptoInfoCard";

const HomeCryptoInfoCard = ({ currency, coinMarketCapData, onButtonToggle }) => {
  //   console.log({ here: coinMarketCapData });
  return (
    <>
      <ComponentSideBySide wrapperStyles={{ ...style("justify-end items-center mb-2") }}>
        {/* <Typography
          text={`Updated ${formatDistance(new Date(coinMarketCapData?.status?.timestamp || null), new Date(), { addSuffix: true })}`}
        /> */}
        <ToggleButton.Row onValueChange={(value) => onButtonToggle(value)} value={currency} style={{ borderRadius: 25 }}>
          <ToggleButton icon="currency-usd" value="USD" />
          <ToggleButton
            style={style(`${currency === "USD" ? "bg-white" : "bg-gray-200"} flex-col items-center justify-center`)}
            icon={() => (
              <Typography
                text="₵"
                style={{
                  ...style(`${currency === "USD" ? "bg-white" : "bg-gray-200"} flex-col items-center justify-center`),
                  fontFamily: fonts.Lato_Regular,
                  ...textSizes["XLARGE"],
                }}
              />
            )}
            value="GHS"
          />
        </ToggleButton.Row>
      </ComponentSideBySide>
      <Scroller wrapperStyles={{ ...style("flex-0") }} horizontal showsHorizontalScrollIndicator={false}>
        {coinMarketCapData?.latest?.map((marketCapData) => {
          return <CryptoInfoCard key={marketCapData.name} currency={currency} marketCapData={marketCapData} />;
        })}
      </Scroller>
    </>
  );
};

export default HomeCryptoInfoCard;

const styles = StyleSheet.create({});
