
import firebase from 'firebase';
  
const firebaseConfig = {
	apiKey: "AIzaSyDPvd52-noM4ME1vCt8Ky5QiT7-44iBeC8",
	authDomain: "autonomous-delivery-bot.firebaseapp.com",
	databaseURL: "https://autonomous-delivery-bot-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "autonomous-delivery-bot",
	storageBucket: "autonomous-delivery-bot.appspot.com",
	messagingSenderId: "475491547526",
	appId: "1:475491547526:web:6388ce7d0dfab46272d407"
};
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// import { initializeApp } from "firebase/app";
// ​​import {
// ​​  GoogleAuthProvider,
// ​​  getAuth,
// ​​  signInWithPopup,
// ​​  signInWithEmailAndPassword,
// ​​  createUserWithEmailAndPassword,
// ​​  sendPasswordResetEmail,
// ​​  signOut,
// ​​} from "firebase/auth";
// ​​import {
// ​​  getFirestore,
// ​​  query,
// ​​  getDocs,
// ​​  collection,
// where,
// ​​  addDoc,
// ​​} from "firebase/firestore";
  
export default database;


