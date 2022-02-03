function lotto(){
  var lnrot = [];
  var temp;
  for(var i = 0; i < 7; i++){
    temp = Math.floor(Math.random()*40)+1;
    lnrot[i] = temp;
  }
  lnrot.sort();
   document.getElementById("v").innerHTML = lnrot;
}
