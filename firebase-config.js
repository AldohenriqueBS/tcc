// Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPd099RbEeLnCvlExTXkJTpsOWG0mXioY",
  authDomain: "reservaai-c36a9.firebaseapp.com",
  projectId: "reservaai-c36a9",
  storageBucket: "reservaai-c36a9.firebasestorage.app",
  messagingSenderId: "597102359717",
  appId: "1:597102359717:web:5e64952238a3957886c94c",
  measurementId: "G-T2529F1GEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

export default app;
