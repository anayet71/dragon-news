// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzpx6MuCXIklLRh1OBHiU8ynOTLVysWa4",
  authDomain: "dragon-news-27e2f.firebaseapp.com",
  projectId: "dragon-news-27e2f",
  storageBucket: "dragon-news-27e2f.firebasestorage.app",
  messagingSenderId: "426223031253",
  appId: "1:426223031253:web:2572a18cf3a1dffeed235c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app