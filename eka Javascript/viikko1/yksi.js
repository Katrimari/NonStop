function tehtavaYksi(a, b)
{
  console.log(a + b);
}
var taulukkoMuuttuja = [34, 45, 100, 300];
function ekaMuuttuja()
{
  console.log(taulukkoMuuttuja [0]);
}
function tehtavaKolme(a, b)
{
  if((a + b) < 100){
    console.loc("lukujen summa on alle 100");
  }
  else{
    console.log("luvut ovat liian suuria, jotta pystyisin laskemaan niitä!")
  }
}
function tehtavaNelja(a, b)
{
  if(a == b){
    console.log("samat");
  }
  else{
    console.log("eri luvut!");
  }
}
function tehtavaViisi(a, b, c)
{
  console.log(a * 3600 + b * 60 + c * 1);
}
function tehtavaKuusi(a, b, c,)
{
  function muutaVuodet(c)
  {
    return c * 365.25;
  }
  function muutaKk(b)
  {
    switch(b-1)
    {
      case 0:
        return 0;
        break;
      case 1:
        return 31;
        break;
      case 2:
        return 59;
        break;
      case 3:
        return 90;
        break;
      case 4:
        return 120;
        break;
      case 5:
        return 151;
        break;
      case 6:
        return 181;
        break;
      case 7:
        return 212;
        break;
      case 8:
        return 243;
        break;
      case 9:
        return 273;
        break;
      case 10:
        return 304;
        break;
      case 11:
        return 334;
        break;
      default:
        return 0;
    }
  }
  Syntymaaika = muutaVuodet(c) + muutaKk(b) + a;
  Nyt = muutaVuodet(2021) + muutaKk(11) + 11
  console.log(Nyt-Syntymaaika);
}
