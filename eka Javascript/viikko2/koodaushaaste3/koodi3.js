//tämän keinon löysin netistä.
function armstrongnumero(){
 for (var i = 1; i < 10; ++i){
   for (var j = 0; j < 10; ++j){
        for (var k = 0; k < 10; ++k){
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus)
           {
             console.log(pow);
            }
         }
       }
    }
  }

function testi(){
  for(var i = 100; i < 1000; i++){
    x = i.toString().split("");
    if(Math.pow(x[0],3)+Math.pow(x[1],3)+Math.pow(x[2],3)==i){
      console.log("On yhtä kuin: " + i);
    }
  }
}
function tahti(){
  var x = 5;
  var string = "";
  for (i = 1; i <= x; i++) {
    // tulostaa tähdet
    for (j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";// \n = rivinvaihto
  }
  console.log(string);
  }

function ithat(){
  var x = 5;
  var string = "";
  for (i = 0; i < x; i++) {
    // tulostaa tähdet
    for (k = 0; k < x - i; k++) {
      string += "*";
    }
    string += "\n";// \n = rivinvaihto
  }
  console.log(string);
}

function funny(){
  const merkit = ["o","h","j","e","l","m","o","i","n","t","i"," ","o","n"," ","h","a","u","s","k","a","a"]
  taulukko = Array.from(merkit);
  for(i=0; i < merkit.length; i++){
    switch(taulukko[i]){
      case "a":
      taulukko[i] = 4;
      break;
      case "e":
      taulukko[i] = 3;
      break;
      case "i":
      taulukko[i] = 1;
      break;
      case "o":
      taulukko[i] = 0;
      break;
      case "s":
      taulukko[i] = 5;
      break;
    }
  }
    teksti = taulukko.toString().replace(/,/g,"");
    console.log(teksti);
  }

  function hik_up(){
    for(i = 1; i <= 100; i++){
      if(i%15 == 0){
        console.log('Hik-up');
      }
      else if(i%5 == 0){
        console.log('up');
      }
      else if(i%3 == 0){
        console.log('Hik');
      }
      else{
        console.log(i);
      }
    }
  }
