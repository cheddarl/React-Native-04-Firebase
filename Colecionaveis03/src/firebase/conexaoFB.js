import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCucUs-j1HtGRZNBvPMXJ3bZLSwIdLsqus",
    authDomain: "colecionaveisfb-129b1.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-129b1.firebaseio.com",
    projectId: "colecionaveisfb-129b1",
    storageBucket: "colecionaveisfb-129b1.appspot.com",
    messagingSenderId: "671782342785",
    appId: "1:671782342785:web:378ccffed189df59283d80",
    measurementId: "G-J90Y9KC799"
  };
  
  var app = firebase.initializeApp(firebaseConfig);

  export const conexaoFS = app.firestore();