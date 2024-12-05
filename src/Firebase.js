// src/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBs_jr5oj6RIR-4QbUsNVLjk-lWfDF8_pQ",
  authDomain: "restaurant2566.firebaseapp.com",
  projectId: "restaurant2566",
  storageBucket: "restaurant2566.firebasestorage.app",
  messagingSenderId: "827332852574",
  appId: "1:827332852574:web:2c1780bbcc0594002dadcf",
  measurementId: "G-J5LH8H08JH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
