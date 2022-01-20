function tarkasta(){
  var luku = parseInt(document.getElementById("luku").value);
  var vastaus = 1;
  for(var i=1; i<=luku; i++){
    vastaus *= i;
  }
  document.getElementById("v").innerHTML = "luvun " + luku + " Kertoma on " + vastaus + "."
}
