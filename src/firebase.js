// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9IPvsmnLQC8gGrHm3JdKCorwERBJxa5A",
  authDomain: "celine-c2c5a.firebaseapp.com",
  projectId: "celine-c2c5a",
  storageBucket: "celine-c2c5a.appspot.com",
  messagingSenderId: "224171091868",
  appId: "1:224171091868:web:2c3c51c106aa3210060a59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export {app, storage};