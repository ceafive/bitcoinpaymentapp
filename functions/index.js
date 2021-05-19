// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const admin = require("firebase-admin");
const triggers = require("./triggers");

// The Firebase Admin SDK to access Firestore.
admin.initializeApp();
admin.firestore().settings({ ignoreUndefinedProperties: true });

module.exports = {
  ...triggers,
};
