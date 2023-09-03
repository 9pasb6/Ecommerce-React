
import { getFirestore}  from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNGFla2sRmYAs4ZZ1ZuuC0iWJkISV3pAE",
  authDomain: "ecommerce-react-6942b.firebaseapp.com",
  projectId: "ecommerce-react-6942b",
  storageBucket: "ecommerce-react-6942b.appspot.com",
  messagingSenderId: "582808705440",
  appId: "1:582808705440:web:73f81ce60ccfda92b66cc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


