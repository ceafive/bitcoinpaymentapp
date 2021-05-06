import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import { AppearanceProvider } from "react-native-appearance";
import { isFontLoaded } from "./src/constants/fonts";

import AppNav from "./src/navigation/AppNav";

const LoadApp = ({ children }) => {
  const fontsLoaded = isFontLoaded();

  return fontsLoaded ? children : <AppLoading />;
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoadApp>
        <AppearanceProvider>
          <AppNav />
        </AppearanceProvider>
        {/* <StatusBar style="auto" /> */}
      </LoadApp>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
  },
});
