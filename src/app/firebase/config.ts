import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtOK1L7HtDfJ3CPLrR-ecw7zkgcFTV_f4",
    authDomain: "gachapon-47d45.firebaseapp.com",
    databaseURL: "https://gachapon-47d45-default-rtdb.firebaseio.com",
    projectId: "gachapon-47d45",
    storageBucket: "gachapon-47d45.appspot.com",
    messagingSenderId: "168171961874",
    appId: "1:168171961874:web:55f016c877034c614262cb"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
