// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqAU7bwO3XyHD0pqyezSg6keOHwI4pjxk",
  authDomain: "bonanza-ai-travel-planer.firebaseapp.com",
  projectId: "bonanza-ai-travel-planer",
  storageBucket: "bonanza-ai-travel-planer.appspot.com",
  messagingSenderId: "743267240316",
  appId: "1:743267240316:web:d2f8415376d286643e3cf9",
  measurementId: "G-GNG3QSPCQ2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
