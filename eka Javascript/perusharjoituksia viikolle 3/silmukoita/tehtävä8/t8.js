function laske(){
  var lukuk = parseInt(document.getElementById("korotettava").value);
  var lukup = parseInt(document.getElementById("potenssi").value);
  yht = lukuk;
  for(var i=1; i < lukup; i++){
    yht *= lukuk;
  }
  document.getElementById("v").innerHTML = yht;
}
