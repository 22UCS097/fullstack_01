// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "backend-9d87a.firebaseapp.com",
  projectId: "backend-9d87a",
  storageBucket: "backend-9d87a.appspot.com",
  messagingSenderId: "247606831685",
  appId: "1:247606831685:web:ffdf6cfbe258972639912c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);