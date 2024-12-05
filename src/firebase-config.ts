// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhgzFJf2XcPhodzAXqLicJrpS81QE43tQ",
  authDomain: "project-8238a.firebaseapp.com",
  projectId: "project-8238a",
  storageBucket: "project-8238a.firebasestorage.app",
  messagingSenderId: "149344503380",
  appId: "1:149344503380:web:658d6e8d1bcd29061b8fc1",
  measurementId: "G-934ZSVBMCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);