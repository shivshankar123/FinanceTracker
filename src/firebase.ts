// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_7lfx_EHRMdnp3MZjXIDFkuNHzm40XKw",
  authDomain: "financeflow-b77c9.firebaseapp.com",
  projectId: "financeflow-b77c9",
  storageBucket: "financeflow-b77c9.appspot.com",
  messagingSenderId: "144718465342",
  appId: "1:144718465342:web:55c17fc5139842080d446f",
  measurementId: "G-G7LV4FF73N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
