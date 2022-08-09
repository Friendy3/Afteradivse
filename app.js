url = 'https://api.adviceslip.com/advice';

fetch(url).then(function(response){
  return response.json();
}).then(function(data){
  const id = data.slip.id;
  document.querySelector('h1').innerHTML = "ADVICE #" + id
  const advice = document.createElement('p');
  advice.innerHTML = '"' + data.slip.advice + '"';

  document.querySelector('p').appendChild(advice)

})
