// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArXsqwYlog4GYwTRKq92ihBHMBZmzGP50",
  authDomain: "mythoria-d605e.firebaseapp.com",
  projectId: "mythoria-d605e",
  storageBucket: "mythoria-d605e.firebasestorage.app",
  messagingSenderId: "535580625169",
  appId: "1:535580625169:web:dbe703aae22d9f2f6ba4b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
