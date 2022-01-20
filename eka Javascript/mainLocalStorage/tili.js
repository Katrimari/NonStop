function store(){ // haetaan arvot
  var nimi = document.getElementById("key").value;
  var tili = document.getElementById("tili").value;
  var saldo = document.getElementById("saldo").value;
  var tyyppi = document.getElementById("tyyppi").value;

  const pankki = { //luodaan olio
    nimi: nimi,
    tili: tili,
    saldo: saldo,
    tyyppi: tyyppi,
  }

  window.localStorage.setItem(nimi,JSON.stringify(pankki));
  // muuttaa olion/objectin merkkijonoksi
}
function haekohteet(){ //hakee kohteet localStoragesta
  var nimi = document.getElementById("retrieveKey").value; //hakee käyttäjän nimen
  console.log("luodut tulokset");
  var tulokset = window.localStorage.getItem(nimi); // hakee nimen local localStoragesta
  var paragraph = document.createElement("p"); // luodaan paragraph
  var info = document.createTextNode(tulokset); // luodaan tekstitiedosto
  paragraph.appendChild(info); //liitetään tiedosto
  var element = document.getElementById("retrieve");
  element.appendChild(paragraph);
}

function poistaKohde(){  //Poistaa (1) kohteen
    var nimi = document.getElementById("removeKey").value; // hakee nimen
    localStorage.removeItem(nimi) //poistaa nimen
    console.log("poisti kohteen");
}

function poistakaikki(){ //poistaa kaikki kohteet
  localStorage.clear()
  console.log("kohteet poistettu");
}

window.onload =function(){ // varmistaa että sivu on valmis ennen function suorittamista.
  document.getElementById("clearButton").onclick = poistakaikki
  document.getElementById("removeButton").onclick = poistaKohde
  document.getElementById("retrieveButton").onclick = haekohteet
}
