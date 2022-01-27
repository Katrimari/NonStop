function laske(){
  var pnro = parseInt(document.getElementById("pieni").value);
  var inro = parseInt(document.getElementById("isompi").value);
  var peka;
  var reka;
  var psumma = 0;
  var rsumma = 0;
  var pluku = "";
  var rluku = "";

  if(pnro%2 == 0){
    peka = pnro;
  }else{
    peka = pnro + 1;
  }
  for(var i = peka; i<=inro; i+=2)
 {
   pluku += i + ' ';
   psumma += i;
 }
 if(pnro%2 == 0)
  {
    reka = pnro+1;
  }
  else {
    reka = pnro;
  }
  for(var j = reka; j<=inro; j+=2)
  {
    rluku += j + ' ';
    rsumma += j;
  }
  document.getElementById("v").innerHTML = 'Parilliset numerot: ' + pluku +' ja niiden summa: ' + psumma + ' Parittomat luvut: ' + rluku + ' ja niiden summa: '+ rsumma + '.';
}
