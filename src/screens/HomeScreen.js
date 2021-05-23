import { formatDistance, subDays } from "date-fns";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, ToggleButton } from "react-native-paper";
import { AuthCheck, StorageImage, useAuth, useFirestore, useFirestoreDocData, useUser } from "reactfire";

import { style } from "../../styles";
import ComponentSideBySide from "../components/atoms/containers/ComponentSideBySide";
import Scroller from "../components/atoms/containers/Scroller";
import Typography, { types } from "../components/atoms/typography/Typography";
import WelcomeCard from "../components/molecules/cards/WelcomeCard";
import HomeCryptoInfoCard from "../components/organisms/HomeCryptoInfoCard";
import { fonts } from "../constants/fonts";
import { textSizes } from "../constants/styles";
import { useFetchUserDetails } from "../hooks";

const HomeScreen = () => {
  const auth = useAuth();
  const { data: user } = useUser();
  const firestore = useFirestore();
  const firestoreStatics = useFirestore;

  const { userDetails, error, status } = useFetchUserDetails(user?.uid);

  const { data: coinData } = useFirestoreDocData(firestore.collection("utils").doc("coinMarketCapData"));
  const [coinMarketCapData, setCoinMarketCapData] = React.useState(coinData);
  const [currency, setCurrency] = React.useState("USD");

  const cedi = 5.78;
  const dollar = 1;

  const onButtonToggle = async (value) => {
    try {
      const { currconvData, query } = await convertCurreny(value === null ? currency : value);
      const currconvDataValue = currconvData[query];

      const currentCurrency = value === null ? currency : value;
      const backupValue = currentCurrency === "USD" ? dollar : cedi;

      const newData = coinData?.latest?.map((data) => {
        return {
          ...data,
          quote: {
            ...data.quote,
            USD: {
              ...data?.quote?.USD,
              price: data?.quote?.USD?.price * currconvDataValue || backupValue,
            },
          },
        };
      });

      setCoinMarketCapData({ ...coinData, latest: newData });
      setCurrency((curr) => {
        return value === null ? curr : value;
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        params: { start: "1", limit: "5", convert: "USD" },
        headers: {
          "content-type": "application/json",
          "accept-encoding": "gzip",
          "x-cmc_pro_api_key": "da42a979-be0d-47f2-ae3e-e8174b9bd43d",
        },
      };

      const res = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "accept-encoding": "gzip",
          "x-cmc_pro_api_key": "da42a979-be0d-47f2-ae3e-e8174b9bd43d",
        },
      });
      const data = await res.json();

      await firestore.collection("utils").doc("coinMarketCapData").set({ latest: data.data, status: data.status });
    } catch (error) {
      console.log(error);
    }
  };

  const convertCurreny = async (currency) => {
    const query = `USD_${currency}`;
    try {
      const res = await fetch(`https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=b3ccac842ed1e95d4e76`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "accept-encoding": "gzip",
        },
      });
      const currconvData = await res.json();
      return {
        currconvData,
        query,
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Scroller wrapperStyles={{ ...style("pb-5 px-2"), backgroundColor: "#fff" }}>
      <WelcomeCard userDetails={userDetails} />
      <HomeCryptoInfoCard currency={currency} coinMarketCapData={coinMarketCapData} onButtonToggle={onButtonToggle} />
      {/* <Button onPress={fetchData}>Fetch</Button> */}
    </Scroller>
  );
};

export default HomeScreen;
