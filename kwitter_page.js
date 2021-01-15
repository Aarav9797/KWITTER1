var username = localStorage.getItem("User_name");
var roomname = localStorage.getItem("roomname");
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

function getData() {
      firebase.database().ref("/" + roomname).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        var username = message_data["username"];
                        var likes = message_data["likes"];
                        var message = message_data["message"];
                        var display = "<h4>" + username + "<img src='tick.png' class='user_tick'></h4>" +
                              "<h4>" + message + "</h4><button class='btn btn-warning' id=" + firebase_message_id + " value=" + likes + " onclick='update_likes(this.id)'><span class='glyphicon glyphicon-thumbs-up'>" + likes + " likes</span></button> <hr></hr>";
                        document.getElementById("output").innerHTML += display;
                        //End code
                  }
            });
      });
}
getData();

function Send() {
      var message = document.getElementById("Msage").value;
      firebase.database().ref(roomname).push({
            username: username,
            message: message,
            likes: 0
      });
      document.getElementById("Msage").value = "";
}

function update_likes(message_id) {
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(roomname).child(message_id).update({
            likes: updated_likes
      });
}