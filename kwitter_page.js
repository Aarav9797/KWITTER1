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
        firebase.database().ref("/" + room_name).on('value', function (snapshot) {
              document.getElementById("output").innerHTML = "";
              snapshot.forEach(function (childSnapshot) {
                    childKey = childSnapshot.key;
                    childData = childSnapshot.val();
                    if (childKey != "purpose") {
                          firebase_message_id = childKey;
                          message_data = childData;
                          //Start code

                          //End code
                    }
              });
        });
  }
  //getData();

  function Send() {
        var message = document.getElementById("Msage").value;
        var username = localStorage.getItem("User_name");
        var roomname = localStorage.getItem("roomname");
        firebase.database().ref(roomname).push({
              username: username,
              message: message,
              likes: 0
        });
  document.getElementById("Msage").value="";
      }