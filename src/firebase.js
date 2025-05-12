// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Correct Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDMZMEAeviI_4PlyUsQgBXwqHSnyHc-SXc",
  authDomain: "dikshaenterprises-e2d94.firebaseapp.com",
  projectId: "dikshaenterprises-e2d94",
  storageBucket: "dikshaenterprises-e2d94.firebasestorage.app",
  messagingSenderId: "478074468450",
  appId: "1:478074468450:web:f76019a9cd4899dac6f93b",
  measurementId: "G-6Z4PL401V6"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;