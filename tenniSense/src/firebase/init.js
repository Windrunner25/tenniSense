// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl31EdhrFmMUucsWOcQnwXvXpM2Fu9JX4",
  authDomain: "tennisense-test.firebaseapp.com",
  projectId: "tennisense-test",
  storageBucket: "tennisense-test.firebasestorage.app",
  messagingSenderId: "1073495077195",
  appId: "1:1073495077195:web:427aad4cf6b6eadde6b8ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;