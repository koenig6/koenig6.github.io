var weatherGreenville = new XMLHttpRequest();

weatherGreenville.open('GET', 'https://api.wunderground.com/api/1f7ee438ba530e58/conditions/q/NC/Greenville.json', true);

weatherGreenville.send();

weatherGreenville.onload = function () {

    var weatherInfo = JSON.parse(weatherGreenville.responseText);
    console.log(weatherInfo);

    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;

    document.getElementById('speed').innerHTML = weatherInfo.current_observation.wind_mph;

    document.getElementById('wet').innerHTML = weatherInfo.current_observation.weather;

    document.getElementById('windy').innerHTML = weatherInfo.current_observation.windchill_string;



} //end of onload


// Current Conditions for Greenville



var currentW = new XMLHttpRequest();

currentW.open('GET', 'https://api.wunderground.com/api/1f7ee438ba530e58/forecast/q/NC/Greenville.json', true);
currentW.send();

currentW.onload = function () {

    var weatherI = JSON.parse(currentW.responseText);
    console.log(weatherI);

    document.getElementById('forecast').innerHTML = weatherI.forecast.txt_forecast.forecastday["0"].fcttext;
