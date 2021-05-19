import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";
import Toast from "react-native-toast-message";

export const uploadImageAsync = async (uri) => {
  try {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662

    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.log(error);
  }
};

export const manipulateImage = async (uri) => {
  try {
    const manipResult = await ImageManipulator.manipulateAsync(
      uri,
      [
        {
          resize: {
            width: 1000,
          },
        },
      ],
      { compress: 0.1, format: ImageManipulator.SaveFormat.JPEG, base64: true }
    );

    return manipResult;
  } catch (error) {
    console.log(error);
  }
};

export const pickImage = async (closeModal = () => {}, funcToRun = () => {}) => {
  try {
    if (Platform.OS !== "web") {
      try {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          return Toast.show({
            type: "error",
            text1: "Sorry, we need camera roll permissions",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    closeModal(); // func to close modal after

    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      try {
        const manipResult = await ImageManipulator.manipulateAsync(
          result.uri,
          [
            {
              resize: {
                width: 1000,
              },
            },
          ],
          { compress: 0.1, format: ImageManipulator.SaveFormat.JPEG, base64: true }
        );

        // const blob = await uploadImageAsync(manipResult.uri);
        // return funcToRun(blob);
        let imageUri = `data:image/jpg;base64,${manipResult.base64}`;
        return funcToRun(imageUri);
        // return funcToRun(manipResult.uri);
      } catch (error) {
        console.log(error);
      }
    }

    return null;
  } catch (error) {
    console.log(error);
  }
};

export const openCamera = async (closeModal = () => {}, funcToRun = () => {}) => {
  try {
    if (Platform.OS !== "web") {
      try {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          return Toast.show({
            type: "error",
            text1: "Sorry, we need camera permissions",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    closeModal(); // func to close modal after

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      return funcToRun(result.uri);
    }

    return null;
  } catch (error) {
    console.log(error);
  }
};
