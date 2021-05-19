import { saveProfile } from "./firestoreActions";
import { openCamera, pickImage, uploadImageAsync } from "./imageUploadFns";

export { pickImage, openCamera, uploadImageAsync, saveProfile };

export const showModal = (ref) => ref.current.present();
export const closeModal = (ref) => ref.current.dismiss();
