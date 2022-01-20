function suorita(){
  var tulos = "";
  for (var i=1; i<=100; i++){
    if (i%3==0 && i%5==0){
      tulos+= " Hip Heijaa, ";
    }
    else if(i%3==0){
      tulos+= " Hip, ";
    }
    else if(i%5==0){
      tulos+=" Heijaa, ";
    }else{
      tulos+=","+i;
    }
    document.getElementById("v").innerHTML = tulos;
  }
}
