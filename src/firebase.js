import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
export const firebaseConfig = {
    apiKey: "AIzaSyC-7rHlauMV1DUTfzulWSNAD7PCRwylivc",
    authDomain: "fir-form-ed9a6.firebaseapp.com",
    projectId: "fir-form-ed9a6",
    storageBucket: "fir-form-ed9a6.appspot.com",
    messagingSenderId: "786935825277",
    appId: "1:786935825277:web:e30dd66c159b7a9ee78214"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);