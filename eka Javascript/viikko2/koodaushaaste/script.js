const arr = [8, 4, 9, 6, 2]
function pieninSuurin()
{
  arr.sort();
  var pienin = arr.shift();
  var suurin = arr.pop();
  console.log("pienin: " + pienin +" suurin: " + suurin);
}

 var nro = [6]
 function rillinenRiton(a, b)
 {
   if(nro % 2==0)
   {
     console.log ("parillinen");
   }
   else{
     console.log("pariton");
   }
}



 function kuuKaudet()
 {
 var kk = document.getElementById("kuukausi").value;

    switch (kk) {
      case "1":
      console.log("Tammikuu");
      break;
      case "2":
      console.log("Helmikuu");
      break;
      case "3":
      console.log("Maaliskuu");
      break;
      case "4":
      console.log("Huhtikuu");
      break;
      case "5":
      console.log("Toukokuu");
      break;
      case "6":
      console.log("Kesäkuu");
      break;
      case "7":
      console.log("Heinäkuu");
      break;
      case "8":
      console.log("Elokuu");
      break;
      case "9":
      console.log("Syyskuu");
      break;
      case "10":
      console.log("Lokakuu");
      break;
      case "11":
      console.log("Marraskuu");
      break;
      case "12":
      console.log("Joulukuu");
      break;
      default:
      console.log("Et valinnut arvoa välillä 1-12");
    }
}

function henkilo(etunimi, sukunimi, losoite, pnro, ptp, puh, email)
{
  this.etunimi = etunimi,
  this.sukunimi = sukunimi,
  this.lahiosoite = losoite,
  this.postinumero = pnro,
  this.postitoimipaikka = ptp,
  this.puhelinnumero = puh,
  this.sahkoposti = email

  this.tiedot = NaytaTiedot;
}

function NaytaTiedot()
{
  var etunimi = this.etunimi;
  var sukunimi = this.sukunimi;
  var losoite = this.lahiosoite;
  var pnro = this.postinumero;
  var ptp = this.postitoimipaikka;
  var puh = this.puhelinnumero;
  var email = this.sahkoposti;

}

var Hannu = new henkilo("Hannu", "Markkanen", "kervontie 2", "03123", "Kerala", "0506253794", "hannu.markkanen@kerala.fi");
var Katri = new henkilo("Katri", "Lepola", "Kauppatie 2", "04310", "Tuusula", "0445000853", "katri.lepola@edu.keuda.fi");
var Mira = new henkilo("Mira", "Kujala", "orakuja 6A", "04500", "Kellokoski", "0464892614", "mira.kujala@gmail.fi");
var Kalle = new henkilo("Kalle", "Mutanen", "Koulutie 5", "08531", "Hikiö", "0427836485", "kalle.mutanen@luukku.fi");
var Jussi = new henkilo("jussi", "Kauppi", "louhi 3", "20713", "Perä", "0462798559", "jussi.kauppi@hotmail.fi");


console.log(Hannu);
console.log(Katri);
console.log(Mira);
console.log(Kalle);
console.log(Jussi);


var lause = "webmaster";
function jarjesta(){
const myArray = lause.split("").sort().join();
console.log(myArray);
}




function arvosana(){
  var nimi = document.getElementById('nimi').value;
  var koe = document.getElementById('koe').value;
  if(koe < 50){
    console.log(nimi + " Hylätty");
  }
  else if (koe < 60){
    console.log(nimi + " T1");
  }
  else if(koe < 70){
    console.log(nimi + " T2");
  }
  else if(koe < 80){
    console.log(nimi + " H3");
  }
  else if(koe < 90){
    console.log(nimi + " H4");
  }
  else{
    console.log(nimi + " K5");
  }
}
