var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','https://api.wunderground.com/api/968f45ebbdd693ec/conditions/q/MN/Franklin.json', true );

weatherObject.send();

weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

    document.getElementById('high').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('wet').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('speed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;

}


var wObject = new XMLHttpRequest();

wObject.open('GET','https://api.wunderground.com/api/968f45ebbdd693ec/forecast/q/MN/Franklin.json', true);

wObject.send();

wObject.onload = function () {

    var wInfo = JSON.parse(wObject.responseText)
    console.log(wInfo);

    document.getElementById('forecast').innerHTML = wInfo.

}
