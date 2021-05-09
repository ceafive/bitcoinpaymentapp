import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNav from "./AuthNav";
import MainNav from "./MainNav";
import { ThemeContext } from "../context";
import { Provider as PaperProvider } from "react-native-paper";
import { useUser } from "reactfire";
import Constants from "expo-constants";

const Stack = createStackNavigator();

const AppNav = () => {
  const { data: user } = useUser();
  const { theme } = React.useContext(ThemeContext);

  return (
    <NavigationContainer initialRouteName="Auth" theme={theme}>
      <PaperProvider theme={theme}>
        <Stack.Navigator headerMode="none">
          {/* <Stack.Screen name="Auth" component={AuthNav} /> */}
          {!user && <Stack.Screen name="Auth" component={AuthNav} />}
          {user && <Stack.Screen name="Main" component={MainNav} />}
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default AppNav;

const styles = StyleSheet.create({});
