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
const firestore = firebase.firestore();
const rtdb = firebase.database();

//function exports
const functions = firebase.functions();

// eslint-disable-next-line no-restricted-globals
// eslint-disable-next-line no-undef
if (__DEV__) {
  firestore.useEmulator("localhost", 8080);
  rtdb.useEmulator("localhost", 9000);
  auth.useEmulator("http://localhost:9099/", { disableWarnings: true });
  functions.useEmulator("localhost", 5001);
}
