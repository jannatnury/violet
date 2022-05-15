import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCex8r1VDwciGwEIvXvbC4zBbx5AKptQsA",
  authDomain: "violet-jannatnury.firebaseapp.com",
  projectId: "violet-jannatnury",
  storageBucket: "violet-jannatnury.appspot.com",
  messagingSenderId: "91110045244",
  appId: "1:91110045244:web:bbbdf701aab845ce0a7539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;