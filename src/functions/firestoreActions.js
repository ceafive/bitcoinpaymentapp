import Toast from "react-native-toast-message";

import { uploadImageAsync } from "./imageUploadFns";

export const saveProfile = async (user, { firestore, storage }, values, { setSubmitting }, { fromDate, onPressGoToProfileDetails }) => {
  try {
    const { avatar } = values;
    let avatarURL = avatar;

    // const metadata = {
    //   contentType: "image/jpeg",
    // };

    // const isFirebaseURL = avatar.includes("firebasestorage.googleapis.com"); // check before upload to firebase storage

    // if (!isFirebaseURL) {
    //   const blob = await uploadImageAsync(avatar); // retrieve image from filesystem
    //   // Create a root reference
    //   var storageRef = storage.ref();
    //   var uploadTask = await storageRef.child(`users/${user?.uid}.jpg`).put(blob, metadata);
    //   blob.close();

    //   const downloadURL = await uploadTask.ref.getDownloadURL();
    //   avatarURL = downloadURL;
    // }

    await firestore
      .collection("users")
      .doc(user?.uid)
      .update({
        ...values,
        avatar: avatarURL,
        dateOfBirth: fromDate(values.dateOfBirth),
      });
    Toast.show({
      type: "success",
      text1: "Profile Saved!",
      visibilityTime: 500,
    });
    // navigation.goBack();
    setSubmitting(false);
    onPressGoToProfileDetails();
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
    Toast.show({
      type: "error",
      text1: errorMessage,
    });
    setSubmitting(false);
    onPressGoToProfileDetails();
  }
};
