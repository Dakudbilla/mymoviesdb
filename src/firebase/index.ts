// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDYOlBsyuJ6ieDvw4PBFqAQRa8UhaGOZU",
  authDomain: "mymoviesdb-8aaa9.firebaseapp.com",
  projectId: "mymoviesdb-8aaa9",
  storageBucket: "mymoviesdb-8aaa9.appspot.com",
  messagingSenderId: "464190918767",
  appId: "1:464190918767:web:f2d7cd89fcdc3fbdbd3d9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
