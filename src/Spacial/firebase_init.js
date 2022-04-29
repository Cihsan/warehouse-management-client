// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdeR7n3HkbqjUMHBjYvJ9tyfRuwaZ5Gqw",
  authDomain: "goods-store-49d6a.firebaseapp.com",
  projectId: "goods-store-49d6a",
  storageBucket: "goods-store-49d6a.appspot.com",
  messagingSenderId: "1023234172776",
  appId: "1:1023234172776:web:6929a43505d68fcbb918dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth