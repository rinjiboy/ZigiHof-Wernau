// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdaAW27eOTsiL4L-xwOQo6Go6MIr6r4kQ",
  authDomain: "zigihof-wernau.firebaseapp.com",
  projectId: "zigihof-wernau",
  storageBucket: "zigihof-wernau.appspot.com",
  messagingSenderId: "682898239732",
  appId: "1:682898239732:web:085fe2757d1b5c3b3faea1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

const createUser = () => {

    const userDocRef = doc(db, 'users', 'some identifier');
}