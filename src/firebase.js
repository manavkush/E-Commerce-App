// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBeZ4pYo6Q6HWUTrzAzAbiGj6mBwuetmM4",
  authDomain: "e-commerce-app-73c4b.firebaseapp.com",
  projectId: "e-commerce-app-73c4b",
  storageBucket: "e-commerce-app-73c4b.appspot.com",
  messagingSenderId: "530097590512",
  appId: "1:530097590512:web:7aa36489613da172357235",
  measurementId: "G-LPY0WNSGTN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
