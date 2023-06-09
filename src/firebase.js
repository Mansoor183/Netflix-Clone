// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaylRPmNAwcWa7LE6sc-N0oByzcCqxNXY",
  authDomain: "movie-app-clone-7c605.firebaseapp.com",
  projectId: "movie-app-clone-7c605",
  storageBucket: "movie-app-clone-7c605.appspot.com",
  messagingSenderId: "455016145796",
  appId: "1:455016145796:web:04d11b991780cbab09f3d1",
  measurementId: "G-FPSHED19YS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
