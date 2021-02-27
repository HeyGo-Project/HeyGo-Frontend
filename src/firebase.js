import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwRxv8K3V4Dl0xjKbFpCKY2tAYBdupkkg",
  authDomain: "heygowebsite.firebaseapp.com",
  projectId: "heygowebsite",
  storageBucket: "heygowebsite.appspot.com",
  messagingSenderId: "389456535594",
  appId: "1:389456535594:web:0a6243b42f9c914c032353",
  measurementId: "G-C4R89R1JMM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
