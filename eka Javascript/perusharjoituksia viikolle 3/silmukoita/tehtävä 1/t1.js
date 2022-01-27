function parillinen(){
  var pari = parseInt(document.getElementById("pari").value);
  var jono="";
  for(var i = 2; i<= pari; i= i+2){
    jono+=i;
    jono+=",";
  }
  jono+="";
  document.getElementById("v").innerHTML = jono;
}
