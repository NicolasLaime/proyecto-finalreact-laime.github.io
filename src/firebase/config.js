// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPmfu--K23Y8BH6BRHT2Md1xxAoFb4uns",
  authDomain: "liword-shop.firebaseapp.com",
  projectId: "liword-shop",
  storageBucket: "liword-shop.appspot.com",
  messagingSenderId: "384850023991",
  appId: "1:384850023991:web:b6c00d118d689fac1151b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)