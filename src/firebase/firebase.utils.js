import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAA9f1M9BGLEqPpLaxDjtaUyg60DicRq3w",
  authDomain: "chivolve.firebaseapp.com",
  databaseURL: "https://chivolve.firebaseio.com",
  projectId: "chivolve",
  storageBucket: "",
  messagingSenderId: "226919676523",
  appId: "1:226919676523:web:99e2e69f01d222d8"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
