"use strict"
//var click = document.getElementById("submit");

function encode() {
//console.log("lala")
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {

var res = this.responseText;
console.log(JSON.parse(res));
}
};

//click.addEventListener("click", encode);

//var emailRaw = document.getElementById("email").value;
//var eventRaw = document.getElementById("eventSelect").value;
var email = encodeURIComponent(email);
var event = encodeURIComponent(event);
var request = "/add?" + "email=" + email + "&event=" + event;
   //xhttp.onreadystatechange = function() {
   xhttp.open("GET",request, true);
   xhttp.send();
};
      
      //if (this.readyState == 4 && this.status == 200) {
      
      //xhttp.open("GET",  request, true);
      
   //};
//}