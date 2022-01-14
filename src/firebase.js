import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAK-MMxV2oqXCYjoolnB7soCP4HdUbgF8Q",
  authDomain: "c-t-e-f8fbc.firebaseapp.com",
  databaseURL: "https://c-t-e-f8fbc-default-rtdb.firebaseio.com",
  projectId: "c-t-e-f8fbc",
  storageBucket: "c-t-e-f8fbc.appspot.com",
  messagingSenderId: "665203956663",
  appId: "1:665203956663:web:a840eaf92d4ff4825ce632"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storageRef = firebase.storage().ref();
export {db, auth,storageRef};

