import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbq1DBQ4BnK_u6gph2uuuGZq3kb4iF-x4",
  authDomain: "taxproject-3635f.firebaseapp.com",
  projectId: "taxproject-3635f",
  storageBucket: "taxproject-3635f.appspot.com",
  messagingSenderId: "6038179478",
  appId: "1:6038179478:web:24c29626141e1c0fb47cb7",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };
