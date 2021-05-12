import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountItemsScreen from "../screens/AccountItemsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { fonts } from "../constants/fonts";

const Stack = createStackNavigator();

const AccountScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          fontFamily: fonts.Lato_Regular,
        },
        headerBackTitleVisible: false,
      })}
    >
      <Stack.Screen name="Account" component={AccountItemsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
    </Stack.Navigator>
  );
};

export default AccountScreen;
