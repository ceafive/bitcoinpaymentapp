import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";
import "firebase/functions";

import firebase from "firebase/app";

import { firebaseConfig } from "./firebaseconfig";

// if (!firebase.apps.length) {
let config = firebaseConfig;
export const app = firebase.initializeApp(config);
// }

// Auth exports
const auth = firebase.auth();

// database exports
export const firestore = firebase.firestore();
export const rtdb = firebase.database();

//function exports
export const functions = firebase.functions();

// eslint-disable-next-line no-restricted-globals
// eslint-disable-next-line no-undef

// for android emulator
// if (__DEV__) {
//   firestore.useEmulator("10.0.2.2", 8080);
//   rtdb.useEmulator("10.0.2.2", 9000);
//   auth.useEmulator("http://10.0.2.2:9099", { disableWarnings: true });
//   // auth.useEmulator("http://localhost:9099/", { disableWarnings: true });
//   functions.useEmulator("10.0.2.2", 5001);
// }

if (__DEV__) {
  firestore.useEmulator("localhost", 8080);
  rtdb.useEmulator("localhost", 9000);
  auth.useEmulator("http://localhost:9099", { disableWarnings: true });
  functions.useEmulator("localhost", 5001);
}
