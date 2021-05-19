const admin = require("firebase-admin");
const functions = require("firebase-functions");

const onCreateNewUser = functions.auth.user().onCreate(async (userData, context) => {
  console.log(userData.toJSON());
  const user = userData.toJSON();

  const db = admin.firestore();
  const firestore = admin.firestore;

  const accountDefaults = await db.collection("utils").doc("accountDefaults").get();

  const userRef = db.collection("users").doc(user.uid);
  return await userRef.set({
    ...accountDefaults.data(),
    userID: user.uid,
    email: user.email,
    emailVerified: user.emailVerified,
    dateCreated: firestore.FieldValue.serverTimestamp(),
  });
});

module.exports = onCreateNewUser;
