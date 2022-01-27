function kakaraVuosi(){
  var vuosi = document.getElementById("vuosi").value;
if(vuosi%4 == 0 && vuosi%100 != 0){
  document.getElementById("v").innerHTML = "vuosi on karkausvuosi";
} else if(vuosi%400 == 0){
  document.getElementById("v").innerHTML = "vuosi on karkausvuosi";
} else{
  document.getElementById("v").innerHTML = "vuosi ei ol karkausvuosi";
}
}
