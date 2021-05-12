import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import { AppearanceProvider } from "react-native-appearance";
import { isFontLoaded } from "./src/constants/fonts";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./src/config/firebaseconfig";
import Toast from "react-native-toast-message";
import AppNav from "./src/navigation/AppNav";
import { SuspenseWithPerf } from "./src/components/helpers";
import AppContext from "./src/context";

import "firebase/firestore";

// Ignore log notification by message:
LogBox.ignoreLogs([
  "Native splash screen is already hidden",
  "TypeError: undefined is not an object (evaluating 'this._warmupSubscription')",
]);

const LoadApp = ({ children }) => {
  return isFontLoaded() ? children : <AppLoading autoHideSplash={true} />;
};

export default function App() {
  return (
    <>
      <Toast topOffset={Constants.statusBarHeight} style={{ zIndex: 9999999 }} ref={(ref) => Toast.setRef(ref)} />
      <SafeAreaView style={styles.container}>
        <AppearanceProvider>
          <AppContext>
            <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={false}>
              <SuspenseWithPerf>
                <LoadApp>
                  <AppNav />
                </LoadApp>
              </SuspenseWithPerf>
            </FirebaseAppProvider>
            <StatusBar style="auto" />
          </AppContext>
        </AppearanceProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
