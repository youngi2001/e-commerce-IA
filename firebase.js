// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA-yDn-INfHPwFhhHnidp2NaxLGRxiFNA",
  authDomain: "e-commerce-ia-1a926.firebaseapp.com",
  projectId: "e-commerce-ia-1a926",
  storageBucket: "e-commerce-ia-1a926.appspot.com",
  messagingSenderId: "251586544054",
  appId: "1:251586544054:web:5a012161db9fcdd1474117",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export { auth };
