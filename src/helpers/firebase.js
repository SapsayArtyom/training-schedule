// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdlgNXfDGBrqPESZDqsY-bGHoZYzPILDM",
    authDomain: "katya-sport.firebaseapp.com",
    databaseURL: "https://katya-sport-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "katya-sport",
    storageBucket: "katya-sport.appspot.com",
    messagingSenderId: "78484876342",
    appId: "1:78484876342:web:5a6e27dcd1cb6288973c97",
    measurementId: "G-MDX94NLC6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);