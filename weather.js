const weather = document.querySelector("#weather sapn:first-child");
const city = document.querySelector("#weather span:last-child");

const API_KEY = "6eacf1b0868d0a4cfa188370bed36cee"

function onGeo(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);