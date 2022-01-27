function tarkasta(){
  var sana = document.getElementById("sana").value;
  var vastaus = "ei ole";
  for(var i=0; i<sana.length; i++){
    if(sana[i]== "ö" || sana[i]=="Ö"){
      vastaus = "on";
    }
  }
  document.getElementById("v").innerHTML = vastaus;
}
