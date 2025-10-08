// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRIQpEp__acyd4EptCNKQT0yXOTJtlMMg",
  authDomain: "joboard-f5ec3.firebaseapp.com",
  projectId: "joboard-f5ec3",
  storageBucket: "joboard-f5ec3.firebasestorage.app",
  messagingSenderId: "295048372827",
  appId: "1:295048372827:web:5dcc006dd79ad088d8957e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };