import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/atoms/buttons/Button";
import { AuthCheck, StorageImage, useFirestoreDocData, useUser, useAuth, useFirestore } from "reactfire";
import { useFetchUserDetails } from "../hooks";
import Scroller from "../components/atoms/containers/Scroller";
import ProfileScreenHeader from "../components/organisms/AccountScreenHeader";
import { style } from "../../styles";
import ProfileScreenItems from "../components/organisms/AccountScreenList";
import EditProfile from "../components/organisms/EditProfile";
import { EditProfileSchema } from "../schemas/FormikValidationSchema";
import Toast from "react-native-toast-message";
import { Date } from "globalthis/implementation";

import subYears from "date-fns/subYears";

const ProfileScreen = ({ navigation, route }) => {
  const auth = useAuth();
  const { data: user } = useUser();
  const firestore = useFirestore();
  const firestoreStatics = useFirestore;
  const { userDetails, error, status } = useFetchUserDetails(user?.uid);
  const [loginError, setLoginError] = React.useState(null);

  const fromDate = firestoreStatics.Timestamp.fromDate;

  const saveProfile = async (values, { setSubmitting }) => {
    // console.log(values);
    // return;
    try {
      await firestore
        .collection("users")
        .doc(user?.uid)
        .update({
          ...values,
          dateOfBirth: fromDate(values.dateOfBirth),
        });
      Toast.show({
        type: "success",
        text1: "Profile Saved!",
        visibilityTime: 500,
      });
      navigation.goBack();
      setSubmitting(false);
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      Toast.show({
        type: "success",
        text1: errorMessage,
      });
      setSubmitting(false);
    }
  };

  return (
    <Scroller wrapperStyles={style("px-4")}>
      <EditProfile
        initialValues={{
          firstName: userDetails?.firstName || "",
          lastName: userDetails?.lastName || "",
          dateOfBirth: userDetails?.dateOfBirth ? userDetails?.dateOfBirth?.toDate() : subYears(new Date(), 50),
          gender: userDetails?.gender || "Male",
        }}
        validationSchema={EditProfileSchema}
        showBtn={true}
        btnText="Save Profile"
        btnStyles={{ marginTop: 10, paddingVertical: 10, borderRadius: 10 }}
        onPressSubmit={(values, actions) => saveProfile(values, actions)}
      />
    </Scroller>
  );
};

export default ProfileScreen;
