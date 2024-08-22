// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzgYsDT-O__V7fYo5-XS1gt_5tnCK_ilU",
  authDomain: "clone-6e1c7.firebaseapp.com",
  projectId: "clone-6e1c7",
  storageBucket: "clone-6e1c7.appspot.com",
  messagingSenderId: "802590196859",
  appId: "1:802590196859:web:5b34c11f977c69d20f8ede",
  measurementId: "G-13M8B0SDK4"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };