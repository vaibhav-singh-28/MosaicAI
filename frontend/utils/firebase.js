// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mosaicai-3e2bc.firebaseapp.com",
  projectId: "mosaicai-3e2bc",
  storageBucket: "mosaicai-3e2bc.firebasestorage.app",
  messagingSenderId: "1083778069487",
  appId: "1:1083778069487:web:d1661c04c8b5caf33dfc1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()