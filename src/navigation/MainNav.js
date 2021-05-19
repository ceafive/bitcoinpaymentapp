/* eslint-disable react/display-name */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import Toast from "react-native-toast-message";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthCheck, StorageImage, useAuth, useFirestore, useFirestoreDocData, useUser } from "reactfire";

import { style } from "../constants/styles";
import { useFetchUserDetails } from "../hooks";
import { AccountScreen, HomeScreen } from "../screens";
import ExtraNav from "./ExtraNav";

const Tab = createBottomTabNavigator();

const MainNav = () => {
  const { data: user } = useUser();
  const theme = useTheme();

  // React.useEffect(() => {
  //   Toast.show({
  //     type: "success",
  //     text1: `Login successful!😀`,
  //   });
  // }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "ios-list" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={ExtraNav} />
    </Tab.Navigator>
  );
};

export default MainNav;
