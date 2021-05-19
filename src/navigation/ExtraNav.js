import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { fonts } from "../constants/fonts";
import AccountScreen from "../screens/AccountScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const ExtraNav = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          fontFamily: fonts.Lato_Regular,
        },
        headerBackTitleVisible: false,
      })}
    >
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
    </Stack.Navigator>
  );
};

export default ExtraNav;
