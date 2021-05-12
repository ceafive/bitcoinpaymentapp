import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/atoms/buttons/Button";
import { AuthCheck, StorageImage, useFirestoreDocData, useUser, useAuth, useFirestore } from "reactfire";
import { useFetchUserDetails } from "../hooks";
import Scroller from "../components/atoms/containers/Scroller";
import AccountScreenHeader from "../components/organisms/AccountScreenHeader";
import { style } from "../../styles";
import AccountScreenList from "../components/organisms/AccountScreenList";

const AccountItemsScreen = ({ navigation, route }) => {
  const auth = useAuth();
  const { data: user } = useUser();
  const { userDetails, error, status } = useFetchUserDetails(user?.uid);

  const logout = () => {
    try {
      auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const onPressGoToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <Scroller wrapperStyles={style("px-4")}>
      <AccountScreenHeader name={userDetails?.firstName || "Castro Eyram Agbo"} logout={logout} />
      <AccountScreenList onPressGoToProfile={onPressGoToProfile} />
    </Scroller>
  );
};

export default AccountItemsScreen;
