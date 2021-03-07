import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyCzvojmqXwlGiMDBHKq0DKxsMRzlGef3RQ",
    authDomain: "clone-372d6.firebaseapp.com",
    databaseURL: "https://clone-372d6.firebaseio.com",
    projectId: "clone-372d6",
    storageBucket: "clone-372d6.appspot.com",
    messagingSenderId: "968045773278",
    appId: "1:968045773278:web:61166fc66e48b6ae0c1d4f",
    measurementId: "G-6DYFZ0YM8E"
  
})
// Initialize Firebase
const  db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};