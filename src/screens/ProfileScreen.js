import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { fonts } from "../constants/fonts";
import EditProfileScreen from "./EditProfileScreen";
import PaymentMethodsScreen from "./PaymentMethodsScreen";
import ProfileDetailsScreen from "./ProfileDetailsScreen";

const Stack = createStackNavigator();

const ProfileScreenNav = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          fontFamily: fonts.Lato_Regular,
        },
        headerBackTitleVisible: false,
        // headerShown: false,
      })}
    >
      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetailsScreen}
        options={({ route }) => ({
          title: "Profile Details",
        })}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={({ route }) => ({
          title: "Edit Profile",
        })}
      />
      <Stack.Screen
        name="PaymentMethodsScreen"
        component={PaymentMethodsScreen}
        options={({ route }) => ({
          title: "Payment Methods",
        })}
      />
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
    </Stack.Navigator>
  );
};

export default ProfileScreenNav;
