function mikapaiva(){
  var päivä = parseInt(document.getElementById("day").value);
  switch (päivä) {
    case 1:
      document.getElementById("v").innerHTML = "Maanantai";
      break;
    case 2:
      document.getElementById("v").innerHTML = "Tiistai";
      break;
    case 3:
      document.getElementById("v").innerHTML = "Keskiviikko";
      break;
    case 4:
      document.getElementById("v").innerHTML = "Torstai";
      break;
    case 5:
      document.getElementById("v").innerHTML = "Perjantai";
      break;
    case 6:
      document.getElementById("v").innerHTML = "Lauantai";
      break;
    case 7:
      document.getElementById("v").innerHTML = "Sunnuntai";
      break;
  }
}
