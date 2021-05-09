import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/atoms/buttons/Button";
import { AuthCheck, StorageImage, useFirestoreDocData, useUser, useAuth, useFirestore } from "reactfire";
import { useFetchUserDetails } from "../hooks";

const ProfileScreen = () => {
  const auth = useAuth();
  const { data: user } = useUser();
  const { userDetails, error, status } = useFetchUserDetails(user?.uid);

  return (
    <View>
      <Text>WELCOME TO THE PROFILE SCREEN</Text>
      <Button
        onPress={() => {
          try {
            auth.signOut();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        Logout
      </Button>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
