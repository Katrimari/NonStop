function suurinPienin(){
  var taulu = [], temp;
  for(var i = 0; i < 5; i++)
  {
    temp = document.getElementById('taulukko['+i+']').value;
    temp = parseInt(temp);
    taulu.push(temp);

  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById("v").innerHTML = 'Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}
