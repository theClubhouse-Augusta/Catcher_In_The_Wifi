"use strict"


var emailRaw = document.getElementById("email").value;
var eventRaw = document.getElementById("eventSelect").value;
var email = encodeURIComponent(emailRaw);
var event = encodeURIComponent(eventRaw);
 //console.log(email);
 //document.getElementById("eventSelect").value = this.responseText;
 function encode() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadyStatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         console.log(email);
      }
   };
   var request = "/add?" + "&email=" + email + "&event=" + event;
   xhttp.open("GET", request, true);
   xhttp.send();
}
