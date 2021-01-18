import { firebase } from '@firebase/app'
import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: process.env.API_KEY,
    authDomain: "pbo-gartenapp.firebaseapp.com",
    databaseURL: "https://pbo-gartenapp.firebaseio.com/",
    projectId: "pbo-gartenapp",
    storageBucket: "pbo-gartenapp.appspot.com",
    messagingSenderId: "105407469441",
    appId: "1:105407469441:web:7ee2fbd366b32fde7fba80"
};
firebase.initializeApp(config);
console.log("firebase was initialized");

firebase.firestore().settings(settings);

export default firebase;