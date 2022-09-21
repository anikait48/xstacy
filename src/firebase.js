import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwOmWmwGYaGCuCILGBv655EKgvIXS54Uc",
  authDomain: "xstacy-x.firebaseapp.com",
  projectId: "xstacy-x",
  storageBucket: "xstacy-x.appspot.com",
  messagingSenderId: "523143775073",
  appId: "1:523143775073:web:f6d2a775a7ed84d1457b20",
  measurementId: "G-HLY9F11MQD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };