import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import { AppearanceProvider } from "react-native-appearance";
import { isFontLoaded } from "./src/constants/fonts";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./src/config/firebaseconfig";

import AppNav from "./src/navigation/AppNav";
import { SuspenseWithPerf } from "./src/components/helpers";
import ThemeContext from "./src/context/ThemeContext";

// Ignore log notification by message:
LogBox.ignoreLogs(["TypeError: undefined is not an object (evaluating 'this._warmupSubscription')"]);

const LoadApp = ({ children }) => {
  return isFontLoaded() ? children : <AppLoading autoHideSplash={true} />;
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppearanceProvider>
        <ThemeContext>
          <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={false}>
            <SuspenseWithPerf>
              <LoadApp>
                <AppNav />
              </LoadApp>
            </SuspenseWithPerf>
          </FirebaseAppProvider>
          {/* <StatusBar style="auto" /> */}
        </ThemeContext>
      </AppearanceProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
  },
});
