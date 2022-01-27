function jarjesta(){
  var l1 = document.getElementById("luku1").value;
  var l2 = document.getElementById("luku2").value;
  var l3 = document.getElementById("luku3").value;
  var taulukko = [l1, l2, l3];
  taulukko = taulukko.sort();
  document.getElementById("v1").innerHTML = taulukko;
}
