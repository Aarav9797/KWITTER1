// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyAvpwxvgCqAGLYCp_CF7JT68DjUzd1Ten0",
      authDomain: "kwitter-9c886.firebaseapp.com",
      databaseURL: "https://kwitter-9c886-default-rtdb.firebaseio.com",
      projectId: "kwitter-9c886",
      storageBucket: "kwitter-9c886.appspot.com",
      messagingSenderId: "1071063708078",
      appId: "1:1071063708078:web:361bfdbacdf9445b9e183f",
      measurementId: "G-H0NZB8PVRH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
var row="<div class='room_name'>#"+Room_names+"</div>";
document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function onload() {
      document.getElementById("display_name").innerHTML = "Welcome " + localStorage.getItem("User_name")
}

function addroom() {
      var roomname = document.getElementById("Room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding room name"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("roomname");
      localStorage.removeItem("User_name");
      window.location="index.html";
}