import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCBcLAkIfQW3UqvG0YReV2XAT5OvkTSRuc",
  authDomain: "wily-app-adae7.firebaseapp.com",
  projectId: "wily-app-adae7",
  storageBucket: "wily-app-adae7.appspot.com",
  messagingSenderId: "607747362646",
  appId: "1:607747362646:web:2ccbd3ffaf056ff69250f7"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();