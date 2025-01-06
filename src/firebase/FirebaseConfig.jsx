import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const devConfig = {
  // Krischal Development
  apiKey: "AIzaSyCvYxWyCDy5d1QRrfmCg8KOuWoMBYkrlPY",
  authDomain: "myfirstapp-26847.firebaseapp.com",
  projectId: "myfirstapp-26847",
  storageBucket: "myfirstapp-26847.firebasestorage.app",
  messagingSenderId: "108134512135",
  appId: "1:108134512135:web:257cc4798485c6fd841ca2",
};

const prodConfig = {
  // Hyper Offical Production
  apiKey: "AIzaSyDdSmEg_ApE4D4VsjL8xyLEb4yNVjcf73A",
  authDomain: "hyper-foods-official.firebaseapp.com",
  projectId: "hyper-foods-official",
  storageBucket: "hyper-foods-official.firebasestorage.app",
  messagingSenderId: "659122081928",
  appId: "1:659122081928:web:01d8f5668bfc2415f60f3d",
};

const firebaseConfig =
  process.env.NODE_ENV === "production" ? prodConfig : devConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
// const imageDB = getStorage(app);
export { fireDB, auth };
