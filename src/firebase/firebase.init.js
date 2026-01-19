// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey ,
  authDomain:import.meta.env.VITE_authDomain ,
  projectId:import.meta.env.VITE_projectId ,
  storageBucket:import.meta.env.VITE_storageBucket ,
  messagingSenderId:import.meta.env.VITE_messagingSenderId ,
  appId:import.meta.env.VITE_appId 
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);



/* from assignment 10 
  apiKey: "AIzaSyADXPBPtgf9sgEbQ0MCiAsT9nQMRqRgbAM",
  authDomain: "aiventory-bf27b.firebaseapp.com",
  projectId: "aiventory-bf27b",
  storageBucket: "aiventory-bf27b.firebasestorage.app",
  messagingSenderId: "550579616376",
  appId: "1:550579616376:web:082757dc500d331eabcb8d"

  */