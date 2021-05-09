import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthCheck, StorageImage, useFirestoreDocData, useUser, useAuth, useFirestore } from "reactfire";
import { useFetchUserDetails } from "../hooks";

const HomeScreen = () => {
  const auth = useAuth();
  const { data: user } = useUser();
  const { userDetails, error, status } = useFetchUserDetails(user?.uid);
  return (
    <View>
      <Text>WELCOME TO THE HOME SCREEN</Text>
      <Text>{userDetails?.userID}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
