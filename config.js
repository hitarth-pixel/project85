import firebase from 'firebase';
import 'firebase/app';
import 'firebase/auth';
require('firebase/auth');
require('firebase/app');

const firebaseConfig = {
    apiKey: "AIzaSyDo6QlWYClOALbbZivW1OzMeTfRFtsDBs4",
    authDomain: "project85-93184.firebaseapp.com",
    databaseURL: "https://project85-93184-default-rtdb.firebaseio.com",
    projectId: "project85-93184",
    storageBucket: "project85-93184.appspot.com",
    messagingSenderId: "367580340975",
    appId: "1:367580340975:web:dec8d626e530a703f3311a"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export default firebaseConfig