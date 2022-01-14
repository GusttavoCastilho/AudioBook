import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIDbdC2t1_8xGWvKP-piFFFMTQvXGOI5A",
  authDomain: "audiobook-b5da5.firebaseapp.com",
  projectId: "audiobook-b5da5",
  storageBucket: "audiobook-b5da5.appspot.com",
  messagingSenderId: "19278307601",
  appId: "1:19278307601:web:66c4b87976ee3521e36cb0",
  measurementId: "G-JYYHBW30FQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = getFirestore();
export { database };
