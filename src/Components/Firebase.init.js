// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB422NaHEU_LD7NQd9lD1BHQUkFj2Wiz64",
  authDomain: "assignment-tface.firebaseapp.com",
  projectId: "assignment-tface",
  storageBucket: "assignment-tface.appspot.com",
  messagingSenderId: "115866180331",
  appId: "1:115866180331:web:f413c8ed1bf5f6db89fcae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;