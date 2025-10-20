// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOu677353CpXUTVnNUzyAlwqvXVEJwKSI",
  authDomain: "reservaaitcc.firebaseapp.com",
  projectId: "reservaaitcc",
  storageBucket: "reservaaitcc.firebasestorage.app",
  messagingSenderId: "883125767923",
  appId: "1:883125767923:web:be18c04f05914034b4b186",
  measurementId: "G-3G1YGT2DD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };

