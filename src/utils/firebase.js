// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0l4BhOr2x4Yq6QyDVme9oOs2NTI2m3HQ",
  authDomain: "netflix-gpt-24cf3.firebaseapp.com",
  projectId: "netflix-gpt-24cf3",
  storageBucket: "netflix-gpt-24cf3.appspot.com",
  messagingSenderId: "283751483137",
  appId: "1:283751483137:web:1552f7b63461c8cb89bd00",
  measurementId: "G-05ZRCKXPX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
