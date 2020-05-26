import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDA_IwIWLVQyILw0dGaT9z0nqWhUECbOT0',
  authDomain: 'crwn-db-82431.firebaseapp.com',
  databaseURL: 'https://crwn-db-82431.firebaseio.com',
  projectId: 'crwn-db-82431',
  storageBucket: 'crwn-db-82431.appspot.com',
  messagingSenderId: '942029012017',
  appId: '1:942029012017:web:7b309373334c6aeefce910',
  measurementId: 'G-MGV2PMR0M3',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
