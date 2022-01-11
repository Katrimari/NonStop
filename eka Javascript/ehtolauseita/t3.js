function pariton(){
  luku = document.getElementById("luku").value;

  if(luku%2 == 0){
    document.getElementById("v3").innerHTML = "Lukusi on parillinen";
  }else {
    document.getElementById("v3").innerHTML = "Lukusi on pariton";
  }
}
