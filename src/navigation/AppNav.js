import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useColorScheme } from "react-native-appearance";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AppDarkTheme, AppLightTheme } from "../constants/theme";

import AuthNav from "./AuthNav";
import MainNav from "./MainNav";

const Stack = createStackNavigator();

const AppNav = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      initialRouteName="Auth"
      //   theme={scheme === "dark" ? AppLightTheme : AppLightTheme}
    >
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Auth" component={AuthNav} />
        <Stack.Screen name="Main" component={MainNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;

const styles = StyleSheet.create({});
