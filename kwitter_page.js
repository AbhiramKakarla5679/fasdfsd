//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAt63uYEauxC1z9o6WhA7NFR3fUrtDFxZM",
    authDomain: "kwitter-22db4.firebaseapp.com",
    databaseURL: "https://kwitter-22db4-default-rtdb.firebaseio.com",
    projectId: "kwitter-22db4",
    storageBucket: "kwitter-22db4.appspot.com",
    messagingSenderId: "275188046333",
    appId: "1:275188046333:web:1a2ce8f80f90875a60e194"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() 
{
 msg = document.getElementById("msg").value;
 
 firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
 });

 document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

//Start code

//End code
    } });  }); }
getData();