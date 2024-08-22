// Import the necessary functions from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAzgYsDT-O__V7fYo5-XS1gt_5tnCK_ilU",
    authDomain: "clone-6e1c7.firebaseapp.com",
    projectId: "clone-6e1c7",
    storageBucket: "clone-6e1c7.appspot.com",
    messagingSenderId: "802590196859",
    appId: "1:802590196859:web:5b34c11f977c69d20f8ede",
    measurementId: "G-13M8B0SDK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth services
const db = getFirestore(app);
const auth = getAuth(app);

export default { db, auth };
