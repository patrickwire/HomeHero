import * as functions from 'firebase-functions';

import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.countUser = functions.auth.user().onCreate(async (user) => {
    await admin.firestore().doc("data/stats").update({ amountUsers: admin.firestore.FieldValue.increment(1)})
  });
  
