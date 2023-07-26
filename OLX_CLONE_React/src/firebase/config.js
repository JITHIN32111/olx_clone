// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {

  apiKey: "AIzaSyAREckUzOhTEIln3fChWdw_E-J2qf1DInY",
  authDomain: "newd-c2713.firebaseapp.com",
  projectId: "newd-c2713",
  storageBucket: "newd-c2713.appspot.com",
  messagingSenderId: "193751733492",
  appId: "1:193751733492:web:3c2183073cd281a854faa1",
  measurementId: "G-4QR5HEMJTG"
};





  export default firebase.initializeApp(firebaseConfig)