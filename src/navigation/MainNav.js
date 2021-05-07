import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthCheck, StorageImage, useFirestoreDocData, useUser, useAuth, useFirestore } from "reactfire";
import { style } from "../constants/styles";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens";
import { useFetchUserDetails } from "../hooks";

const Tab = createBottomTabNavigator();

const ProfileScreen = () => {
  return (
    <View>
      <Text>WELCOME TO THE PROFILE SCREEN</Text>
    </View>
  );
};

const MainNav = () => {
  const { data: user } = useUser();

  const { userDetails, error, status } = useFetchUserDetails(user.uid);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
          } else if (route.name === "Profile") {
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
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
