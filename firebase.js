import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIgQ-PeRdyf0E5q_7TQqIQdknsTiW67to",
  authDomain: "gym-mc-51f29.firebaseapp.com",
  projectId: "gym-mc-51f29",
  storageBucket: "gym-mc-51f29.appspot.com",
  messagingSenderId: "140082710615",
  appId: "1:140082710615:web:d4f169cd0aec1b87027b12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
