import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDHZJalcRgQ-YfbELZXRABQwdAtUC_1jzE",
  authDomain: "hotflix-0.firebaseapp.com",
  projectId: "hotflix-0",
  storageBucket: "hotflix-0.appspot.com",
  messagingSenderId: "599084010195",
  appId: "1:599084010195:web:4369eb9339485b4925a226",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

