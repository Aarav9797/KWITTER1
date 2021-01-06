function login(){
var input=document.getElementById("input").value;
    if(input==""){
window.alert("Please type your username")
    }
    else{
        localStorage.setItem("User_name",document.getElementById("input").value);
        window.location="kwitter_room.html";``
    }
}
