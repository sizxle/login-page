/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCj1DS5AjEO2s1dVaqw2TDXR7yxLCkkmU",
  authDomain: "login-page-with-react.firebaseapp.com",
  projectId: "login-page-with-react",
  storageBucket: "login-page-with-react.appspot.com",
  messagingSenderId: "557184564116",
  appId: "1:557184564116:web:44ac7ae58bf2fa17f7ad81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth};
