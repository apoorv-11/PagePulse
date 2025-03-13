// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5hNdE6ia4IYvbyuwrvxAsHDr4rKGCako",
  authDomain: "page-pulse--mern--app.firebaseapp.com",
  projectId: "page-pulse--mern--app",
  storageBucket: "page-pulse--mern--app.firebasestorage.app",
  messagingSenderId: "686392809493",
  appId: "1:686392809493:web:237c012967ea7d6048961c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
