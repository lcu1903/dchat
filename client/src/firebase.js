import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAExOP5iLKMVoeP5_CucDJz44ZrLCnH6KY',
    authDomain: 'dchat-9025a.firebaseapp.com',
    projectId: 'dchat-9025a',
    storageBucket: 'dchat-9025a.appspot.com',
    messagingSenderId: '97630789131',
    appId: '1:97630789131:web:a8fabcbaa52b330466310e',
    measurementId: 'G-Y11795ZX9M',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
