import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAsrS9Y8SrjXYbOpjn4Q_bOrSuFDFFBh7Q",
  authDomain: "proyecto-final-b8d73.firebaseapp.com",
  projectId: "proyecto-final-b8d73",
  storageBucket: "proyecto-final-b8d73.firebasestorage.app",
  messagingSenderId: "930123525262",
  appId: "1:930123525262:web:1a3ad5ea6d9473ea282ddf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};