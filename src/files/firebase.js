 import firebase from 'firebase';
 
 var firebaseConfig = {
    
        apiKey: "AIzaSyC_djjugZzqcsgePCEyx5R13Tg4f-3kr18",
        authDomain: "ednacinema-51f4f.firebaseapp.com",
        projectId: "ednacinema-51f4f",
        storageBucket: "ednacinema-51f4f.appspot.com",
        messagingSenderId: "951517034246",
        appId: "1:951517034246:web:ff8d2e611f5b89a53a9087"
      };
  // Initialize Firebase
   var fire = firebase.initializeApp(firebaseConfig);

   export default fire;