function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
import {initializeApp} from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzVVA9BW-dL0-nGcmo4MafDaqDet7PncY",
    authDomain: "letschatwebapp-52b6f.firebaseapp.com",
    projectId: "letschatwebapp-52b6f",
    storageBucket: "letschatwebapp-52b6f.appspot.com",
    messagingSenderId: "1003738749574",
    appId: "1:1003738749574:web:ae4f052f37d226a49ecf07",
    measurementId: "G-N59YFZ72BQ"
  };
  
//ADD YOUR FIREBASE LINKS

const app = initializeApp(firebaseConfig);

function addUser() {
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"addingUser";
})
}
      //End code
      });});}
getData();
