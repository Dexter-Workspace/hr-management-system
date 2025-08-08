// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcIjTQsVEqGsjG4MDTYXeyG-pt8oZGSW8",
  authDomain: "hr-management-system-a316e.firebaseapp.com",
  projectId: "hr-management-system-a316e",
  storageBucket: "hr-management-system-a316e.firebasestorage.app",
  messagingSenderId: "987135397487",
  appId: "1:987135397487:web:a4213c04591051cbc5879a"
};

// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);