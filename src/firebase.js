// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDInOzqpInnY9liNFF6GQQrUMd3NcP1LKU",
  authDomain: "va-tutors-59e03.firebaseapp.com",
  projectId: "va-tutors-59e03",
  storageBucket: "va-tutors-59e03.appspot.com",
  messagingSenderId: "544821372541",
  appId: "1:544821372541:web:0536d7927ad208cfcbb314"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };