import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration for creevo-waitlist project
const firebaseConfig = {
    apiKey: "AIzaSyDDHSuMgGI4oseJd_Oxbp4rs1wK8v-zOG0",
    authDomain: "creevo-waitlist.firebaseapp.com",
    projectId: "creevo-waitlist",
    storageBucket: "creevo-waitlist.firebasestorage.app",
    messagingSenderId: "1043904940057",
    appId: "1:1043904940057:web:3cf8c6fa765d627ce64288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app; 