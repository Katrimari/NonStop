function ika(){
  var ika = parseInt(document.getElementById("ika").value);
  if(ika < 16){
    document.getElementById("v4").innerHTML = "Saat ajaa polkupyörää";
  } else if (ika < 18) {
    document.getElementById("v4").innerHTML = "Saat ajaa mopoa";
  }else{
    document.getElementById("v4").innerHTML = "Saat ajaa autoa";
  }
}
