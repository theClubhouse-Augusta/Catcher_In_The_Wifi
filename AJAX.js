
"use strict"


var emailRaw = document.getElementById("email").value;
var eventRaw = document.getElementById("eventSelect").value;
var email = encodeURIComponent(emailRaw);
var event = encodeURIComponent(eventRaw);
function encode() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementById("eventSelect").value = this.responseText;
      }
      var request = "/add?" + "&email=" + email + "&event=" + event;
      xhttp.open("GET", request, true);
      xhttp.send();
   };
}
encode();
