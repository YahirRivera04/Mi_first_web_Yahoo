// JavaScript
function LoadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML=this.responseText;
  }
  xhttp.open("GET", "Yahoo.html", true);
  xhttp.send();
  }

  function Alerta(){
    alert("Por el momento estamos en reparaciones...");
  }