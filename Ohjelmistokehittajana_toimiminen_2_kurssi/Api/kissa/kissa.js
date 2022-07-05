function kissa(){
  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Host': 'nijikokun-random-cats.p.rapidapi.com',
  		'X-RapidAPI-Key': '42de1502fbmshaf0552d0baa5c3dp1c9f83jsn138beab8d12e'
  	}
  };

  fetch('https://nijikokun-random-cats.p.rapidapi.com/random/kitten', options)
  	.then(response => response.json())
  	.then(response => console.log(response))
  	.catch(err => console.error(err));
}
//console.log(response))
//document.getElementById("v").innerHTML = "<img src =" + response.url + ">"
