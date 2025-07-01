import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBw7-tDOyCh4GzPoo7CyHo2ZENLA6NH2Yc",
  authDomain: "analyzer-c18f0.firebaseapp.com",
  projectId: "analyzer-c18f0",
  storageBucket: "analyzer-c18f0.firebasestorage.app",
  messagingSenderId: "431672471294",
  appId: "1:431672471294:web:f6cc4d2c8432a7d58cffaf",
  measurementId: "G-L9LLQEGRC2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBw7-tDOyCh4GzPoo7CyHo2ZENLA6NH2Yc",
//   authDomain: "analyzer-c18f0.firebaseapp.com",
//   projectId: "analyzer-c18f0",
//   storageBucket: "analyzer-c18f0.firebasestorage.app",
//   messagingSenderId: "431672471294",
//   appId: "1:431672471294:web:f6cc4d2c8432a7d58cffaf",
//   measurementId: "G-L9LLQEGRC2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);