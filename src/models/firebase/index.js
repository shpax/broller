/** FIREBASE DATA MODEL
 * */

import firebase from "firebase";
import "firebase/analytics";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDh39tWOVnMY8fpSRDFcCXh7Tki3nwr-WM",
  authDomain: "broller.firebaseapp.com",
  databaseURL: "https://broller.firebaseio.com",
  projectId: "broller",
  storageBucket: "broller.appspot.com",
  messagingSenderId: "171702612639",
  appId: "1:171702612639:web:0ff47b6b47c05bc56da8aa",
  measurementId: "G-954QEC6B4D",
});

firebase.auth().useDeviceLanguage();

const db = firebase.firestore();

async function getRoller(rollerId) {
  const rollerRecord = await db.collection("rollers").doc(rollerId).get();

  if (!rollerRecord.exists) return null;

  const roller = rollerRecord.data();

  // superfluous mapping

  // const videoRecords = await db
  //   .collection("opened_awards")
  //   .where("rollerId", "==", rollerId)
  //   .get();

  // roller.videos = videoRecords.docs.map((rec) => rec.data());
  return roller;
}

async function getAwardVideos(rollerId) {
  const records = await db
    .collection("opened_awards")
    .where("rollerId", "==", rollerId)
    .get();

  return records.docs.map((rec) => ({ ...rec.data(), id: rec.id }));
}

async function getAwards() {
  const records = await db.collection("awards").get();
  return records.docs.map((rec) => ({ ...rec.data(), id: rec.id }));
}

async function getLevels() {
  const records = await db.collection("levels").get();
  return records.docs.map((rec) => ({ ...rec.data(), id: rec.id }));
}

export async function getData(rollerId) {
  const roller = await getRoller(rollerId);
  const videos = await getAwardVideos(rollerId);
  const awards = await getAwards();
  const levels = await getLevels();

  // superfluous mapping

  // awards.forEach((award) => {
  //   award.level = levels.find((l) => l.id == award.levelId);
  //   delete award.levelId;
  // });

  // if (roller.awardIds && roller.awardIds.length) {
  //   roller.awards = awards.filter((award) =>
  //     roller.awardIds.includes(award.id)
  //   );

  //   delete roller.awardIds;
  // }

  return { roller, awards, levels, videos };
}


export async function authWithPhone(phoneNumber, loginButtonId) {

  const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(loginButtonId, {
    'size': 'invisible',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      // onSignInSubmit();
    }
  });

  const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier);


  return {
    confirmationResult,
    enterCode: (code) => {
      const credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
  
      console.log(firebase.auth().signInWithCredential(credential));
    }
  }
}