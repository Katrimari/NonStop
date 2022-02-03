function kortit(){
  var pakka = [''];
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskin = 0;
  for(i = 0; i < maat.length; i++)
  {
    for(j = 0; j < numerot.length; j++)
    {
      if(i == maat.length-1 && j == numerot.length-1)
      {
        pakka[laskin] = maat[i] + numerot[j];
      }
      else {
        pakka[laskin] = maat[i] + numerot[j];
        laskin++;
      }

    }
  }
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
      temp = pakka[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
  document.getElementById("v").innerHTML = kortit;
}
