// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiaXCHLHsBiks1kUZO1061mp2haHZ4ajY",
  authDomain: "thescom-site.firebaseapp.com",
  projectId: "thescom-site",
  storageBucket: "thescom-site.appspot.com",
  messagingSenderId: "990985408512",
  appId: "1:990985408512:web:66c08fed426268b2d2c8e5",
  measurementId: "G-DTCZTW3NSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);