import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDNJ5CzbGE1hg8eMO_Z6uA8WSwfuiKwC1k",
  authDomain: "heygo-website.firebaseapp.com",
  projectId: "heygo-website",
  storageBucket: "heygo-website.appspot.com",
  messagingSenderId: "708834914223",
  appId: "1:708834914223:web:57441f24082568e4ec495a",
  measurementId: "G-3YN249S87J"
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
firebase.analytics();
