// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf01kGHlVhQ6sUaH7n8kGT8vJoq2qLvMg",
  authDomain: "netflix-gpt-c12bc.firebaseapp.com",
  projectId: "netflix-gpt-c12bc",
  storageBucket: "netflix-gpt-c12bc.appspot.com",
  messagingSenderId: "1090569589695",
  appId: "1:1090569589695:web:65ee1238db163e5242c70a",
  measurementId: "G-SV5718DH69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();