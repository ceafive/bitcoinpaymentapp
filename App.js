import "firebase/firestore";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AppearanceProvider } from "react-native-appearance";
import Toast from "react-native-toast-message";
import { FirebaseAppProvider } from "reactfire";

import { SuspenseWithPerf } from "./src/components/helpers";
import { app } from "./src/config/firebase";
import { firebaseConfig } from "./src/config/firebaseconfig";
import { isFontLoaded } from "./src/constants/fonts";
import AppContext from "./src/context";
import AppNav from "./src/navigation/AppNav";

// Ignore log notification by message:
LogBox.ignoreLogs([
  "Native splash screen is already hidden",
  "TypeError: undefined is not an object (evaluating 'this._warmupSubscription')",
  "Setting a timer",
  "interpolate",
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
            <FirebaseAppProvider firebaseConfig={firebaseConfig} firebaseApp={app} suspense>
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
