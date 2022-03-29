 import firebase from 'firebase';
 
 var firebaseConfig = {
    
    apiKey: "AIzaSyBseWV1tGxgmnNt-yTUeHclUtlkGVLhtGI",
    authDomain: "edna-cinema-19b62.firebaseapp.com",
    projectId: "edna-cinema-19b62",
    storageBucket: "edna-cinema-19b62.appspot.com",
    messagingSenderId: "689379168539",
    appId: "1:689379168539:web:cb50c0b4bd52bebca983be",
    measurementId: "G-PE81VK02WD"
  
      };
  // Initialize Firebase
   var fire = firebase.initializeApp(firebaseConfig);

   export default fire;