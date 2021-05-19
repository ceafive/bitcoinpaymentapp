import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthCheck, StorageImage, useAuth, useFirestore, useFirestoreDocData, useUser } from "reactfire";

import { useFetchUserDetails } from "../hooks";

const HomeScreen = () => {
  const auth = useAuth();
  const { data: user } = useUser();

  return (
    <View>
      <Text>WELCOME TO THE HOME SCREEN</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
