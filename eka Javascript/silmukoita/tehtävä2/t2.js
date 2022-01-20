function salis(){
  var sana = document.getElementById("salis").value;
  var salasana = "";
  for(var i=0; i<sana.length; i++){
    salasana += sana[i] + "Ö"
  }
  salasana += "";
  document.getElementById("v").innerHTML = salasana;
}
