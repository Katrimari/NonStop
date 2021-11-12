function calcCircleArea(a, b)
{
var area = a * (2 * b);
  return Math.round(area);
}
var area = calcCircleArea(Math.PI, 2,1);


console.log(area)

function aakkosJar()
{
  var sana1 = prompt("anna eka sana");
  var sana2 = prompt("anna toka sana");
  return [sana1, sana2].sort()
}
console.log(aakkosJar());
