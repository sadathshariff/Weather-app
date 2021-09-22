let inputCityName = document.querySelector(".inputCity");
let btn = document.querySelector(".inputBtn");
let cityName = document.querySelector(".cityName");
let temp = document.querySelector(".temperature");
let desc = document.querySelector(".description");
let cel = document.querySelector(".tempInCelsius");

function clickHandler() {
  var inputValue = inputCityName.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=YOUR_API_KEY`
  )
    .then((response) => response.json())
    .then((data) => {
      var nameValue = data["name"];
      var temperature = data["main"]["temp"] + " K";
      var kelvinTemp = data["main"]["temp"];
      var description = data["weather"][0]["description"];

      cityName.innerText = nameValue;
      temp.innerText = temperature;
      cel.innerText = kelvinToCelsius(kelvinTemp);

      desc.innerText = description;
    })
    .catch((err) => alert(`${inputValue} Wrong City Name`));
}

function kelvinToCelsius(temperature) {
  var kelToCel = (temperature - 273.15).toFixed(2) + "°C";
  return kelToCel;
}

console.log(kelvinToCelsius(293));

btn.addEventListener("click", clickHandler);
