function salis(){
  var pw = "";
  var ekaS;
  var tokaS;
  var pw = document.getElementById("salis").value;
  var taulukko = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
  var temp = []; //luodaan tyhjä taulukko
  var lopuks ="";
  for(var i=0; i<pw.length; i++){
    ekaS = pw[i];
    temp.push(ekaS);
    var lisa = Math.floor(Math.random()*taulukko.length);
    tokaS=taulukko[lisa];
    temp.push(tokaS);
  }
  lopuks = temp.join("");
  document.getElementById("v").innerHTML = lopuks;
}
