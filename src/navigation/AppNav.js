import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { useUser } from "reactfire";

import { ThemeContext } from "../context";
import AuthNav from "./AuthNav";
import MainNav from "./MainNav";

const Stack = createStackNavigator();

const AppNav = () => {
  const { data: user } = useUser();
  const { theme } = React.useContext(ThemeContext);

  return (
    <NavigationContainer initialRouteName="Auth" theme={theme}>
      <PaperProvider theme={theme}>
        <BottomSheetModalProvider>
          <Stack.Navigator headerMode="none">
            {/* <Stack.Screen name="Auth" component={AuthNav} /> */}
            {!user && <Stack.Screen name="Auth" component={AuthNav} />}
            {user && <Stack.Screen name="Main" component={MainNav} />}
          </Stack.Navigator>
        </BottomSheetModalProvider>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default AppNav;

const styles = StyleSheet.create({});
