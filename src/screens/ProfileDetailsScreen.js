import subYears from "date-fns/subYears";
import { Date, JSON } from "globalthis/implementation";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { AuthCheck, StorageImage, useAuth, useFirebaseApp, useFirestore, useFirestoreDocData, useStorage, useUser } from "reactfire";

import { style } from "../../styles";
import Scroller from "../components/atoms/containers/Scroller";
import ProfileDetails from "../components/organisms/ProfileDetails";
import { useFetchUserDetails } from "../hooks";

const ProfileDetailsScreen = ({ navigation, route }) => {
  const { data: user } = useUser();
  const { userDetails } = useFetchUserDetails(user?.uid);

  const onPressGoToPaymentMethods = () => {
    navigation.navigate("PaymentMethods");
  };

  const onPressGoToEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const actions = {
    onPressGoToPaymentMethods,
    onPressGoToEditProfile,
  };

  return (
    <Scroller wrapperStyles={style("px-4")}>
      <ProfileDetails user={{ ...userDetails, avatar: userDetails?.avatar || null }} {...actions} />
    </Scroller>
  );
};

export default ProfileDetailsScreen;
