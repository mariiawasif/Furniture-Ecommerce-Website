// Import the functions you need from the SDKs you need
const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAHGiDme9ZzJOfvu8UsrGKSGxXmTFpEHK0",
  authDomain: "hekto-clone.firebaseapp.com",
  projectId: "hekto-clone",
  storageBucket: "hekto-clone.appspot.com",
  messagingSenderId: "1086471774929",
  appId: "1:1086471774929:web:c260cd7b056433ef17dbf0"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = firebase.firestore();
const storage = firebase.storage();

module.exports = { db, storage };