function heippa(){
  var kieli = document.getElementById("kieli").value;
  if(kieli == "en"){
    document.getElementById("v5").innerHTML = "Hello World!";
  }
    else if (kieli == "es") {
    document.getElementById("v5").innerHTML = "Hola Mundo!";
  }
    else if (kieli == "ru") {
    document.getElementById("v5").innerHTML = "Hej världen!";
  }else{
    document.getElementById("v5").innerHTML = "Et valinut kieltä!";
  }
}
