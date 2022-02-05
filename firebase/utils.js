import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBA8G9kgvUPsUT_r8RPSdlwFHysfY6Gpms",
  authDomain: "bible-ea768.firebaseapp.com",
  projectId: "bible-ea768",
  storageBucket: "bible-ea768.appspot.com",
  messagingSenderId: "174554426540",
  appId: "1:174554426540:web:a15c6d0f9e6483bc774309"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };
