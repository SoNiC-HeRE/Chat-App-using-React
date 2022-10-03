
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMK5VTa7-FaW9wzi0Ui4t95xhr6fX9RI0",
  authDomain: "chat-app-using-react-fbc91.firebaseapp.com",
  projectId: "chat-app-using-react-fbc91",
  storageBucket: "chat-app-using-react-fbc91.appspot.com",
  messagingSenderId: "111402998306",
  appId: "1:111402998306:web:1cbdd53ff9beba95d4887b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();