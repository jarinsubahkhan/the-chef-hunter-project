// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy84kRUBe5jbLUc28wxhy4-VTSUauGWPg",
  authDomain: "the-chef-recipe-assignment.firebaseapp.com",
  projectId: "the-chef-recipe-assignment",
  storageBucket: "the-chef-recipe-assignment.appspot.com",
  messagingSenderId: "444328269514",
  appId: "1:444328269514:web:3ae9d335da9b61409f4633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;