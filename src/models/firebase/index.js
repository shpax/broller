/** FIREBASE DATA MODEL
 * */

import firebase from "firebase/app";
import "firebase/auth";
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

// firebase.auth().settings.appVerificationDisabledForTesting = true;

const db = firebase.firestore();

async function createNewRoller(phone) {
  const ref = await db.collection("rollers").add({
    phone,
    awardIds: [],
    birthdate: null,
    levelId: null,
    name: null,
    photo: null,
    playlist: null,
  });

  return await ref.get();
}

async function getRoller(phone) {
  const records = await db
    .collection("rollers")
    .where("phone", "==", phone)
    .get();

  console.log(records);
  let doc = records.docs[0];
  if (!doc) {
    doc = await createNewRoller(phone);

    console.log("created user:".doc);
  }
  const rollerRecord = {
    ...doc.data(),
    id: doc.id,
  };

  return rollerRecord;
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

export async function getData(phone) {
  const roller = await getRoller(phone);
  const videos = await getAwardVideos(roller.id);
  const awards = await getAwards();
  const levels = await getLevels();

  return { roller, awards, levels, videos };
}

export function createRecaptchaVerifier(container) {
  return new firebase.auth.RecaptchaVerifier(container, {
    size: "invisible",
    callback: (response) => {
      console.log("response", response);
    },
  });
}

export async function authWithPhone(phoneNumber) {
  const confirmationResult = await firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier);

  return (code) => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      confirmationResult.verificationId,
      code
    );

    return firebase.auth().signInWithCredential(credential);
  };
}
