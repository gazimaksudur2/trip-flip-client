// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeLAh5QSQBnu41ByaG3xNSRO5zypkQYvo",
  authDomain: "trip-flip.firebaseapp.com",
  projectId: "trip-flip",
  storageBucket: "trip-flip.appspot.com",
  messagingSenderId: "763292311080",
  appId: "1:763292311080:web:c21fc0fb2a0d2aa9a55f1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;