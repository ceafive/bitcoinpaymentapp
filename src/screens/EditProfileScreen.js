import subYears from "date-fns/subYears";
import { Date, JSON } from "globalthis/implementation";
import React from "react";
import Toast from "react-native-toast-message";
import { AuthCheck, StorageImage, useAuth, useFirebaseApp, useFirestore, useFirestoreDocData, useStorage, useUser } from "reactfire";

import { style } from "../../styles";
import Scroller from "../components/atoms/containers/Scroller";
import EditProfile from "../components/organisms/EditProfile";
import { saveProfile } from "../functions";
import { useFetchUserDetails } from "../hooks";
import { EditProfileSchema } from "../schemas/FormikValidationSchema";

const EditProfileScreen = ({ navigation, route }) => {
  const auth = useAuth();
  const { data: user } = useUser();
  const firestore = useFirestore();
  const firebase = useFirebaseApp();
  const storage = useStorage();
  const firestoreStatics = useFirestore;

  const { userDetails, error, status } = useFetchUserDetails(user?.uid);

  // Statics
  const fromDate = firestoreStatics.Timestamp.fromDate;

  const onPressGoToProfileDetails = () => {
    navigation.navigate("ProfileDetails");
  };

  return (
    <Scroller wrapperStyles={style("px-4")}>
      <EditProfile
        initialValues={{
          firstName: userDetails?.firstName || "",
          lastName: userDetails?.lastName || "",
          dateOfBirth: userDetails?.dateOfBirth ? userDetails?.dateOfBirth?.toDate() : subYears(new Date(), 50),
          gender: userDetails?.gender || "Male",
          email: userDetails?.email || null,
          phoneNumber: userDetails?.phoneNumber || null,
          avatar: userDetails?.avatar || null,
        }}
        validationSchema={EditProfileSchema}
        showBtn={true}
        btnText="Save Profile"
        btnDisabled={false}
        btnStyles={{ marginTop: 10, paddingVertical: 10, borderRadius: 10 }}
        onPressGoToProfileDetails={onPressGoToProfileDetails}
        onPressSubmit={(values, actions) =>
          saveProfile(user, { firestore, storage }, values, actions, { fromDate, onPressGoToProfileDetails })
        }
      />
    </Scroller>
  );
};

export default EditProfileScreen;
