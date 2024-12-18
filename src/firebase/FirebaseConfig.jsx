import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvYxWyCDy5d1QRrfmCg8KOuWoMBYkrlPY",
  authDomain: "myfirstapp-26847.firebaseapp.com",
  projectId: "myfirstapp-26847",
  storageBucket: "myfirstapp-26847.firebasestorage.app",
  messagingSenderId: "108134512135",
  appId: "1:108134512135:web:257cc4798485c6fd841ca2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}