// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  updateProfile,
  signOut
 } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClqVaRcHDmmat5I-3JZnyyXJdAm4_G3pc",
  authDomain: "capstone-1d119.firebaseapp.com",
  projectId: "capstone-1d119",
  storageBucket: "capstone-1d119.appspot.com",
  messagingSenderId: "988624431815",
  appId: "1:988624431815:web:13af44951e610e9a7a2ce2",
  measurementId: "G-WNE42XNMN3"
};

// Initialize Firebase
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  

export { 
    db, 
    auth,
    storage, 
    firebase, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    updateProfile,
    signOut
  };