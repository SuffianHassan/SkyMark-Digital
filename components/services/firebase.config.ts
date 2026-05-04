import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAqrGl5a-TVI0J0TF7xPHXqMJ_XhOvfZSk",
  authDomain: "skymark-digital.firebaseapp.com",
  projectId: "skymark-digital",
  storageBucket: "skymark-digital.firebasestorage.app",
  messagingSenderId: "1022311890611",
  appId: "1:1022311890611:web:20f793950817b3fd9e7ac6",
  measurementId: "G-FT6ERSV6GJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
