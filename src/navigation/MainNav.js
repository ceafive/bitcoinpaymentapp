import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthCheck, StorageImage, useFirestoreDocData, useUser, useAuth, useFirestore } from "reactfire";
import { style } from "../constants/styles";
import Toast from "react-native-toast-message";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, AccountScreen } from "../screens";
import { useFetchUserDetails } from "../hooks";

const Tab = createBottomTabNavigator();

const MainNav = () => {
  const { data: user } = useUser();

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
        activeTintColor: "green",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
