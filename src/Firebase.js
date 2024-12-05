import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBs_jr5oj6RIR-4QbUsNVLjk-lWfDF8_pQ",
  authDomain: "restaurant2566.firebaseapp.com",
  projectId: "restaurant2566",
  storageBucket: "restaurant2566.firebasestorage.app",
  messagingSenderId: "827332852574",
  appId: "1:827332852574:web:2c1780bbcc0594002dadcf",
  measurementId: "G-J5LH8H08JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth and Firestore services
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export both auth and db
