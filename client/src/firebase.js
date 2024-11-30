// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7160d.firebaseapp.com",
  projectId: "mern-estate-7160d",
  storageBucket: "mern-estate-7160d.appspot.com",
  messagingSenderId: "820354947450",
  appId: "1:820354947450:web:e09cb66f30e47a89a99ec3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);