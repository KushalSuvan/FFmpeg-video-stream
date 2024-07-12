// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM9fqQDBmAefKG2MzRwNks2rwandMsDA8",
  authDomain: "netflix-f9980.firebaseapp.com",
  projectId: "netflix-f9980",
  storageBucket: "netflix-f9980.appspot.com",
  messagingSenderId: "764011476837",
  appId: "1:764011476837:web:085eb1911263ab6be7538c",
  measurementId: "G-H3WXJD3RKP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app };
