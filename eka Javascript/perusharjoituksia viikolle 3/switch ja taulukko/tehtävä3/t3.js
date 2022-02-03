function muunna(){
  var jono = [];
  jono = [[3, 4, 7, 95], [82, 1, 29, 4], [7, 10, 7, 35], [6, 1, 21, 24], [3, 11, 15, 7]];
  var taulu = '<table border="1">';
  for(var j = 0; j < jono.length; j++)
  {
    taulu += '<tr>';
    for(var k = 0; k < jono[j].length; k++)
    {
      taulu += '<td>' + jono[j][k] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('v').innerHTML = taulu;
}
