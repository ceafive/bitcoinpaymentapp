import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Typography from "../atoms/typography/Typography";
import CryptoInfoCard from "../molecules/cards/CryptoInfoCard";

const HomeCryptoInfoCard = ({ currency, coinMarketCapData }) => {
  //   console.log({ here: coinMarketCapData });
  return (
    <>
      {coinMarketCapData?.map((marketCapData) => {
        return <CryptoInfoCard key={marketCapData.name} currency={currency} marketCapData={marketCapData} />;
      })}
    </>
  );
};

export default HomeCryptoInfoCard;

const styles = StyleSheet.create({});
