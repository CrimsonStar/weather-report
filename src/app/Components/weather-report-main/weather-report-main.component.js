const api= {
  key: "e8c137facdd34df222d27a1522e1c2ce",
  baseurl: "https://api.openweathermap.org/data/2.5/weather?q="
}

const searchbox=document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
  if (evt.keyCode==13){
    getResults(searchbox.value);
    console.log(searchbox.value);
  }
}
function getResults(query){
  fetch('${api.base}${query}&units-metric&APPID=${api.key}').then(weather=> {
    return weather.json();
  }).then(displayResults);
}

function displayResults(weather){
  console.log(weather);
  let city= document.querySelector('.location .city');
  city.innerText= '${weather.name), ${weather.sys.country}';
  let now=new Date();
  let date= document.querySelector('.location .date');
  date.innerText= dateBuilder(now);
}
function dateBuilder(d){
  let months=["January", "February", "March", "April","May", "June", "August", "September", "October", "November", "December"];
  let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
}
