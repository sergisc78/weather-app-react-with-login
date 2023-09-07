// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDEb7i1bpZA0t_YNGGtTlrwllxdz2ajmP8",

  authDomain: "login-react-431a1.firebaseapp.com",

  projectId: "login-react-431a1",

  storageBucket: "login-react-431a1.appspot.com",

  messagingSenderId: "1094099140355",

  appId: "1:1094099140355:web:0748781fcd6b23039e3336",

  measurementId: "G-DQXVQL5QE0"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const auth=getAuth(app)