// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4VV33HY0vLCJnZs0x8musEGm7nUZNqhA",
  authDomain: "gardnershub-react-auth.firebaseapp.com",
  projectId: "gardnershub-react-auth",
  storageBucket: "gardnershub-react-auth.firebasestorage.app",
  messagingSenderId: "727139461140",
  appId: "1:727139461140:web:736be8826646f119fb1f01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);