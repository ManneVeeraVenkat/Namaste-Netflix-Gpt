// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnZZ3nSaM-PrDupm9Qafz-aWdcfN2-M3U",
  authDomain: "netflixgpt-e53bb.firebaseapp.com",
  projectId: "netflixgpt-e53bb",
  storageBucket: "netflixgpt-e53bb.appspot.com",
  messagingSenderId: "154888179278",
  appId: "1:154888179278:web:f94eaf3f62b64efb7bbd1f",
  measurementId: "G-9D04FQRL60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
