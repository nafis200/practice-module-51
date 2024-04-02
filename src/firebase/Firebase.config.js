
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgRGhx4oBgU1uIJg8R8GSQak7FI6mEw_k",
  authDomain: "practice-module-51-8a9fa.firebaseapp.com",
  projectId: "practice-module-51-8a9fa",
  storageBucket: "practice-module-51-8a9fa.appspot.com",
  messagingSenderId: "197580112932",
  appId: "1:197580112932:web:f19f10193673b5813904b1"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth

