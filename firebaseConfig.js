import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdV-yrYcFXU5y367N4U03QGvokzfiVt1A",
  authDomain: "salmdjareb-a07a6.firebaseapp.com",
  projectId: "salmdjareb-a07a6",
  storageBucket: "salmdjareb-a07a6.appspot.com",
  messagingSenderId: "18349315826",
  appId: "1:18349315826:web:cbb01b90dd703d2dd8626b",
  measurementId: "G-FETGYWSDCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
