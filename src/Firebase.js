
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1mxPMa1bUR9Plb50M5ILKNk1hI5ViYZc",
    authDomain: "netflix-clone-57015.firebaseapp.com",
    projectId: "netflix-clone-57015",
    storageBucket: "netflix-clone-57015.appspot.com",
    messagingSenderId: "47328173826",
    appId: "1:47328173826:web:5043bc8ae480d02f046c1b"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;